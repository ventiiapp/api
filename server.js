const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mailer = require('./mailer.js');

const app = express();
const PORT = 5000;
app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('<h1>Ventii API</h1>');
});

app.post('/send-email', (req, res) => {
    mailer.sendEmail(req.body.to, info => {
        res.send(info);
    });
});
