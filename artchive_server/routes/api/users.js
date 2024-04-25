const express = require('express');
const bcryptjs = require('bcryptjs');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
var bodyParser = require('body-parser')

// Signup Route
userRouter.post("/signup", bodyParser.json(), async (req, res) => {
    try {
        const { username, password, confirmPassword } = req.body;
        if (!username || !password || !confirmPassword) {
            return res.status(400).json({ msg: "Please fill out all fields" })
        }
        if (password.length < 6) {
            return res.status(400).json({ msg: "Password should be at least 6 characters" })
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ msg: "Passwords do not match" })
        }
        const existingUser = await User.findOne({username});
        if (existingUser) {
            return res.status(400).json({ msg: "An account with this username already exists" })
        }
        const hashedPassword = await bcryptjs.hash(password, 8);
        const newUser = new User({username, password: hashedPassword});

        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login Route
userRouter.post("/login", auth, bodyParser.json(), async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ msg: "Please fill out all fields" })
        }

        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).send({ msg: "Account with this username not found" })
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send({ msg: "Incorrect Password" })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.json({ token, user: { id: user._id, username: user.username } })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// check if token is valid
userRouter.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("Authorization");
        if (!token) return res.json(false);
        const verified = jwt.verify(tokenParts[1], process.env.JWT_SECRET);
        if (!verified) return res.json(false);
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
        return res.json(true);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = userRouter;