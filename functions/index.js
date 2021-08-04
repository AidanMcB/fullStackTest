
const functions = require('firebase-functions')
const express = require('express')
const app = express()
// const port = process.env.PORT || 5000; //Line 3

// app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
const cors = require('cors')

app.use(cors());

app.get('/api', (req, res) => {
  res.send("Hello from the API")
})

// create a GET route
app.get('/mailgun', (req, res) => { 
  res.send({ message: "mailgun message from INDEX.JS" }); 
}); 

exports.api = functions.https.onRequest(app)

// const mailgun = require("mailgun-js");
// const DOMAIN = 'sandbox992167bb9fe442529db5bf04a7acac26.mailgun.org';
// const api_key = '8724d021f2d06a912b585409502f676c-0d2e38f7-70f72698';
// const mg = mailgun({apiKey: api_key, domain: DOMAIN});
// const data = {
// 	from: 'Excited User <me@samples.mailgun.org>',
// 	to: 'amcbrid22@gmail.com',
// 	subject: 'MailgunTest',
// 	text: 'Testing some Mailgun awesomness on August 3rd!'
// };

// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });

