const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mailer = require('./mailer.js');

const app = express();
const port = 3000;
app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

app.post('/send-email', (req, res) => {
    console.log(req.body);
    
    mailer.sendEmail(req.body.to, info => {
        res.send(info);
    });
});