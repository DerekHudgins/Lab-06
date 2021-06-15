const express = require('express');
const music = require('./data.js');
const app = express();
const port = 3000;

app.get('/music', (req,res) => {
    res.json(music);
});

app.get('/music/:id', (req, res) => {
    const id = Number(req.params.id);
    const musics = music.results.find((singleMusic) => singleMusic.id === id);
    res.json(musics);
});

app.listen (port, () =>{
    console.log('sup')
});