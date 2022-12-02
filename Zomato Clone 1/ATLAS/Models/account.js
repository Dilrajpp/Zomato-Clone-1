const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('accountSample', accountSchema, 'account');