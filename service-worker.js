// Nom du cache
const CACHE_NAME = 'offline-cache-v1';

// Fichiers à mettre en cache
const urlsToCache = [
  'index.html',
  'assets/js/main.js',
  'assets/js/util.js',
  'assets/js/populate.js',
  'assets/css/style.css',
  'assets/json/colle_event.json',
  'assets/json/regular_event.json',
];

// Lors de l'installation du service worker, on met en cache les fichiers définis
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Fichiers mis en cache lors de l\'installation');
        return cache.addAll(urlsToCache).then(() => {
          console.log('Tous les fichiers ont été mis en cache avec succès.');
        })
        .catch((error) => {
          console.error('Erreur lors de la mise en cache des fichiers:', error);
          console.log('Vérifie les URLs suivantes pour des erreurs :');
          urlsToCache.forEach(url => {
            fetch(url)
              .then(response => {
                if (!response.ok) {
                  console.error(`L'URL ${url} a échoué avec le statut: ${response.status}`);
                }
              })
              .catch(err => {
                console.error(`La requête vers ${url} a échoué :`, err);
              });
          });
        });
      })
  );
});

// Activation du service worker et suppression des anciens caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
              console.log('Ancien cache supprimé:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });

  // Interception des requêtes réseau
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      fetch(event.request) // Essaye d'abord de faire la requête réseau
        .then((response) => {
          // Si la réponse réseau est valide, on la renvoie
          return response;
        })
        .catch(() => {
          // Si la requête réseau échoue (hors ligne), on tente de trouver dans le cache
          return caches.match(event.request)
            .then((cachedResponse) => {
              // Si on trouve une réponse dans le cache, on la retourne
              if (cachedResponse) {
                return cachedResponse;
              }
              console.error(`La ressource ${event.request.url} n'est pas disponible dans le cache et le réseau a échoué.`);
              return new Response('', { status: 404, statusText: 'Not Found' });
            });
        })
    );
  });