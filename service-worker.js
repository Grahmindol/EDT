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
  // Créer une URL sans les paramètres de requête pour le cache
  const requestUrl = new URL(event.request.url);
  requestUrl.search = ''; // Supprimer les paramètres de requête pour la mise en cache

  event.respondWith(
    fetch(event.request) // Essaye d'abord de faire la requête réseau
      .then((response) => {
        // Si la réponse réseau est valide, on la renvoie et on met à jour le cache
        if (response && response.status === 200) {
          console.log("Réponse réseau valide, mise à jour du cache :", requestUrl.href);
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(requestUrl, response.clone()); // Mettre à jour le cache avec l'URL sans paramètres
            return response; // Retourner la réponse réseau
          });
        }
        return response; // Retourner la réponse réseau même si elle n'est pas 200 OK
      })
      .catch(() => {
        // Si la requête réseau échoue, on tente de trouver dans le cache
        console.warn("Requête réseau échouée, tentative de réponse depuis le cache :", requestUrl.href);
        return caches.match(requestUrl)
          .then((cachedResponse) => {
            if (cachedResponse) {
              console.log("Réponse trouvée dans le cache :", requestUrl.href);
              return cachedResponse;
            }
            // Si pas de réponse dans le cache, renvoyer une 404
            console.error(`La ressource ${event.request.url} n'est pas disponible dans le cache et le réseau a échoué.`);
            return new Response('', { status: 404, statusText: 'Not Found' });
          });
      })
  );
});
