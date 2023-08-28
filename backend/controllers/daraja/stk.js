const stkRouter = require("express").Router();
const requireAccessToken = require("../../middlewares/middleware")
const request = require('request');
const getAccessToken = requireAccessToken.getAccessToken;

stkRouter.get('/', async (req, res) => {
    const access_token = await getAccessToken();
    let url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
    let auth = "Bearer " + access_token

    request(
        {
            url: url,
            method: "POST",
            headers: {
                "Authorization": auth
            },
            json: {
                "BusinessShortCode": 174379,
                "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMwODI4MTc1OTA0",
                "Timestamp": '20230828175904',
                "TransactionType": "CustomerPayBillOnline",
                "Amount": 1,
                "PartyA": 254718543357,
                "PartyB": 174379,
                "PhoneNumber": 254718543357,
                "CallBackURL": "http://105.160.38.199/path",
                "AccountReference": "CompanyXLTD",
                "TransactionDesc": "Payment of X"
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
});

module.exports = stkRouter;
