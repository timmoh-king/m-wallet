const b2cRouter = require("express").Router();
const queueRouter = require("express").Router();
const resultRouter = require("express").Router();
const requireAccessToken = require("../../middlewares/middleware")
const request = require('request');
const getAccessToken = requireAccessToken.getAccessToken;

b2cRouter.get('/', async (req, res) => {
    const access_token = await getAccessToken();
    let url = "https://sandbox.safaricom.co.ke/mpesa/b2c/v3/paymentrequest"
    let auth = "Bearer " + access_token

    request(
        {
            url: url,
            method: "POST",
            headers: {
                "Authorization": auth
            },
            json: { 
                "OriginatorConversationID": "4b5c8871-afe3-4041-9a74-eea8c8ce0236",
                "InitiatorName": "testapi",
                "SecurityCredential": "dV1qMQ/q0KAdGxsALWGrtZMR/V8yg5uEJ+ejPH7xs0oSu7mUHd3sA+2eYF7f0abCxsBdxOKsVdxvnczvzPEdCJGXdzHWHPlnnlvL4Id5Te9cG9ntW9Wk7Idtv08xErH7W4/MKn5ViI0iq1473Dy0pJbrKuElfH67ClwuSsV4uOwBjQHjPq/f6RRPYF8FHm3lENCufz6Fzc8PPZW7qifazYF8zMOKHzPwHbWGeJaBeu4HIj3DoBmQDaMYuOEhmcSAhqEaZWFQB/axKc7Xh4CcKJme0dmIDQNOBrzZGT9Fq7Vg0RWyr0xIJrN62oA+tN6vT4W0JSL4GsHcQ1OGyifs2w==",
                "CommandID": "BusinessPayment",
                "Amount": 10,
                "PartyA": 600978,
                "PartyB": 254708374149,
                "Remarks": "Test remarks",
                "QueueTimeOutURL": "http://105.160.38.199/b2c/queue",
                "ResultURL": "http://105.160.38.199/b2c/result",
                "occasion": "Occasion" 
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

queueRouter.post("/", async (req, res) => {
    console.log("------------------Queue------------------");
    console.log(req.body.Result.ResultParameters);
});

resultRouter.post("/", async (req, res) => {
    console.log("-------------------Result--------------------");
    console.log(req.body);
});

module.exports = {
    b2cRouter,
    queueRouter,
    resultRouter
};
