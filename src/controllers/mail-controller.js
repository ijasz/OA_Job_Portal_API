const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "oceanacademypuducherry@gmail.com",
    pass: "nghneacnvffytfkh", //smtp Password
  },
});

function mailer(
  to = "jass07rtr@gmail.com",
  from = "oceanacademypuducherry@gmail.com",
  subject = "Welcome to Ocean Academy",
  content = "Hi There!\n\tWelcome to Ocean Academy",
  html = "",
  responseMailer = () => {}
) {
  const mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: content,
    html: html, // html body
  };
  transporter.sendMail(mailOptions, responseMailer);
}

module.exports = mailer;
