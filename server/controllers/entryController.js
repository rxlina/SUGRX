const Entry = require('../models/entryModel'); //Set up mongoose instance from database URL instead!
const entryController = {};

entryController.getAllEntries = (req, res, next) => {
    Entry.find({}, (err, entries) => {
        console.log(entries);
        if (err) return res.sendStatus(400);
        res.locals.entries = entries;
        return next();
    })
}

entryController.createEntry = (req, res, next) => {
    console.log(req.body);
    Entry.create(req.body, (err, newEntry) => {
        if (err) return res.sendStatus(400);
        res.locals.entry = newEntry;
        return next();
    })
}

module.exports = entryController;