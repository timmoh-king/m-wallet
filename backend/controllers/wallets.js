const walletsRouter = require("express").Router();
const Wallet = require("../models/wallet");

walletsRouter.get("/", async (request, response) => {
    const wallets = await Wallet.find({}).populate();
    response.json(wallets);
});

walletsRouter.get("/:id", async (request, response) => {
    const wallet = Wallet.findById(request.params.id);
    if (wallet) {
        response.json(wallet);
    }
    if (error) {
        response.status(404).end();
    }
});

walletsRouter.delete("/:id", async (request, response) => {
    await Wallet.findByIdAndDelete(request.params.id);
    response.status(204).end();
});

module.exports = walletsRouter;