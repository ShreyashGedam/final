const express = require("express")

const app = express()

const {register,login} = require("./controllers/auth.controller")

const usercontroller = require("./controllers/user.controller")

const productcontroller = require("./controllers/prodct.controller")

app.use(express.json())

app.use("/register",register)

app.use("/login",login)

app.use("/user",usercontroller)

app.use("/products",productcontroller)

module.exports = app