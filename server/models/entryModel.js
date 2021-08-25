const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    bloodGlucose: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Entry', entrySchema);