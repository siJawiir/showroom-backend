const express = require('express')
const route = express.Router()

route.get('/', (req,res) => {
    res.render("index.ejs")
})

const vehicleRoutes = require('./vehicle')
const customerRoutes = require('./customer')
const vehicleCustomerRoutes = require('./vehicleCustomer')

route.use('/vehicles', vehicleRoutes)
route.use('/customers', customerRoutes)
route.use('/vehicleCustomers', vehicleCustomerRoutes)

module.exports = route
