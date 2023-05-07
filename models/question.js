const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    name: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('Data', questionSchema)