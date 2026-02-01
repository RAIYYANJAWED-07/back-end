require('dotenv').config()
const app = require("./src/app")
const connetToDb = require('./src/config/database')

connetToDb()

app.listen(3000,()=>{
    console.log('server is runinng on port 3000')
})