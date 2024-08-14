const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;
const apiKey = ;  

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(baseUrl);
        const weatherData = response.data;
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des données météo' });
    }
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});