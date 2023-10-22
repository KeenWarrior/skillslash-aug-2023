import Dexie from "dexie";

const db = new Dexie("Bingo");

db.version(1).stores({
    tasks: "++id, title, description",
});

export default db;
