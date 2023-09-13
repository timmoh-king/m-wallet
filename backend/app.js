/**
 * restart mongodb connection from the server
 * register all api routes
 */

const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
require("express-async-errors");
const logger = require("./utils/logger");
const middleware = require("./middlewares/middleware");
const loginRouter = require("./controllers/signin");
const signupRouter = require("./controllers/signup");
const logoutRouter = require("./controllers/logout");
const usersRouter = require("./controllers/users");
const goalsRouter = require("./controllers/goals");
const walletsRouter = require("./controllers/wallets");
const userWalletRouter = require("./controllers/userWallet");
const newWalletRouter = require("./controllers/newWallet");
const accessTokenRouter = require("./controllers/daraja/accessToken");
const stkRouter = require("./controllers/daraja/stkpush");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

logger.info("connecting to", config.MONGODB_URI);

mongoose
    .connect(config.MONGODB_URI)
    .then(() => {
        logger.info("connected to MongoDB");
    })
    .catch((error) => {
        logger.error("error not connected to MongoDB:", error.message);
    });

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(middleware.requestLogger);

app.use("/api/users", usersRouter);
app.use("/api/signin", loginRouter);
app.use("/api/signup", signupRouter);
app.use("/api/logout", logoutRouter)
app.use("/api/goals", goalsRouter);
app.use("/api/wallets", walletsRouter);
app.use("/api/get_wallets", userWalletRouter);
app.use("/api/new_wallet", newWalletRouter);
app.use("/api/accesstoken", accessTokenRouter);
app.use("/api/stk", stkRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);
app.use(middleware.checkTokenBlacklist);

module.exports = app;
