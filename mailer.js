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
                    .footer .wa-img { position: relative; top: 3px; left: 5px;}
                    .footer a { cursor: pointer;}
                    .footer a.ventii-link: { background-color: #714dfc; color: white; padding: 3px 17px; border-radius: 4px;
                        text-decoration: none; cursor: pointer; font-weight: 700;
                        }
                </style>
            </head>
            <body>
                <header>
                    <img src="https://ventiiapp.000webhostapp.com/assets/images/Ventii%20logo.png">
                </header>
                <div class="container">
                    <div class="hello-box">
                    <h1>Hola ${order.name} ${order.lastName}</h1>
                    <h3>
                        ¡Hemos recibido tu solicitud! Gracias por confiar en Ventii, 
                        nos pondremos en contacto contigo en la próxima media hora. Disfruta, nosotros hacemos el resto!
                    <h3/>
                    </div>
                    <h3 class="order-detail">Detalle de tu orden:</h3>
                    <div class="order-box">
                        <p><strong>Tipo de evento:</strong> ${order.eventType}.<p>
                        <p><strong>Número en asistentes:</strong> ${order.people} personas.<p>
                        <p><strong>Presupuesto por persona:</strong> ${order.budget}.<p>
                        <p><strong>Fecha del evento:</strong> ${order.date}.<p>
                        <p><strong>Duracion del evento:</strong> ${order.hours} horas.<p>
                        <p><strong>Sitio:</strong> ${order.location || 'Ya tengo el sitio!'}.<p>
                        <p><strong>Necesitas ayuda con:</strong> 
                            ${order.help && order.help.length > 0 ? 
                                order.help.join(', ') :
                                'Por ahora nada especial!'}.<p>
                        <p><strong>Licor:</strong> 
                            ${order.licourHelp && order.licourHelp.length > 0 ? 
                                order.licourHelp.join(', ') :
                                'No necesitas!'}<p>
                        <p><strong>Pasantes:</strong> 
                            ${order.pasantesHelp && order.pasantesHelp.length > 0 ? 
                                order.pasantesHelp.join(', ') :
                                'No necesitas!'}.<p>
                    </div>
                    <div class="footer">
                        <h4>
                        Equipo Ventii
                            <img class="wa-img" width="25px" src="https://www.freepnglogos.com/uploads/whatsapp-logo-light-green-png-0.png"/> +57 311 8652487 
							<a target="_blank" href="https://facebook.com"><img class="wa-img" width="25px" src="https://cdn.icon-icons.com/icons2/914/PNG/512/Facebook_Color_icon-icons.com_71821.png"/></a>
							<a target="_blank" href="https://instagram.com"><img class="wa-img" width="16px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/600px-Instagram-Icon.png"/></a>
                        </h4>
                        <a target="_blank" class="ventii-link" href="http://ventii.co">Ir a Ventii</a>
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