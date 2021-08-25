const Entry = require('../models/entryModel');
const entryController = {};

entryController.getAllEntries = (req, res, next) => {
    Entry.find({}, (err, entries) => {
        console.log('test');
        if (err) return res.sendStatus(400);
        res.locals.entries = entries;
        return next();
    })
}

entryController.createEntry = (req, res, next) => {
    Entry.create(req.body, (err, newEntry) => {
        if (err) return res.sendStatus(400);
        res.locals.entry = newEntry;
        return next();
    })
}