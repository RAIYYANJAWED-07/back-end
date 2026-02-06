const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

const notesModel = require('./models/notes.model')

app.use(cors())
app.use(express.json()) //middleware
app.use(express.static('./public')) //this shows the frontend files in the backend server

/**
// post -  create notes
// api/notes
//  */
app.post('/api/notes', async (req,res)=>{
    const {title,description} = req.body

    const note = await notesModel.create({
        title,description
    })

    res.status(201).json({
        message: 'note created successfully',
        note
    })

})

//**
// get - fetch the all notes present
// api/notes
//  */
app.get('/api/notes', async (req,res)=>{
    const notes = await notesModel.find()

    res.status(200).json({
        message:'notes fetched successfully',
        notes
    })
})

//**
// delete - delete the selected note using params
// api/notes/:id
// */
app.delete('/api/notes/:id', async (req,res)=>{
    const {id} = req.params

    const delnote = await notesModel.findByIdAndDelete(id)


    res.status(200).json({
        message:'note deleted succesfully',
        delnote
    })
})

//**
// Patch - update onle the description using the params
// api/notes/:id
//  */
app.patch('/api/notes/:id', async (req,res)=>{
    const {id} = req.params

    const {description} = req.body

    await notesModel.findByIdAndUpdate(id,{description})

    res.status(200).json({
        message : 'note updated successfully',
    })
})

app.use('*name' , (req,res)=>{
    res.sendFile(path.join(__dirname,'..','/public/index.html'))
})

module.exports = app