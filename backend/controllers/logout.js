const logoutRouter = require("express").Router();
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET;

const tokenBlacklist = new Set();

logoutRouter.post('/', (req, res) => {
  const token = req.body.token;

  if (!token) {
    return res.status(400).json({ message: 'No token provided' });
  }

  try {
    jwt.verify(token, secretKey);

    tokenBlacklist.add(token);

    res.json({ message: 'Logout successful' });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Token verification failed' });
  }
});

module.exports = logoutRouter;
