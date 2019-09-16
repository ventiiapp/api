const mailer = require('nodemailer');
require('dotenv').config();

let transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

module.exports.sendEmail = (order, callback) => {    
    let mailOptions = {
        from: 'ventiiapp@gmail.com',
        to: order.email,
        cc: 'linacifuentess91@gmail.com, juan2lopez3@gmail.com',
        subject: 'Formulario de Orden Ventii',
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
                    <h1>Hola ${order.name} ${order.lastName}</h1>
                    <h3>Gracias por contactarnos, hemos recibido tu orden, muy pronto nos comunicaremos contigo!<h3/>
                    </div>
                    <h3 class="order-detail">Detalle de tu orden:</h3>
                    <div class="order-box">
                        <p><strong>Tipo de evento:</strong> ${order.eventType}.<p>
                        <p><strong>Número en asistentes:</strong> ${order.people} personas.<p>
                        <p><strong>Presupuesto por persona:</strong> ${order.budget}.<p>
                        <p><strong>Fecha del evento:</strong> ${order.date}.<p>
                        <p><strong>Duracion del evento:</strong> ${order.hours} horas.<p>
                        <p><strong>Sitio:</strong> ${order.location}.<p>
                        <p><strong>Necesitas ayuda con:</strong> 
                            ${order.help.length > 0 ? 
                                order.help.join(', ') :
                                'Por ahora nada especial!'}.<p>
                        <p><strong>Licor:</strong> 
                            ${order.licourHelp.length > 0 ? 
                                order.licourHelp.join(', ') :
                                'No necesitas!'}<p>
                        <p><strong>Pasantes:</strong> 
                            ${order.pasantesHelp.length > 0 ? 
                                order.pasantesHelp.join(', ') :
                                'No necesitas!'}.<p>
                    </div>
                    <div class="footer">
                        <h4>
                        Si tienes alguna duda o requieres una atencion mas inmediata recuerda que puedes comunicarte a los
                        siguientes numeros xxxxxxxxxxx o xxxxxxxxx en un horario de Lunes a Viernes de 8:00 am a 6:00 pm
                        </h4>
                    </div>
                </div>
            </body>
        </html>`
    };

    transporter.sendMail(mailOptions, (err, data) => {
        err ? console.log('err: ', err) : callback(data);
    });
};

module.exports.sendContactEmail = (formData, callback) => {
    let mailOptions = {
        from: 'ventiiapp@gmail.com',
        to: 'ventiiapp@gmail.com',
        cc: 'linacifuentess91@gmail.com, juan2lopez3@gmail.com',
        subject: 'Formulario de Contacto Ventii',
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
                    h3, h4 { color: gray;}
                </style>
            </head>
            <body>
                <header>
                    <img src="https://ventiiapp.000webhostapp.com/assets/images/Ventii%20logo.png">
                </header>
                <div class="container">
                    <h3 class="order-detail">Detalle de contacto:</h3>
                    <div class="order-box">
                        <p><strong>Nombre:</strong> ${formData.name}.<p>
                        <p><strong>Número Celular:</strong> ${formData.mobile}.<p>
                        <p><strong>Correo:</strong> ${formData.email}.<p>
                        <p><strong>Asunto:</strong> ${formData.text}.<p>
                    </div>
                </div>
            </body>
        </html>`
    };

    transporter.sendMail(mailOptions, (err, data) => {
        err ? console.log('err: ', err) : callback(data);
    });
}