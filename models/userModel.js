const db = require('../database/database');

const userModel = {
    // Add user
    create: (userData) => {
        return new Promise((resolve, reject) => {
            const { name, email, age } = userData;
            const stmt = db.prepare("INSERT INTO users (name, email, age) VALUES (?, ?, ?)");
            stmt.run(name, email, age, function (err) {
                if (err) {
                    return reject(err);
                }
                resolve({ id: this.lastID, name, email, age });
            });
            stmt.finalize();
        });
    },

    // Find by id
    findById: (id) => {
        return new Promise((resolve, reject) => {
            db.get("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
                if (err) {
                    return reject(err);
                }
                resolve(row);
            });
        });
    },

    // Update user
    update: (id, userData) => {
        return new Promise((resolve, reject) => {
            const { name, email, age } = userData;
            const stmt = db.prepare("UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?");
            stmt.run(name, email, age, id, function (err) {
                if (err) {
                    return reject(err);
                }
                resolve({ id, name, email, age });
            });
            stmt.finalize();
        });
    },

    // Delete user
    destroy: (id) => {
        return new Promise((resolve, reject) => {
            const stmt = db.prepare("DELETE FROM users WHERE id = ?");
            stmt.run(id, function (err) {
                if (err) {
                    return reject(err);
                }
                resolve(this.changes); // Renvoie le nombre de lignes supprimées
            });
            stmt.finalize();
        });
    }
};

module.exports = userModel;
