const jwt = require("jsonwebtoken");
const userWalletRouter = require("express").Router();
const Wallet = require("../models/wallet");
const User = require("../models/user");

const getTokenFrom = (request) => {
    const authorizationHeader = request.headers["authorization"];
    if (authorizationHeader && authorizationHeader.startsWith("Bearer ")) {
        return authorizationHeader.replace("Bearer ", "");
    }
    return null;
};

userWalletRouter.get("/", async (request, response) => {
    const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET);
    if (!decodedToken.id) {
        return response.status(401).json({ error: "token invalid" });
    }

    const user = await User.findById(decodedToken.id);

    const wallets = await  Wallet.find({ user: user._id }).populate();
    response.json(wallets);
});

module.exports = userWalletRouter;