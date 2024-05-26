from fastapi import FastAPI, HTTPException, Depends, Form
from sqlalchemy.orm import Session, sessionmaker
from pydantic import BaseModel
from typing import List
from db import *

DATABASE_URL = "postgresql://pupsiki:pupsiki@localhost:5432/pupsiki"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

Base.metadata.create_all(bind=engine)


class ProjectCreate(BaseModel):
    id: int
    title: str
    status: str
    description: str


class ProjectUpdate(BaseModel):
    title: str = None
    status: str = None
    description: str = None


app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
async def read_root():
    return {"message": "Connected to server"}


@app.post("/project", response_model=ProjectCreate)
async def create_project(
        id: int = Form(...),
        title: str = Form(...),
        status: str = Form(...),
        description: str = Form(...),
        db: Session = Depends(get_db)
):
    project = ProjectCreate(id=id, title=title, status=status, description=description)
    db_project = Project(**project.dict())
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project


@app.get("/project", response_model=List[ProjectCreate])
async def read_projects(db: Session = Depends(get_db)):
    projects = db.query(Project).all()
    return projects


@app.get("/project/{project_id}", response_model=ProjectCreate)
async def read_project(project_id: int, db: Session = Depends(get_db)):
    project = db.query(Project).filter(Project.id == project_id).first()
    if project is None:
        raise HTTPException(status_code=404, detail="Record not found")
    return project


@app.patch("/project/{project_id}", response_model=ProjectCreate)
async def update_project(
        project_id: int,
        title: str = Form(None),
        status: str = Form(None),
        description: str = Form(None),
        db: Session = Depends(get_db)
):
    db_project = db.query(Project).filter(Project.id == project_id).first()
    if db_project is None:
        raise HTTPException(status_code=404, detail="Record not found")

    update_data = ProjectUpdate(title=title, status=status, description=description).dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_project, key, value)

    db.commit()
    db.refresh(db_project)
    return db_project


@app.delete("/project/{project_id}", response_model=ProjectCreate)
async def delete_project(project_id: int, db: Session = Depends(get_db)):
    db_project = db.query(Project).filter(Project.id == project_id).first()
    if db_project is None:
        raise HTTPException(status_code=404, detail="Record not found")

    db.delete(db_project)
    db.commit()
    return db_project
