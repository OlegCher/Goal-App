const publishToQueue = require("../queue/publisher");
const asyncHandler = require("express-async-handler");

const sendConfirmationMail = asyncHandler(async (req) => {
  try {
    const queueMessage = {
      queueName: "sendConfirmationMail",
      message: `Hi ${req.body.name}, please confirm the email`,
    };
    publishToQueue(queueMessage);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
});

module.exports = sendConfirmationMail;
