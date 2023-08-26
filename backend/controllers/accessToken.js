const accessTokenRouter = require("express").Router();
const request = require("request");

accessTokenRouter.get("/", async (req, res) => {
    const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
    const auth = new Buffer.from("CneblIufcyZySPoCKTrdO8zs9OkD5eS8:S1cChAMzKjDsmvaJ").toString('base64');

    request({
        url: url,
        headers: {
            "Authorization": "Basic " + auth
        }
    }, (error, response, body) => {
        if (error) {
            res.status(500).json({ error: 'A server error occurred' });
        } else {
            res.status(200).json(JSON.parse(body));
        }
    });
});

module.exports = accessTokenRouter;