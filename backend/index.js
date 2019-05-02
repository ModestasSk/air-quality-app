require('./app');
const express = require('express');
const request = require('request');
const cors = require('cors')

const apiKey ="LdTsKf5zgrF7qQ4Mb&fbclid=IwAR2-4HWdGgtQbIu0dIalftdYUk5WqShdX_3UrGW582cQqj8J-bQ3wkf4Z-k";

const baseApiUrl = "http://api.airvisual.com/v2/";

const app = express();

app.use(cors())

app.get('/artimiausias', (req, res) => {
    const output = request(baseApiUrl+'nearest_city?key='+apiKey, {json:true}, (error, apiRes, body) =>{
    if(error){return console.log(error);}
    res.json(body);  
    });
});


app.get('/miestai', (req, res) => {
    const {country} = req.query;
    const output = request(baseApiUrl+'states?country='+country+'&key='+apiKey, {json:true}, (error, apiRes, body) =>{
    if(error){return console.log(error);}
    res.json(body);  
    });
});

app.get('/pasirinktas', (req, res) => {
    const {country} = req.query;
    const {city} = req.query;
    const output = request(baseApiUrl+'city?city=' + city + '&state=' + city + '&country='+ country +'&key='+apiKey, {json:true}, (error, apiRes, body) =>{
    if(error){return console.log(error);}
    res.json(body);  
    });
});

app.listen(4000, ()=> {
    console.log('Server listening on port 4000')
});