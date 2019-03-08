const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const serveStatic = require('serve-static');
const port = process.env.PORT || 3000;
const baseURL = "https://api.github.com";
axios.defaults.headers.common = {'Content-Type': 'application/json'};

app.use(cors());

app.use(serveStatic(__dirname + "/client/dist"));

app.get('/api', (req, res) => res.send('Github users api!'));

app.get('/api/users', async (req, res) => {

    let since = req.query && req.query.since ? req.query.since : 0;

    try {
        const users = await axios.get(`${baseURL}/users?since=${since}`);
        res.json(users.data)
    } catch (e) {
        res.status(500).json({error: e.toString()});
    }

});


app.get('/api/users/:username/details', async (req, res) => {
    let username = req.params && req.params.username ? req.params.username : "";
    try {
        const users = await axios.get(`${baseURL}/users/${username}`);
        res.json(users.data)
    } catch (e) {
        res.status(500).json({error: e.toString()});
    }

});


app.get('/api/users/:username/repos', async (req, res) => {
    let username = req.params && req.params.username ? req.params.username : "";
    try {
        const headers = {"Accept": "application/vnd.github.mercy-preview+json"};
        const users = await axios.get(`${baseURL}/users/${username}/repos?type=owner&sort=pushed&direction=desc`, {headers});
        res.json(users.data)
    } catch (e) {
        res.status(500).json({error: e.toString()});
    }

});


app.listen(port, () => console.log(`Listening on port ${port}!`));