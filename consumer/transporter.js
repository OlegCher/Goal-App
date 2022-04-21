var nodemailer = require("nodemailer");

const sendEmail = async (sendEmailData) => {
  console.log("sendEmail recived a rabbit message");

  let account = await nodemailer.createTestAccount();
  var transporter = nodemailer.createTransport({
    host: account.smtp.host,
    port: account.smtp.port,
    secure: account.smtp.secure,
    auth: {
        user: account.user,
        pass: account.pass
    },
  });

  var mailOptions = { 
    from: "bonicho@gmail.com",
    to: sendEmailData.email,
    subject: "Please confirm your password",
    text: sendEmailData.message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendEmail };
