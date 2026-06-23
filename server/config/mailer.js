const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendContactNotification = async ({ name, email, subject, message }) => {
  const to = process.env.CONTACT_RECEIVER_EMAIL || process.env.EMAIL_USER;

  await transporter.sendMail({
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
    to,
    replyTo: email,
    subject: `New contact message: ${subject || "No subject"}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Subject:</strong> ${subject || "No subject"}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });
};

module.exports = { sendContactNotification };
