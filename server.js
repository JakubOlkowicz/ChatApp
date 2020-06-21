const express = require('express');
const path = require('path');
const messages = require('./messages.json');

const app = express();

app.use(express.static(path.join(__dirname, '/client')));

app.use(express.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/index.html'));
});

app.use((req, res) => {
    res.status(404).json({message: '404 not found...'});
})

app.listen(8000);