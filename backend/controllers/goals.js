const bcrypt = require("bcrypt");
const goalsRouter = require("express").Router();
const Goal = require("../models/goal");

goalsRouter.get("/", async (request, response) => {
    const goals = await Goal.find({});
    response.json(goals);
});

goalsRouter.get("/:id", async (request, response) => {
    const goal = Goal.findById(request.params.id);
    response.json(goal);
});

module.exports = goalsRouter;
