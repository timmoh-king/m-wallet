const registerRouter = require("express").Router();
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

registerRouter.get("/", async (req, res) => {
    try {
        const access_token = await getAccessToken();

        let url = "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl";
        let auth = "Bearer " + access_token;

        const response = await request.post({
            url: url,
            headers: {
                "Authorization": auth
            },
            json: {
                "ShortCode": "600990",
                "ResponseType": "Complete",
                "ConfirmationURL": "http://105.160.38.199/confirmation",
                "ValidationURL": "http://105.160.38.199/validation_url",
            }
        });

        res.status(200).json(response);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error });
        throw error;
    }
});

module.exports = registerRouter;
