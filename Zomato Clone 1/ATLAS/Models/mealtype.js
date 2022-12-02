const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mealtypeSchema = new Schema({
    mealtype:
    {
        type: String,
        required: true
    },
    mealtypeID:
    {
        type: Number,
        required: true
    }
})
module.exports = mongoose.model('mealSample', mealtypeSchema, 'mealtype');