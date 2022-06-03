const users = require("./users")
const clients = require("./clients")
const products = require("./products")

var express = require("express")
var bodyParser = require("body-parser")
var cors = require('cors')

var app = express()
app.use(cors())

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })


module.exports = (app) => {
    app.use("/users", cors(), jsonParser, urlencodedParser, users)
    app.use("/clients", cors(), jsonParser, urlencodedParser, clients)
    app.use("/products", cors(), jsonParser, urlencodedParser, products)
}