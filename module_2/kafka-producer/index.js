const { Kafka, Partitioners } = require("kafkajs");

const kafka = new Kafka({
  brokers: ["localhost:9092"],
});

const producer = kafka.producer({
    createPartitioner: Partitioners.DefaultPartitioner
});

async function run() {
  await producer.connect();
  for (let index = 0; index < 10000; index++) {
    await sendMessage("bingo", "Hello zoto " + index);
  }
  
  console.log("Messages sent!");
  await producer.disconnect();
}

async function sendMessage(topic, message) {
    await producer.send({
        topic,
        messages: [{ value: message }],
    });
}

run().catch(console.error);


