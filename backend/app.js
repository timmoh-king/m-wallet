const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
require("express-async-errors");
const logger = require("./utils/logger");
const middleware = require("./middlewares/middleware");
const loginRouter = require("./controllers/login");
const signupRouter = require("./controllers/signup");
const usersRouter = require("./controllers/users");
const goalsRouter = require("./controllers/goals");
const walletsRouter = require("./controllers/wallets");
const accessTokenRouter = require("./controllers/daraja/accessToken");
const registerRouters = require("./controllers/daraja/register");
const simulationRouter = require("./controllers/daraja/simulation");
const balanceRouters = require("./controllers/daraja/balance");
const stkRouters = require("./controllers/daraja/stkpush");
const b2cRouters = require("./controllers/daraja/b2c");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");

const confirmationRouter = registerRouters.confirmationRouter;
const validationRouter = registerRouters.validationRouter;
const registerRouter = registerRouters.registerRouter;

const balanceRouter = balanceRouters.balanceRouter;
const timeoutUrlRouter = balanceRouters.timeoutUrlRouter;
const resultUrlRouter = balanceRouters.resultUrlRouter;

const stkRouter = stkRouters.stkRouter;
const stkCallbackRouter = stkRouters.stkCallbackRouter;

const b2cRouter = b2cRouters.b2cRouter;
const queueRouter = b2cRouters.queueRouter;
const resultRouter = b2cRouters.resultRouter;

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
app.use("/api/login", loginRouter);
app.use("/api/signup", signupRouter);
app.use("/api/goals", goalsRouter);
app.use("/api/wallets", walletsRouter);
app.use("/api/accesstoken", accessTokenRouter);
app.use("/api/register", registerRouter);
app.use("/api/validation", validationRouter);
app.use("/api/confirmation", confirmationRouter);
app.use("/api/simulation", simulationRouter);
app.use("/api/balance", balanceRouter);
app.use("/api/timeout_url", timeoutUrlRouter);
app.use("/api/result_url", resultUrlRouter);
app.use("/api/stk", stkRouter);
app.use("api/stk_url", stkCallbackRouter);
app.use("/api/b2c", b2cRouter);
app.use("/api/queue", queueRouter);
app.use("/api/result", resultRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
