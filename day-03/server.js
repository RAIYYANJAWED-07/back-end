const express = require("express")

const app = express()

app.use(express.json()) //middleware

let notes = []

app.post("/notes", (req, res) =>{

    console.log(req.body)
    notes.push(req.body)
    res.send('note is created')
})

app.get("/notes" , (req,res)=>{
    res.send(notes)
})

app.listen(8000, () =>{
    console.log('server is running in port 3000')
})