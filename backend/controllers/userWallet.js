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

userWalletRouter.put("/:id", async (request, response) => {
    const body = request.body;

    if (isNaN(body.amount)) {
        return response.status(400).json({ error: "Invalid amount provided" });
      }

    const existingWallet = await Wallet.findById(request.params.id);

    if (!existingWallet) {
        return response.status(404).json({ error: "Wallet not found" });
    }

    const newSavedAmount = existingWallet.savedamount + parseInt(body.amount);

    existingWallet.savedamount = newSavedAmount;

    const updatedWallet = await existingWallet.save();

    response.status(201).json(updatedWallet);
});

module.exports = userWalletRouter;