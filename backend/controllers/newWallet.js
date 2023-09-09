const jwt = require("jsonwebtoken");
const newWalletRouter = require("express").Router();
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

newWalletRouter.post("/", async (request, response) => {
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

module.exports = newWalletRouter;