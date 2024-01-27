const app = require("./app");
const prisma = require('./prisma');

const port = process.env.PORT || 3000;

async function init() {
  await prisma.$connect();
  app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
  });
}

init().catch((e) => {
  console.error(e);
});
