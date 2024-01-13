const {Pool, Client} = require('pg');


const connectionString = 'postgresql://anujgargcse:4epgXhKmPDI1@ep-steep-meadow-a1yy0vxv.ap-southeast-1.aws.neon.tech/skillslash?sslmode=require'
 


async function init() {

    const client = new Client({
        connectionString
    })

    await client.connect()

    const response = await client.query("INSERT INTO Student (id, name, email) VALUES (1, 'Anuj Garg', 'anuj@ss.com')");

    console.log(response.rows)
}

init();

