const { getProducts } = require("./services/services");

const express = require("express")
const app = express()
const port = 3000

app.get("/products", async (req, res) => {
    const products = await getProducts()
    res.json(products)
})



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})