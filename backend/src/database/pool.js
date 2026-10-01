const Pool = require("pg").Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'omni_store',
    password: 'iLovePostgres',
    port: 5432,
})

module.exports = pool