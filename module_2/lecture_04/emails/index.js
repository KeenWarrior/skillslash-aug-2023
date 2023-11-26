const nodemailer = require('nodemailer');

let configOptions = {
    host: "smtp-relay.sendinblue.com",
    port: 587,
    auth: {
        user: "ganga.chaturvedi24@gmail.com",
        pass: ""
    }
}

const transporter = nodemailer.createTransport(configOptions);

const mailOptions = {
    from: 'ganga.chaturvedi24@gmail.com',
    to: 'anujgargcse@gmail.com',
    subject: 'Sending Email using Node.js with Attachment',
    text: 'That was easy!',
    attachments: [
        {
            filename: 'hero.jpg',
            path: './images/thor.jpg',
        }
    ]
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log('Email sent: ' + info.response);
    }
});