const axios = require('axios')
const cors = require('cors')
const express = require('express')
const BodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const key = '43f5bfb9'

const app = express()

app.use(BodyParser.urlencoded({ extend: false }))
app.use(BodyParser.json())

app.use(cors())

app.get('/:cidade/:estado', async (req, res) => {
    const { data } = await axios(`https://api.hgbrasil.com/weather?key=${key}&city_name=${req.params.cidade},${req.params.estado}`)
    //console.log(data)
    //list()
    res.send(data)

})

app.listen(8000, () => {
    console.log('rodando: http://localhost:8000/')
})