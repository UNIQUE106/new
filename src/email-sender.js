const nodemailer = require('nodemailer');

// Replace these placeholders with your email and app-specific password
const yourEmail = 'your.email@example.com';
const yourPassword = 'your-app-specific-password';

// Set up the transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: yourEmail,
    pass: yourPassword,
  },
});