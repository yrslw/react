const express = require('express')
const authRoutes = require ('./routes/auth')
const analyticsRoutes = require ('./routes/analytics')
const categoryRoutes = require ('./routes/category')
const orderRoutes = require ('./routes/order')
const positionRoutes = require ('./routes/position')
const app = express()

app.use('/api/auth',    authRoutes)
app.use('/api/analytics',    authRoutes)
app.use('/api/category',    authRoutes)
app.use('/api/order',    authRoutes)
app.use('/api/position',    authRoutes)
module.exports = app