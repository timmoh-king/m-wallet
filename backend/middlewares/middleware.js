const logger = require("../utils/logger");
const axios = require('axios');

async function getAccessToken() {
    try {
        const response = await axios.get("http://localhost:3005/api/accesstoken");
        const responseBody = response.data;
        const access_token = responseBody.access_token;
        return access_token;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
const requestLogger = (request, response, next) => {
    logger.info("Method:", request.method);
    logger.info("Path:  ", request.path);
    logger.info("Body:  ", request.body);
    logger.info("---");
    next();
};

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, request, response, next) => {
    logger.error(error.message);

    if (error.name === "CastError") {
        return response.status(400).send({ error: "malformatted id" });
    } else if (error.name === "ValidationError") {
        return response.status(400).json({ error: error.message });
    } else if (error.name === "JsonWebTokenError") {
        return response.status(401).json({
            error: "invalid token",
        });
    } else if (error.name === "TokenExpiredError") {
        return response.status(401).json({
            error: "token expired",
        });
    }

    next(error);
};

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler,
    getAccessToken,
};