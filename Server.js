const axios = require('axios')
const cors = require('cors')
const express = require('express')
const key = '43f5bfb9'

const app = express()

app.use(cors())

app.get('/weather/:cidade/:estado', async (req, res) => {
    const { data } = await axios(`https://api.hgbrasil.com/weather?key=${key}&city_name=${req.params.cidade},${req.params.estado}`)
    res.send(data)

})

app.listen(8000, () => {
    console.log('rodando: http://localhost:8000/')
})