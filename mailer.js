const mailer = require('nodemailer');
require('dotenv').config();

module.exports.sendEmail = (to, callback) => {
    let transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        from: 'ventiiapp@gmail.com',
        to,
        cc: 'linacifuentess91@gmail.com, juan2lopez3@gmail.com',
        subject: 'Formulario de Orden Ventii - TEST',
        html: '<h1>correo enviado desde la plataforma de Ventii</h1>'
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('err: ', err);
        } else {
            console.log('email sent: ', data);
            callback(data);
        }
    });
};
