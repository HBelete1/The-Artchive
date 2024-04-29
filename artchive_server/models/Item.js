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
    },
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'user'
    }
})

module.exports = Item = mongoose.model('item', ItemSchema);