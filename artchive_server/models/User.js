const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        required:true,
        type: String,
        unique: true,
        trim: true,
    },
    password: {
        required: true,
        type: String,
        minLength: 6,
    }
})

module.exports = User = mongoose.model('user', userSchema);