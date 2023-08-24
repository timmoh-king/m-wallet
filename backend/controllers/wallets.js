const jwt = require("jsonwebtoken");
const walletsRouter = require("express").Router();
const Wallet = require("../models/wallet");
const User = require("../models/user");
const Goal = require("../models/goal");

const getTokenFrom = (request) => {
    const authorizationHeader = request.headers["authorization"];
    if (authorizationHeader && authorizationHeader.startsWith("Bearer ")) {
        return authorizationHeader.replace("Bearer ", "");
    }
    return null;
};

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

walletsRouter.post("/", async (request, response) => {
    const body = request.body;
    const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET);
    if (!decodedToken.id) {
        return response.status(401).json({ error: "token invalid" });
    }

    const user = await User.findById(decodedToken.id);


    const wallet = new Wallet({
        title: body.title,
        description: body.description,
        targetamount: body.targetamount,
        savedamount: body.savedamount,
        duedate: body.duedate,
        user: user.id,
        goal: body.goal
    });

    const savedWallet = await wallet.save();
    user.wallets = user.wallets.concat(savedWallet._id);
    await user.save();

    const goal = await Goal.findById(savedWallet.goal);

    goal.wallets = goal.wallets.concat(savedWallet._id);
    await goal.save();
    response.status(201).json(savedWallet);
});

walletsRouter.put("/:id", async (request, response) => {
    const body = request.body;

    const wallet = {
        savedamount: body.savedamount,
    };

    updatedWallet = await Wallet.findByIdAndUpdate(request.params.id, wallet, {
        new: true,
    });
    response.status(201).json(updatedWallet);
});

walletsRouter.delete("/:id", async (request, response) => {
    await Wallet.findByIdAndDelete(request.params.id);
    response.status(204).end();
});

module.exports = walletsRouter;