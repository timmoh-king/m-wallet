const bcrypt = require("bcrypt");
const walletsRouter = require("express").Router();
const Wallet = require("../models/wallet");

walletsRouter.get("/", async (request, response) => {
    const wallets = await Wallet.find({});
    response.json(wallets);
});

walletsRouter.get("/:id", async (request, response) => {
    const wallet = Wallet.findById(request.params.id);
    response.json(wallet);
});

module.exports = walletsRouter;