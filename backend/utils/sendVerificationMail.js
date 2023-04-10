const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "SendinBlue", // no need to set host or port etc.
  auth: {
    user: process.env.SENDINBLUE_SMTP_USER,
    pass: process.env.SENDINBLUE_SMTP_KEY,
  },
});

const sendTestMail = async (receiverEmail) => {
  try {
    await transporter.sendMail({
      to: receiverEmail,
      from: process.env.SENDINBLUE_SMTP_USER,
      subject: "ResFast | Click on this link to verify your email",
      html: `<p>Thank you for signing up for a new ResFast account! Please click on the link below so that we can verify your account and provide you with full functionality.</p>
               <a href="www.google.com">Link Here</a>`,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendTestMail;
