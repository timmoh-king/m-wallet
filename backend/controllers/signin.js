/**
 * api route to enable the user to authenticate - signin
 * ensure that the user email exists else throw an error "email doesn't exist"
 * ensure that the user password is correct else throw an error "wrong password"
 */

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/user");

loginRouter.post("/", async (request, response) => {
  const { email, password } = request.body;

  const user = await User.findOne({ email });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.password);

  if (!(user)) {
    return response.status(401).json({
      error: "invalid email address"
    })
  }

  if (!(passwordCorrect)) {
    return response.status(401).json({
      error: "incorrect password"
    })
  }

  const userForToken = {
    email: user.email,
    id: user._id,
  };

  const token = jwt.sign(userForToken, process.env.SECRET, {
    expiresIn: 60 * 60,
  });

  response.status(200).send({ token, email: user.email, firstname: user.firstname });
});

module.exports = loginRouter;
