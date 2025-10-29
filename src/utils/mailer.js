const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function sendContactEmail({name, email, phone, message}) {
  const admin = process.env.ADMIN_EMAIL;
  const html = `<p>New contact submission:</p>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Message:</b> ${message}</p>`;

  // await transporter.sendMail({
  //   from: process.env.EMAIL_USER,
  //   to: admin,
  //   subject: `Contact from ${name}`,
  //   html
  // });
}

module.exports = { sendContactEmail };
