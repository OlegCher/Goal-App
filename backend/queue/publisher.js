const amqp = require("amqplib/callback_api");

const publishToQueue = async (publishData) => {
  console.log('publishToQueue');

  amqp.connect(`amqp://localhost`, (err, connection) => {
    if (err) {
      throw err;
    }
    connection.createChannel((err, channel) => {
      if (err) {
        throw err;
      }
      channel.assertQueue(publishData.queueName, {
        durable: false,
      });
      channel.sendToQueue(publishData.queueName, Buffer.from(publishData.message));
      console.log(`published Message : ${publishData.message}`);
      setTimeout(() => {
        connection.close();
      });
    });
  });
};

module.exports = publishToQueue;
