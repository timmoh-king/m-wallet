/**
 * api route to enable the user to authenticate - signup
 * ensure that the user email doesn't exist else throw an error "email exist"
 * ensure that the user provides the firstname, lastname, contact and password
 */

const bcrypt = require("bcrypt");
const signupRouter = require("express").Router();
const User = require("../models/user");

signupRouter.post("/", async (request, response) => {
    const { firstname, lastname, contact, email, password } = request.body;

    const user = await User.findOne({ email });

    if (user) {
        return response.status(401).json({
            error: "email already exists",
          });
    }

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

module.exports = signupRouter;

