// YOUR CODE HERE
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const storeData = require('./models/Store')

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send({'ping':'pong'})
})

app.get('/store', (req, res) => {
    res.send(storeData.getProducts())
})

app.get('/store/:productId', (req, res) => {
    res.send(storeData.getProduct(req.params.productId))
})

app.post('/store', (req, res) => {
    console.log(req.body)
    const purchase = storeData.processOrder(req.body.shoppingCart, req.body)
    res.status(201).send({'purchase': purchase})
})

const not_found_handler = (req, res, next) => {
    next(new NotFoundError())
}

const error_handler = (error, req, res, next) => {
    const status = error?.status ?? 500
    const message = error?.message ?? "Something went wrong in the application"
    res.status(status).send({'error':{'status':status, 'message':message}})
}

app.use(not_found_handler)
app.use(error_handler)

module.exports = app;