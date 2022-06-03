const products = require("../../database/products.json")
module.exports = async (req, res) => {
    try {
        res.send(products)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}