const express = require('express');
require('dotenv').config({path : './.env.local'})

const PORT = process.env.APP_PORT
const app = express()
const router = require('./src/routers/index.router')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)

app.listen(PORT, () => {
    console.log(`App started with port: ${PORT}`)
})