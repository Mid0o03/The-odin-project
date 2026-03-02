const img = document.querySelector('img')
const btn = document.querySelector('button')

async function getNewGif() {
    try {
        const apiKey = 's0wqHBxZj6Fmv1LlLJGbEeSWZFX15yMS';
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=cats`, { mode: 'cors' })
        if (!response.ok) {
            throw new Error (`HTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        img.src = data.data.images.original.url;
    }
    catch (err){
        console.log("error", err);
        alert("Impossible de charger le GIF. Vérifiez la console (F12) et votre clé API.");
    }
   

}
getNewGif();

btn.addEventListener('click', getNewGif);
