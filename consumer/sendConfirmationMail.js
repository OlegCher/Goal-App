const amqp = require("amqplib/callback_api");
const transporter = require("../consumer/transporter");

amqp.connect(`amqp://localhost`, (err, connection) => {
  if (err) {
    throw err;
  }
  connection.createChannel((err, channel) => {
    if (err) {
      throw err;
    }
    let queueName = "sendConfirmationMail";
    channel.assertQueue(queueName, {
      durable: false,
    });

    channel.consume(queueName, (msg) => {
      transporter.sendEmail(msg)
      console.log(`Recieved : ${msg.content.toString()}`);
    });
  });
});
