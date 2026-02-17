const img = document.querySelector('img')
const btn = document.querySelector('button')

function getNewGif() {
    // La clé API utilisée semble invalide (Erreur 401 Unauthorized).
    // Vous devez en créer une nouvelle sur https://developers.giphy.com/dashboard/
    const apiKey = 's0wqHBxZj6Fmv1LlLJGbEeSWZFX15yMS';

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=cats`, { mode: 'cors' })
        .then(function (response) {
            // Vérifier si la réponse est OK (HTTP 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(function (response) {
            img.src = response.data.images.original.url;
        })
        .catch(function (err) {
            console.log("ERROR", err);
            // Alerte l'utilisateur en cas d'erreur
            alert("Impossible de charger le GIF. Vérifiez la console (F12) et votre clé API.");
        });
}
getNewGif();

btn.addEventListener('click', getNewGif);
