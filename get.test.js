const app = require('./server.js');
const supertest = require('supertest');
const request = supertest(app);
const music = require('./data.js');
const { it, expect } = require ('@jest/globals');

it('music will show all music' , async() => {
    const response = await request.get ('/music')
    expect(response.status).toBe(200);
    expect(response.body).toEqual(music);
});

it('music will show one band', async() =>{
    const response = await request.get('/music/1');
    const musics = music.results.find((singleMusic) => singleMusic.id === 1);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(musics);
});
