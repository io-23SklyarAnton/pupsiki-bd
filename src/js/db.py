from sqlalchemy import create_engine, Column, ForeignKey, Integer, String, Boolean, Text, DateTime, TIMESTAMP
from sqlalchemy.orm import relationship, backref, declarative_base, sessionmaker

Base = declarative_base()


class Permission(Base):
    __tablename__ = 'permission'
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=True)


class Role(Base):
    __tablename__ = 'role'
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=True)


class Grant(Base):
    __tablename__ = 'grant1'
    id = Column(Integer, primary_key=True)
    role_id = Column(Integer, ForeignKey('role.id'), nullable=False)
    permission_id = Column(Integer, ForeignKey('permission.id'), nullable=False)

    role = relationship("Role", backref=backref("grants", cascade="all, delete-orphan"))
    permission = relationship("Permission", backref=backref("grants", cascade="all, delete-orphan"))


class Label(Base):
    __tablename__ = 'label'
    id = Column(Integer, primary_key=True)
    title = Column(String(100), nullable=False)


class Project(Base):
    __tablename__ = 'project'
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(100), nullable=True)
    status = Column(String(100), nullable=True)
    description = Column(String(500), nullable=True)


class Team(Base):
    __tablename__ = 'team'
    id = Column(Integer, primary_key=True)
    project_id = Column(Integer, ForeignKey('project.id'), nullable=False)

    project = relationship("Project", backref=backref("teams", cascade="all, delete-orphan"))


class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    username = Column(String(100), nullable=True)
    email = Column(String(100), nullable=True)
    password = Column(String(100), nullable=True)
    isBanned = Column(Boolean, nullable=True)


class Participant(Base):
    __tablename__ = 'participant'
    id = Column(Integer, primary_key=True)
    role_id = Column(Integer, ForeignKey('role.id'), nullable=False)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    team_id = Column(Integer, ForeignKey('team.id'), nullable=False)

    role = relationship("Role", backref=backref("participants", cascade="all, delete-orphan"))
    user = relationship("User", backref=backref("participants", cascade="all, delete-orphan"))
    team = relationship("Team", backref=backref("participants", cascade="all, delete-orphan"))


class Sprint(Base):
    __tablename__ = 'sprint'
    id = Column(Integer, primary_key=True)
    title = Column(String(100), nullable=True)
    description = Column(String(500), nullable=True)
    starttime = Column(TIMESTAMP, nullable=True)
    deadline = Column(TIMESTAMP, nullable=True)
    project_id = Column(Integer, ForeignKey('project.id'), nullable=False)

    project = relationship("Project", backref=backref("sprints", cascade="all, delete-orphan"))


class Task(Base):
    __tablename__ = 'task'
    id = Column(Integer, primary_key=True)
    title = Column(String(100), nullable=True)
    description = Column(String(100), nullable=True)
    status = Column(String(100), nullable=True)
    deadline = Column(TIMESTAMP, nullable=True)
    sprint_id = Column(Integer, ForeignKey('sprint.id'), nullable=False)

    sprint = relationship("Sprint", backref=backref("tasks", cascade="all, delete-orphan"))


class Review(Base):
    __tablename__ = 'review'
    id = Column(Integer, primary_key=True)
    title = Column(String(100), nullable=True)
    task_id = Column(Integer, ForeignKey('task.id'), nullable=False)
    participant_id = Column(Integer, ForeignKey('participant.id'), nullable=False)
    review_id = Column(Integer, ForeignKey('review.id'), nullable=True)

    task = relationship("Task", backref=backref("reviews", cascade="all, delete-orphan"))
    participant = relationship("Participant", backref=backref("reviews", cascade="all, delete-orphan"))
    parent_review = relationship("Review", remote_side=[id],
                                 backref=backref("child_reviews", cascade="all, delete-orphan"))


class Tag(Base):
    __tablename__ = 'tag'
    id = Column(Integer, primary_key=True)
    label_id = Column(Integer, ForeignKey('label.id'), nullable=False)
    task_id = Column(Integer, ForeignKey('task.id'), nullable=False)

    label = relationship("Label", backref=backref("tags", cascade="all, delete-orphan"))
    task = relationship("Task", backref=backref("tags", cascade="all, delete-orphan"))


if __name__ == "__main__":
    engine = create_engine('postgresql://pupsiki:pupsiki@localhost:5432/pupsiki')
    Base.metadata.create_all(engine)
