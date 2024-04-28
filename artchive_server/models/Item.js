const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    }
})

module.exports = Item = mongoose.model('item', ItemSchema);