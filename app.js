
require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const userRoute = require('./route/userapi')
app.use(express.json())

const port = process.env.PORT
app.use('/api/user',userRoute);

app.get('/',(req,res)=>{
    res.send('Hello')
})


app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
    
})

