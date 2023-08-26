const balanceRouter = require("express").Router();
const timeoutUrlRouter = require("express").Router();
const resultUrlRouter = require("express").Router();
const requireAccessToken = require("../../middlewares/middleware")
const request = require('request');
const getAccessToken = requireAccessToken.getAccessToken;

balanceRouter.get('/', async (req, resp) => {
    const access_token = await getAccessToken();
    let url = "https://sandbox.safaricom.co.ke/mpesa/accountbalance/v1/query"
    let auth = "Bearer " + access_token

    request(
        {
            url: url,
            method: "POST",
            headers: {
                "Authorization": auth
            },
            json: {
                "Initiator": "testapi",
                "SecurityCredential": "TcSIJ9Xi28BLCcx79Lis1hrjBXdJjW2m/5WTYgn92/DQEEAJ5aPMWWxcxvHQMP2JG1PgPjDsvrlTIV96fPJc9wiRyytMGLKG/PyvwDplTNQrtLLH8ZB1G531b8XJFnQ2QAG+qQgH79IfpKNPeW3D80KbD8mO5CRgY7R3P1mAYxtZJpiXxr0AsicNS2PO1uWOwjIfeTy+ljx23U2gnjl+wbZEq3AS/3Ctl56IhSzO5Ng3pGSPt/caPmXXgCOJPVX+kvSvDuJTsEKBOxK4jIQQCmk4OxyEbht1r9bBKmP8slBxdUEzUbJk0CE/uePLXCtgECgyHdLDLVpFlOagLjMI8Q==",
                "CommandID": "AccountBalance",
                "PartyA": 600986,
                "IdentifierType": 4,
                "Remarks": "Remarks",
                "QueueTimeOutURL": "http://105.160.38.199/AccountBalance/queue/",
                "ResultURL": "http://105.160.38.199/AccountBalance/result/",
            }
        },
        function (error, response, body) {
            if (error) { console.log(error) }
            resp.status(200).json(body)
        }
    )
});

timeoutUrlRouter.post("/", async (req, res) => {
    console.log("------------------TimeoutURL------------------");
    console.log(req.body);
});

resultUrlRouter.post("/", async (req, res) => {
    console.log("------------------ResultURL------------------");
    console.log(req.body.Result.ResultParameters);
});

module.exports = {
    balanceRouter,
    timeoutUrlRouter,
    resultUrlRouter
};
