const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (request, response) => {
    const users = await User.find({}).populate('wallets');
    response.json(users);
});

usersRouter.get("/:id", async (request, response) => {
    const user = User.findById(request.params.id);
    response.json(user);
});

usersRouter.post("/", async (request, response) => {
    const { firstname, lastname, contact, email, password } = request.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
        firstname,
        lastname,
        contact,
        email,
        password: passwordHash,
    });

    const savedUser = await newUser.save();
    response.status(201).json(savedUser);
});

module.exports = usersRouter;
