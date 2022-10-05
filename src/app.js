const express = require('express')
const app = express()

app.use(express.json())



app.get ('/', (req, res) => {
    res.status(200).json({message: 'Server OK'})
})

const usersRoutes = require('./users/users.routes')
app.use("/", usersRoutes)

app.listen(6000, () => {
    console.log('Server started at port 6000');
})