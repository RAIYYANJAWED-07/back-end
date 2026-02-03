require('dotenv').config()
const app = require('./src/app')

const ConnetToDb = require('./src/config/database')
ConnetToDb()

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})