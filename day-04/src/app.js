const express = require('express');
const app = express();

app.use(express.json())

const notes = [];

// post '/notes'
app.post('/notes',(req,res)=>{

    notes.push(req.body)

    res.send('Note created');
})

// get "/notes"
app.get('/notes',(req,res)=>{
    res.send(notes)
})


//delete 'notes/:id'
//params
app.delete('/notes/:id', (req,res)=> {
    delete notes[req.params.id]

    res.send('note deleted successfully')
})


//patch 'notes/:id'
//req.body = {description : "sample modified description"}
app.patch('/notes/:id', (req,res)=>{
    notes[req.params.id].description = req.body.description

    res.send('note updated successfully')
})


module.exports =  app;