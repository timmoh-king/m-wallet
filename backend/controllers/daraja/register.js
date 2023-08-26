const registerRouter = require("express").Router();
const confirmationRouter = require("express").Router();
const validationRouter = require("express").Router();
const requireAccessToken = require("../../middlewares/middleware")
const request = require('request');
const getAccessToken = requireAccessToken.getAccessToken;

registerRouter.get('/', async (req, resp) => {
    const access_token = await getAccessToken();
    let url = "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl"
    let auth = "Bearer " + access_token

    request(
        {
            url: url,
            method: "POST",
            headers: {
                "Authorization": auth
            },
            json: {
                "ShortCode": 600986,
                "ResponseType": "Completed",
                "ConfirmationURL": "http://105.160.38.199/confirmation",
                "ValidationURL": "http://105.160.38.199/validation"
            }
        },
        function (error, response, body) {
            if (error) { console.log(error) }
            resp.status(200).json(body)
        }
    )
});


confirmationRouter.post("/", async (req, res) => {
    console.log("------------------Confirmation------------------");
    console.log(req.body);
});

validationRouter.post("/", async (req, res) => {
    console.log("-------------------Validation--------------------");
    console.log(req.body);
});


module.exports = {
    confirmationRouter,
    validationRouter,
    registerRouter
};
