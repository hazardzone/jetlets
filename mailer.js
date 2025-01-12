const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-password",
  },
});

const sendEmail = async (to, subject, htmlContent) => {
  const mailOptions = {
    from: "your-email@gmail.com",
    to,
    subject,
    html: htmlContent,
  };
  await transporter.sendMail(mailOptions);
};
