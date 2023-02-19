var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors())

const Mailjet = require('node-mailjet')
const mailjet = new Mailjet({
    apiKey: 'b3b82f984d56831d7e49b8e925885796',
    apiSecret: '95c3ea0e9915a6f6cd77ee1c6eb2f9cb',
});
app.get('/sendmail/:firstname/:lastname/:mail/:object/:message', (req, res) => {
    const request = mailjet
        .post("send", { 'version': 'v3.1' })
        .request({
            "Messages": [
                {
                    "From": {
                        "Email": "suleyman.laarabi.dev@gmail.com",
                        "Name": req.params.firstname + " ," + req.params.lastname
                    },
                    "To": [
                        {
                            "Email": "suleyman.laarabi.dev@gmail.com",
                            "Name": "suleyman"
                        }
                    ],
                    "Subject": req.params.object,
                    "TextPart": "My first Mailjet email",
                    "HTMLPart": `
                <h3>${req.params.mail}</h3>
                </br>
                <p>${req.params.message}</p>
                
                `,
                    "CustomID": "AppGettingStartedTest"
                }
            ]
        })
    request
        .then((result) => {
            console.log(result.body)
            res.send("sucess")
        })
        .catch((err) => {
            console.log(err)
            res.send("error")
        })

})


app.listen(8080, () => {
    console.log("server demarer")
})