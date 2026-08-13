const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./database/database.db", () => {
    console.log("Servidor iniciado!");
})

module.exports = db;