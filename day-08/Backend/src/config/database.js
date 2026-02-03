const mongoose = require('mongoose')


function ConnetToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to DB")
    }).catch(e =>{
        console.log(e)
    })
}

module.exports = ConnetToDb