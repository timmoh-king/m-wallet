const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (request, response) => {
    const users = await User.find({}).populate();
    response.json(users);
});

usersRouter.get("/:id", async (request, response) => {
    const user = await User.findById(request.params.id);
    response.json(user);
});

module.exports = usersRouter;
