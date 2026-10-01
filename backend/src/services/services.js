const pool = require("../database/pool")

async function getProducts() {
    const result = await pool.query("select * from products")
    return result.rows
}

module.exports = { getProducts }


