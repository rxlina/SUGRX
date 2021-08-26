const express = require('express');
const entryRouter = express.Router();
const entryController = require('../controllers/entryController');

entryRouter.get('/', entryController.getAllEntries, (req, res, next) => {
    return next();
})

module.exports = entryRouter;