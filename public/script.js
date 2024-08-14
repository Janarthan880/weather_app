async function getWeather() {
    const city = document.getElementById('city').value;
    const response = await fetch(`/weather?city=${city}`);
    const weatherData = await response.json();
    
    if (response.ok) {
        const weatherInfo = `
            <p>Temperature: ${weatherData.main.temp}°C</p>
            <p>Pressure: ${weatherData.main.pressure} hPa</p>
            <p>Humidity: ${weatherData.main.humidity}%</p>
            <p>Description: ${weatherData.weather[0].description}</p>
        `;
        document.getElementById('weather-info').innerHTML = weatherInfo;
    } else {
        document.getElementById('weather-info').innerHTML = `<p>${weatherData.error}</p>`;
    }
}