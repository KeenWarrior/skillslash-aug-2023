const nodemailer = require('nodemailer');
const config = require('../config/config');

const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: true,
    auth: {
        user: config.smtp.user,
        pass: config.smtp.pass,
    }
});


async function sendVerificationEmail(name, email, token) {
    transporter.sendMail({});
}