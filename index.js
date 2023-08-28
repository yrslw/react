const express = require('express')
const app = express()
app.get('/', (req, res) => { 
    res.status(200).json({
        message: 'Rabotaet'
    })

})
app.listen(5000, () => {
    console.log('server has been rabotaet')
})