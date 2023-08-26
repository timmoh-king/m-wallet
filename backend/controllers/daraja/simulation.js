const confirmationRouter = require("express").Router();
const validationRouter = require("express").Router();
const simulationRouter = require("express").Router();
const request = require('request');

async function getAccessToken() {
    try {
        const response = await request.get({
            url: "http://localhost:3005/api/accesstoken"
        });

        const responseBody = response;
        const access_token = responseBody.access_token;
        return access_token;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

confirmationRouter.post("/", async (req, res) => {
    console.log("-------------------Confirmation------------------");
    console.log(req.body);
});

validationRouter.post("/", async (req, res) => {
    console.log("-------------------Validation------------------");
    console.log(req.body);
});

simulationRouter.get("/", async (req, res) => {
    try {
        const access_token = await getAccessToken();

        let url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
        let auth = "Bearer " + access_token;

        const response = await request.post({
            url: url,
            method: "POST",
            headers: {
                "Authorization": auth,
            },
            json: {
                "BusinessShortCode": "600990",
                "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3",
                "Timestamp": "20230826161827",
                "TransactionType": "CustomerPayBillOnline",
                "Amount": "1",
                "PartyA": "254708374149",
                "PartyB": "174379",
                "PhoneNumber": "254708374149",
                "CallBackURL": "http://105.160.38.199/pat",
                "AccountReference": "Test",
                "TransactionDesc": "Test"
            }
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error });
        throw error;
    }
});

module.exports = {
    confirmationRouter,
    validationRouter,
    simulationRouter
};
