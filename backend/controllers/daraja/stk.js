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
                "Password": "hbyqvThVbBa+4bTXGSjUL/7lPcu2JnxjdTzLaDXFyZa7aN+wRQJvNkg/kzhrRrYRfBmnklwfkrOZNJv3V9FDilfp3IEvoKDrox+3nDDszzbSQNzpHr6fA+nVvPM84t+SmpRCCsrnIzphKqY1lzVSZMzpiBK/P+3fzyeS+cODU29glkLEXucrRCyHJXR9+f07xKl662qVrEh32YJae/tsFfg+IB4OFmEIxgx2Erflv3NWrVSxL/Pm7LpbVB3PwrUGmOk6IwZK84aLdRkoySD5qVmIZZS9pi/c0POer/ty52oz9dfMhGzHAvm94Mf4MsnJ1lM7+qK4JDQY8xsZ5NXVzw==",
                "Timestamp": "20230827022938",
                "TransactionType": "CustomerPayBillOnline",
                "Amount": 1,
                "PartyA": 254708374149,
                "PartyB": 174379,
                "PhoneNumber": 254708374149,
                "CallBackURL": "http://105.160.38.199/stk_callback",
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
