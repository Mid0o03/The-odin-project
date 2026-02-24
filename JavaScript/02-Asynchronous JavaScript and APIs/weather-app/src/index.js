import "./style.css";
import { getWeatherData } from "./api.js";
import { renderWeather, showLoading, showError } from "./dom.js";

const form = document.querySelector('#search-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const cityInput = document.querySelector('#city-input');
    const city = cityInput.value.trim();

    if (!city) return;

    showLoading();
    console.log("Recherche lancée pour :", city);

    try {
        const data = await getWeatherData(city);
        console.log("Données reçues :", data);
        renderWeather(data);
        cityInput.value = '';
    } catch (err) {
        console.error("Erreur :", err);
        showError(err.message || "Une erreur est survenue");
    }
});