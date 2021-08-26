const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    bloodGlucose: { type: String, required: true },
    fasting: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Entry', entrySchema);