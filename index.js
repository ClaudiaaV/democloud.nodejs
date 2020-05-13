  
const express = require("express")
const Sequelize = require('sequelize')

const sequelize = new Sequelize('profile', 'username', 'password', {
    dialect: "mysql",
    host: "localhost"
})

sequelize.authenticate().then(() => {
    console.log("Connected to database")
}).catch(() => {
    console.log("Unable to connect to database")
})

const app = express()

app.use('/', express.static('frontend'))




app.use(express.json())
app.use(express.urlencoded())


app.listen(process.env.PORT||8080)