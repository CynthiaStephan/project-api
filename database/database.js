// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./database/data/database.db');

// db.serialize(() => {
//     db.run(`
//         CREATE TABLE IF NOT EXISTS users (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name VARCHAR(100) NOT NULL,
//             email VARCHAR(100) UNIQUE,
//             age INTEGER 
//         );
//     `)
// });

// module.exports = db;