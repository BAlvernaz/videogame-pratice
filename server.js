const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get("/", (req,res,next)=> res.send("Hello From Express"))

app.use(express.static('public'))

app.listen(3000, ()=> console.log(`listening on port ${PORT}`))
