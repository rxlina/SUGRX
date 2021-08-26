const express = require('express');
const apiRouter = express.Router();
const entryRouter = require('./entries.js');

apiRouter.use('/entry', entryRouter, (req, res) => {
    return res.json({ entries: res.locals.entries });
});

module.exports = apiRouter;