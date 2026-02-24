const weatherDisplay = document.querySelector('#weather-display');

export function renderWeather(data) {
    weatherDisplay.innerHTML = `
        <div class="weather-card">
            <h2>${data.city}</h2>
            <div class="temp">${Math.round(data.temp)}°C</div>
            <div class="condition">${data.condition}</div>
            <p class="description">${data.description}</p>
        </div>
    `;
}

export function showLoading() {
    weatherDisplay.innerHTML = '<div class="loading"></div>';
}

export function showError(message) {
    weatherDisplay.innerHTML = `<div class="error-message">${message}</div>`;
}

export function clearDisplay() {
    weatherDisplay.innerHTML = '';
}
