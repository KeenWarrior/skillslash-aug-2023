const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  brokers: ["localhost:9092"],
});



const consumer = kafka.consumer({ groupId: "group1" });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "bingo", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        topic,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};


run().catch(console.error);