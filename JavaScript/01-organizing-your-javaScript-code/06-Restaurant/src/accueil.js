import restaurantImage from './assets/image.jpg';

export const loadHome = () => {
    const content = document.getElementById('content');

    content.innerHTML = '';

    const title = document.createElement('h1');
    title.textContent = 'Bienvenue au restaurant';

    const description = document.createElement('p');
    description.textContent = 'Nous sommes ravis de vous accueillir dans notre restaurant. Profitez de nos délicieux plats et de notre ambiance chaleureuse.';

    const image = document.createElement('img');
    image.src = restaurantImage;
    image.classList.add('home-image');

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(image);
}