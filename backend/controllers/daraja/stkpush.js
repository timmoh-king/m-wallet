const jwt = require("jsonwebtoken");
const stkRouter = require("express").Router();
const requireAccessToken = require("../../middlewares/middleware")
const request = require('request');
const getAccessToken = requireAccessToken.getAccessToken;
const User = require("../../models/user");
const Wallet = require("../../models/wallet");

const getTokenFrom = (request) => {
    const authorizationHeader = request.headers["authorization"];
    if (authorizationHeader && authorizationHeader.startsWith("Bearer ")) {
        return authorizationHeader.replace("Bearer ", "");
    }
    return null;
};

stkRouter.post('/', async (req, res) => {
    const access_token = await getAccessToken();

    const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET);
    if (!decodedToken.id) {
        return response.status(401).json({ error: "token invalid" });
    }

    const user = await User.findById(decodedToken.id);
    const wallet = await Wallet.findOne({ user: user.id });

    if (!user || !wallet) {
        return res.status(400).json({ error: "User or wallet not found" });
    }

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
                "Amount":  req.body.amount,
                "PartyA": 254718543357,
                "PartyB": 174379,
                "PhoneNumber": user.contact,
                "CallBackURL": "http://105.160.38.199/stk_callback",
                "AccountReference": wallet.title,
                "TransactionDesc": wallet.description
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
