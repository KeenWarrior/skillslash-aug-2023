const { Kafka, Partitioners } = require("kafkajs");

const kafka = new Kafka({
  brokers: ["localhost:9092"],
});

const admin = kafka.admin();

async function run() {
    await admin.connect();
    await admin.createTopics({
        topics: [
        {
            topic: "bingo",
            numPartitions: 3,
        },
        ],
    });
    await admin.disconnect();
} 

run().catch(console.error);