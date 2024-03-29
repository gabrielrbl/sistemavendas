const firebird = require("node-firebird");
const { database } = require("../../config.json");

const pool = firebird.pool(5,
    {
        host: database.host,
        database: database.db,
        user: database.user,
        password: database.password,
        port: database.port,
        lowercase_keys: true
    }
);

const execute = (query, params=[]) => {
    return new Promise((resolve, reject) => {
        pool.get((err, db) => {
            if(err) {
                return reject(err);
            }
            db.query(query, params, (err, result) => {
                if(err) {
                    return reject(err);
                } 
                db.detach();
                resolve(result);
            });
        });
    });
}

module.exports = { execute }