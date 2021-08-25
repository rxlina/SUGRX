const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;

const mongoURI = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000';
mongoose.connect(mongoURI);

app.get('/', entryController.getAllEntries, (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
})

// app.post('/new', entryController.createEntry, (req, res) => {

// })

module.exports = app.listen(3000, () => console.log(`Server listening on port: ${PORT}...`));