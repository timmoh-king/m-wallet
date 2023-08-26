const registerRouter = require("express").Router();
const request = require('request');
const axios = require('axios');

async function getAccessToken() {
    try {
        const response = await axios.get("http://localhost:3005/api/accesstoken");
        const responseBody = response.data;
        const access_token = responseBody.access_token;
        return access_token;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

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
})

module.exports = registerRouter;
