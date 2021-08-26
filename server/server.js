const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const entryController = require('./controllers/entryController');
const api = require('./routes/api.js');
const PORT = 3000;

const mongoURI = 'mongodb://127.0.0.1:27017/mybloodglucoselog';
mongoose.connect(mongoURI, () => {
    console.log('connected to mongo', mongoURI)
});

app.use('/api', api);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
})

app.get('/new', (req, res) => {
    res.redirect('/newentry');
})

app.post('/newentry', entryController.createEntry, (req, res) => {
    res.redirect('/');
})

app.use('*', (req,res) => {
    res.status(404).send('Not Found');
});

module.exports = app.listen(PORT, () => console.log(`Server listening on port: ${PORT}...`));