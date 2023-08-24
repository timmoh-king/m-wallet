const goalsRouter = require("express").Router();
const Goal = require("../models/goal");

goalsRouter.get("/", async (request, response) => {
    const goals = await Goal.find({});
    response.json(goals);
});

goalsRouter.get("/:id", async (request, response) => {
    const goal = await Goal.findById(request.params.id);
    response.json(goal);
});

goalsRouter.post("/", async (request, response) => {
    const { title, description, url } = request.body;

    const newGoal = new Goal({
        title,
        description,
        url,
    });

    const savedGoal = await newGoal.save();
    response.status(201).json(savedGoal);
});

module.exports = goalsRouter;
