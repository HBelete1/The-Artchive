const jwt = require("jsonwebtoken");
const authMiddleware = async (req, res, next) => {
    //try {
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ msg: "No token, access denied" });
        }
        const token2 = token.split(" ")[1];
        if (!token2) {
            return res.status(401).json({msg: "No token after Bearer, access denied" })
        }

        // does this need to be inside the last if?
        //const realToken = token.split(' ')[1];
        const verified = jwt.verify(token2, process.env.JWT_SECRET);
        if (!verified) {
            return res.status(401).json({ msg: "Token verification failed, authorization denied" })
        }
        req.user = verified.id;
        next();
};

const auth = async (req, res, next) => {
    try {
        // Call the auth middleware function to extract userId
        await authMiddleware(req, res, next);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = auth;
