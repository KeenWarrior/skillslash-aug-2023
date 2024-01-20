const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    await prisma.$connect();
    console.log('Connected to DB');
    const anuj = await prisma.user.create({
        data: {
            name: 'Anuj',
            email: 'anuj@ss.com'
        }
    });

    console.log(anuj);
        
}

main()