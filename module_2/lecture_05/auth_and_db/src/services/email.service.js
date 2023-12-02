const nodemailer = require('nodemailer');
const config = require('../config/config');

const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    auth: {
        user: config.smtp.user,
        pass: config.smtp.pass,
    }
});


async function sendVerificationEmail(name, email, token) {
    transporter.sendMail({
        from: config.smtp.user,
        to: email,
        subject: 'Verify your email for Invoicing App',
        html: `
      <h1>Hi ${name}</h1>
      <p>Thanks for registering!</p>
      <p>Please verify your email by clicking on the link below.</p>
      <a href="${config.app.url}/auth/verify-email/${token}">Verify Email</a>
    `
    });
}

module.exports = {
    sendVerificationEmail,
}