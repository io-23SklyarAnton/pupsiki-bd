/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "cb119f8fbb8917b3d03b1ca3c2feda45"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.4ed65d73.css",
    "revision": "347ac28c17fd669ddf1e6e8885a73175"
  },
  {
    "url": "assets/img/add_project.002795f1.png",
    "revision": "002795f1d9fa8f817004fb5217793ff5"
  },
  {
    "url": "assets/img/database.f8da0913.png",
    "revision": "f8da0913401f48484e72fa7f9fec916b"
  },
  {
    "url": "assets/img/delete_project_by_id_result.b4d9231f.png",
    "revision": "b4d9231f6ec35f9d35bd7acf991870e7"
  },
  {
    "url": "assets/img/delete_project_by_id.db7ee789.png",
    "revision": "db7ee7897746762fe8e901ae1215de26"
  },
  {
    "url": "assets/img/get_all_projects.2c8ac5d5.png",
    "revision": "2c8ac5d517eb39af0dd68f9cbbf0229c"
  },
  {
    "url": "assets/img/get_project_by_id.a0f7eb95.png",
    "revision": "a0f7eb958171a09c36d5874a2e4dba32"
  },
  {
    "url": "assets/img/relational_scheme.45f8bfdd.png",
    "revision": "45f8bfdd6793223804ff8bf9533d3a8b"
  },
  {
    "url": "assets/img/runserver.2a30957a.png",
    "revision": "2a30957a9d696b0b188cc1ffec36e092"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update_project_by_id_result.f476b50c.png",
    "revision": "f476b50ced5b475a7648047b5660a70a"
  },
  {
    "url": "assets/img/update_project_by_id.cdbbc29a.png",
    "revision": "cdbbc29ae306a26542df967adf5f0731"
  },
  {
    "url": "assets/js/10.37f52945.js",
    "revision": "3477f07542b848a8ae9b505abd160217"
  },
  {
    "url": "assets/js/11.70e219cf.js",
    "revision": "cae9489be66ad5108148c373aab68cbb"
  },
  {
    "url": "assets/js/12.b4a0bb8c.js",
    "revision": "f3b18031a9b96e163975e42e946785c6"
  },
  {
    "url": "assets/js/13.288a5a1c.js",
    "revision": "f4af0ec7fceddd08e18a9739770eacbd"
  },
  {
    "url": "assets/js/14.4604fe7c.js",
    "revision": "e8fd0d4021a43d0f5160b0992ed475f4"
  },
  {
    "url": "assets/js/15.3d424b9c.js",
    "revision": "149520613609f2fc1a8a22e04fb74bb1"
  },
  {
    "url": "assets/js/16.568e383d.js",
    "revision": "514c48c84abf645114376fd3fbe450a3"
  },
  {
    "url": "assets/js/17.e9a9786c.js",
    "revision": "980d72ad355f9928c59d278e21eb31fc"
  },
  {
    "url": "assets/js/18.536cdf74.js",
    "revision": "0dba2f006daecfdec326c1eb5125eff4"
  },
  {
    "url": "assets/js/19.f353b113.js",
    "revision": "d52027c6cde319b4a57c80eb07760430"
  },
  {
    "url": "assets/js/2.91f9430c.js",
    "revision": "3a780b0ade720a86837d0485cb6f0580"
  },
  {
    "url": "assets/js/20.f2c98130.js",
    "revision": "1de9ef4a7bb7de7be72bcbed46987c70"
  },
  {
    "url": "assets/js/21.a388a6dc.js",
    "revision": "c1f935072692972eda3f843e963de048"
  },
  {
    "url": "assets/js/22.d0e18892.js",
    "revision": "90c41526b78149aa985dc7e78acced9d"
  },
  {
    "url": "assets/js/23.8243787f.js",
    "revision": "4fcb6d5f21050fb832f21c18b2642b2f"
  },
  {
    "url": "assets/js/24.f28ab627.js",
    "revision": "bf734cdb9fa2a898a59be36617462192"
  },
  {
    "url": "assets/js/26.19eb0566.js",
    "revision": "c0d4029cce7737aebb5d263eee738731"
  },
  {
    "url": "assets/js/3.3565f253.js",
    "revision": "dc24863f85837b5c0403d54d26d2662f"
  },
  {
    "url": "assets/js/4.94ade2c7.js",
    "revision": "45ba7af60c74822b2e9cd6dc99ce9441"
  },
  {
    "url": "assets/js/5.dd425fad.js",
    "revision": "05475d9d5e5a4160df6567e20dc08c53"
  },
  {
    "url": "assets/js/6.9a1aed30.js",
    "revision": "67e40e1100bebca9600d27bdb7914a2c"
  },
  {
    "url": "assets/js/7.81e145fe.js",
    "revision": "4267f9eda9b4025d8f6b166705972e6b"
  },
  {
    "url": "assets/js/8.674539e1.js",
    "revision": "1bace65b449debe6d86b8f936086e419"
  },
  {
    "url": "assets/js/9.45d30fbd.js",
    "revision": "97269ee536b8db385a19d0344ce35fb3"
  },
  {
    "url": "assets/js/app.ece5666e.js",
    "revision": "1b8e79292a7d222496329ef181eef3ea"
  },
  {
    "url": "conclusion/index.html",
    "revision": "186169ca2bc142c0e8a9c37bb5d5bbd9"
  },
  {
    "url": "design/index.html",
    "revision": "c0bde476d6ad6e00b98df68cb7655b09"
  },
  {
    "url": "index.html",
    "revision": "d64b18a9a44d416423a1bd2bf23a45b8"
  },
  {
    "url": "intro/index.html",
    "revision": "f59fd20544c1ea16927939e8084467fc"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "0d76620ef441252138f0afbb67e52477"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "cabde183b4e106038c56dbb67b365554"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "278ec3c669857d9b8764a531fb4301f3"
  },
  {
    "url": "software/index.html",
    "revision": "9afde0b8df736ea2e26f3f297800204d"
  },
  {
    "url": "test/index.html",
    "revision": "60580574df4d3e77068988eac6f3f305"
  },
  {
    "url": "use cases/index.html",
    "revision": "060803ba13032aa7c3cbb0e2197f1f00"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
