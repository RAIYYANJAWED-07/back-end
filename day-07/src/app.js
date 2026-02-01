const express = require("express")
const noteModel = require('./models/note.model')
const { default: mongoose } = require("mongoose")

const app = express()

app.use(express.json())


//** 
//post 
//api - /notes
// */
app.post('/notes', async (req,res)=>{
    const {title,description} = req.body

    const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message:"note created successfully",
        note
    })
})


//**
// get
// api - /notes
//*/
app.get('/notes' , async (req,res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message:"all notes fetched successfully",
        notes
    })
})


module.exports = app