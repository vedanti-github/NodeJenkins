const express = require('express')
const cors = require('cors')
const { request } = require('http')

const app = express()
app.use(cors('*'))

app.get('/',(request, response) => {
    response.send('this is version333333333 of my backend application')
})

app.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000')
})