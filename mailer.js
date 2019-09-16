const mailer = require('nodemailer');
require('dotenv').config();

module.exports.sendEmail = (data, callback) => {
    let transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        from: 'ventiiapp@gmail.com',
        to: data.email,
        cc: 'linacifuentess91@gmail.com, juan2lopez3@gmail.com',
        subject: 'Formulario de Orden Ventii - TEST',
        html: `
        <html>
            <head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
                <style>
                    html { background-color: #f1f2f3;}
                    body { width: 70%; margin: 0 auto; font-family: 'Montserrat', sans-serif; background-color: #fff}
                    header img { width: 20%; position: relative; top: 35px; left: 50px;}
                    .container { padding: 20px; position: relative; top: 50px;}
                    .order-detail { margin-top: 50px;}
                    .hello-box, .order-box { border: solid 1px #c3c3c3; padding: 0 15px; border-radius: 10px;}
                    h3, h4 { color: gray;}
                    .footer { padding-bottom: 50px;}
                </style>
            </head>
            <body>
                <header>
                    <img src="https://ventiiapp.000webhostapp.com/assets/images/Ventii%20logo.png">
                </header>
                <div class="container">
                    <div class="hello-box">
                    <h1>Hola xxxxx xxxxx</h1>
                    <h3>Gracias por contactarnos, hemos recibido tu orden, muy pronto nos comunicaremos contigo!<h3/>
                    </div>
                    <h3 class="order-detail">Detalle de tu orden:</h3>
                    <div class="order-box">
                        <p><strong>Tipo de evento:</strong> Cumpleanos.<p>
                        <p><strong>Número en asistentes:</strong> 26 personas.<p>
                        <p><strong>Presupuesto por persona:</strong> entre $50.000 y $100.000.<p>
                        <p><strong>Fecha del evento:</strong> Octubre 31 de 2019.<p>
                        <p><strong>Duracion del evento:</strong> 6 hrs.<p>
                        <p><strong>Sitio:</strong> Al aire libre.<p>
                        <p><strong>Necesitas ayuda con:</strong> Comida y menaje, Decoracion, música en vivo.<p>
                        <p><strong>Licor:</strong> No necesitas!<p>
                        <p><strong>Pasantes:</strong> Jugos Naturales, limon, sal.<p>
                    </div>
                    <div class="footer">
                        <h4>
                        Si tienes alguna duda o requieres una atencion mas inmediata recuerda que puedes comunicarte a los
                        siguientes numeros xxxxxxxxxxx o xxxxxxxxx en un horario de Lunes a Sabado de 8am a 6pm
                        </h4>
                    </div>
                </div>
            </body>
        </html>`
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
