const express = require('express')
const route = express.Router()

route.get('/', (req,res) => {
    res.json({
        message: "Showroom"
    })
})

const vehicleRoutes = require('./vehicle')
const customerRoutes = require('./customer')
const vehicleCustomerRoutes = require('./vehicleCustomer')

route.use('/vehicle', vehicleRoutes)
route.use('/customer', customerRoutes)
route.use('/vehicleCustomer', vehicleCustomerRoutes)

module.exports = route
