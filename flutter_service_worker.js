'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "170e72e6eb85f14d9aec300d62e8b336",
"version.json": "f0f8021236e1495e337cf09a41142181",
"index.html": "4ba89dcdf39763e5a010106380eba4c2",
"/": "4ba89dcdf39763e5a010106380eba4c2",
"main.dart.js": "355db82867d7b46ef1b2a385fec50176",
"404.html": "64b77ef9f0bedff004d9af76fd1eeebc",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ae3e8c106a88a92a9ec7d7cd8237fb4d",
".git/config": "f23cd230e136a071a0112fbb7d08168b",
".git/objects/61/b29522bc9cc3c1dfd493461eabb3a8d1d17476": "35a84ea7fff9755d714788eb2d3435fd",
".git/objects/68/e74f26be130841a53ffa204a6c4b34d09b2f11": "0f435885355f497d0199c4136e698fa9",
".git/objects/03/0347a63cfb907c8618856d50841752c9e125c1": "44833f4715af1b6ba325d3141c0c2ded",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/ea1d0292ab81574669088eb7e928f96d752d0f": "f8234096444887377aa5e3443f1fe56f",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/9addc1b401050e35405123239859fb8651768c": "9f19b5ecbe0a60667f08430329876d51",
".git/objects/3d/986c6b6bc5a267b798e60192b14a88125545bb": "bc007c29c2b2907bada512d830fe916c",
".git/objects/0b/cfcf49d6146e4f0fa149df703bd5972ece7e78": "4e7f47706e12e70e936a8fbef3877612",
".git/objects/0e/d219598c8a9e4fa4f02675197273799b96f029": "b0769dedb14087e3efdfe7b6eb65b246",
".git/objects/5f/e35ca368e76d88a06e0f3a840242cdfebec0aa": "280a98f2ef16e25e963668be5c0c91d5",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/d8/43f340d228380d0809b446083dfc066e5de60a": "5017d083e1bac03da9e48edb5c70a5b7",
".git/objects/e2/a065b7b98b84766d8f551c8c95d7857af11aea": "1a12d3b92bd06f83b5f91e08952729a1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c9e97c91d0ca32002d6eba53cf1981031047bb": "05d147ca28fabf58f251c18d62f64056",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/eb0aa97a3df1b0c32a45786965fec17db7a1c9": "b82490f1378fd49b8ae4d0426091a04d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/50e98dcac5d3812e45450f57ef6fc5222c1230": "abceb6fdf1381c2104a64bd55aa1bbfe",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fb/64a48507880a45b8240c65ce1a26e390d7935b": "223f8e41742b3c3d1702cbd7c952e396",
".git/objects/ed/eeb010f30a9cf2517ebcfd7834507845a6c736": "b8d29f3c30001cc1ba6c0c1226d8a529",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/29/c9c30556931b8c5dcf57ad905815d76a9c3c67": "37f691590c56f0d4b274f12bbff336af",
".git/objects/45/199cb2eaffe71aa63968931c6897de80bcb8cc": "6cef3812debb6f26ceb2be9429996db3",
".git/objects/73/851377a838b2666207a008fbf3f9ec734ba1e0": "919b67bc60d0c68fd844e4e0fedd9cdf",
".git/objects/73/abe6f91958c71916c251e74a91568b4c6d1b66": "1e532acc298602b524e26d9153ad08fc",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/9e00b38e24329481758b3da52eee13de585334": "ba72e0515ac73d39bd901edc88023c12",
".git/objects/26/e5d18b40c301855e957b028a4e1caa9ebee7ca": "cbd90cbdd8dadc9b0b390ba6ac089f2e",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/21/78c06b4a795f02b78347efb0a26c773a419075": "77a6e33e9c99e5f4139cfc96d7912ec9",
".git/objects/21/fcf68a55bf26ac8a92f80d9b3d128c20b3b3af": "a23eaafe248d320ce26df4b4e4b2f3d5",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/43/7df07fee0239994c1418ba54b43ce92735641d": "afb271cdab9a79b62c3babc1a1aa5a1f",
".git/objects/43/bfc966c819bb6f0a8a41db16aa8d1b26d7c3c5": "ced5b6e05255761686c67a2249871bab",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/1e57be1928e0702ed4705bbf62d74754303331": "de420a808514b8e81cd294034ddc7855",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/96/a0a9724eac424260f251d63606cd67d1c25bbb": "69f12140a2560e4c4b4a2bdb8cad84c2",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/30/e6731f21e00abe1e53b63281a08634594272a3": "c6a62267e879b10197dd5fcaf0f5c355",
".git/objects/06/5097133090c4e0b7bc1399a7d21284c22328ed": "8cb38059e7895756ab0655d7c515100a",
".git/objects/6c/6d1f64274bf3e37d98139046a2de1912f38d48": "06fa2546d2b12385d0da966875379c38",
".git/objects/52/8f19ecea14bfd48263ce41b49429383e71638e": "a75f329d7206b54414351fc0780b9c68",
".git/objects/0a/267fcb437351cb4ac6b6a8700d4d5ff13603d5": "175673eddf3c66cd6e486444ecf91100",
".git/objects/d3/6ad8aa5b7bfad0bfcec6e4c7dc92ac9e7b4ccd": "c2f2fec19591acefd32677d671873a7b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/e9b4e8e72da5d67848480fb5e6846a6dbd2893": "fc4f274b2c8539b1ae1c65575cec25bb",
".git/objects/a0/b0793499c2cf63b5752b967811e7a95671c3bc": "db23e58fa0a675091bb4a70b5f86bf90",
".git/objects/a7/8a693d4a16ddf89ab75bf746f497bbd9492b21": "93022f841090a8a00bba0caf9a2195ed",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ea/955255f4d4adcc9d817637ba0a39b6d0d033bb": "52bf6612acc5e16f2107cda2a99b7c6f",
".git/objects/cc/6eae03c934b720e54a4b866312dfafdfa5cd4b": "a8c231aca8fafb424ada82b0b731a76f",
".git/objects/f6/a9ccf72b0c58b703b15489d88ce6bed3ee24c5": "0d684e2ca3db72ed5b88a36c7775403a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/5f3073149ab44a5dfaff1c390476dbefa5626c": "af8d41ca2b93fd0e1c808b6207b3e9d8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/a2a7392d2f6e386effcd2f6e2e98268cfce9e0": "f692a8a11a51f818fa29bac541133bf7",
".git/objects/83/ab4a0766e7aeef7e9f6cbadd0834aeef8db1e6": "7f4d1c66a27182adb4bb66989b2e1e48",
".git/objects/77/dd32416bf2ddb1a431188e2034ba64171cc9a1": "984e8aed1e31df5333b4e3cb6885bc24",
".git/objects/70/7d1de376ffa6427252ec10b9463663718eff5b": "78770fadbd926b879ec553e9d4dea0fe",
".git/objects/70/544da8b2387e3f0758d09063b7cb8a351f13c3": "ff029d28313c0a7cdda97065678bcf21",
".git/objects/4a/588a5457ad55389d519def43f24e0b250a7b59": "e22e740830756820e8c5197b0b18621b",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/15/62e7a622dca1fa04d3a57bdc12cf2749db47a0": "5970d42fe9b03a210c598f5c85fc66a6",
".git/objects/15/406d3ab474671719eeacd55e99f92355b2e426": "8f94c439b7de83bbf096054698f6d16e",
".git/objects/15/6b66d142238b00065f71bff6f462fe1a5bbcc7": "8bc3236d0432feea9e8bd0a77bfe0708",
".git/objects/12/17a2c151dda0ea2ec0a0f70f822e05f638dfd6": "22696dccfc6d33859ab5f46626902dc2",
".git/objects/71/5cb065fa8dcc5a9ce7792904b8614442374886": "c2515697eb4f78a380750e6c760519f0",
".git/objects/76/c13bdc9bdf398ff3039d652ad2ae2c52830058": "1f4f2f84d5012f5da0e6570ebcb6ce8b",
".git/objects/82/2c10beca854705bcdf4d44cb7da2daf47c532f": "ddd6fecb05b54e9e71c0b62595c00d91",
".git/objects/47/dd1d98a98c80aa0af5d0ce8cc8e887c3259e69": "ce0e4df66c76d9dde11ff4d9b061251f",
".git/objects/47/1f127f98de3b0cfcd850f27bcb783db7a1614f": "1d255afd7be978e00e29e1923bd474a4",
".git/objects/47/16aa7bb83e8e54a499df9fb0b1ba0452bad233": "65338d03b017c30aa230bc507f71ba59",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/refs/remotes/origin/main": "ef84cf70e54f69b98b4d2f6ddda44ca6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/remotes/origin/main": "8e3becd5a8cfd5dd70d3e574a936bf19",
".git/index": "34bbf06f32c7506eacfd968f20000e14",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "717b659b5da04f163c98f617217910bd",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "cb5ab4616a1934867ea3b148dd77ce50",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "62b3a20d40d7fe59624c951d7f691959",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
