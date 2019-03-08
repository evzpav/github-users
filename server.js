const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const serveStatic = require('serve-static');

const port = process.env.PORT || 3000;
const baseURL = "https://api.github.com";
axios.defaults.headers.common = {'Content-Type': 'application/json', 'User-Agent': 'evzpav'};

app.use(cors());

app.use(serveStatic(__dirname + "/client/dist"));

app.get('/api', (req, res) => res.send('Github users api!'));

app.get('/api/users', async (req, res) => {

    let since = req.query && req.query.since ? req.query.since : 0;

    try {
        const users = await axios.get(`${baseURL}/users?since=${since}`);
        res.json(users.data)
    } catch (e) {
        res.status(500).json({error: error.toString()});
    }

});


app.get('/api/users/:username/details', async (req, res, next) => {
    let username = req.params && req.params.username ? req.params.username : "evzpav";
    try {

        // const users = await axios.get(`${baseURL}/users/${username}/hovercard`, {headers: "Accept:  application/vnd.github.hagar-preview+json"});
        // res.json(users.data)
    } catch (e) {
        res.status(500).json({error: e.toString()});
        next(e)
    }

});


app.listen(port, () => console.log(`Listening on port ${port}!`));