const confirmationRouter = require("express").Router();
const validationRouter = require("express").Router();
const simulationRouter = require("express").Router();
const requireAccessToken = require("../../middlewares/middleware")
const request = require('request');
const getAccessToken = requireAccessToken.getAccessToken;

confirmationRouter.post("/", async (req, res) => {
    console.log("-------------------Confirmation------------------");
    console.log(req.body);
});

validationRouter.post("/", async (req, res) => {
    console.log("-------------------Validation------------------");
    console.log(req.body);
});

simulationRouter.get('/', async (req, res) => {
    const access_token = await getAccessToken();
    let url = "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate"
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
                "CommandID": "CustomerBuyGoodsOnline",
                "Amount": 1,
                "Msisdn": 254708374149,
                "BillRefNumber": "null"
            }
        },
        function (error, response, body) {
            if (error) {
                console.log(error)
            }
            else {
                res.status(200).json(body)
            }
        }
    )
})


module.exports = {
    confirmationRouter,
    validationRouter,
    simulationRouter
};
