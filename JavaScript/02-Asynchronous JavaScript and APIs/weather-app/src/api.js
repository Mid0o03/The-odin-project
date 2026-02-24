export async function getWeatherData(city) {
    const API_KEY = '3NFJ3WZVVR6M8A5ZB3JR2LPJZ';
    const encodedCity = encodeURIComponent(city);
    
    // URL exacte basée sur ton test réussi
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedCity}?unitGroup=metric&key=${API_KEY}&contentType=json`;

    try {
        const response = await fetch(url, { mode: 'cors' });

        if (!response.ok) {
            throw new Error(`Erreur ${response.status} : Ville non trouvée`);
        }

        const weatherData = await response.json();
        return processData(weatherData);
    } catch (err) {
        console.error("Erreur lors de l'appel API :", err);
        throw err;
    }
}

function processData(weatherData) {
    const {resolvedAddress, description, currentConditions} = weatherData;
    return {
        city: resolvedAddress,
        temp: currentConditions.temp,
        condition: currentConditions.conditions,
        description: description,
    }
}