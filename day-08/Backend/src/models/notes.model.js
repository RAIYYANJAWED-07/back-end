const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    title:String,
    description:String,
})

const notesModel = mongoose.model('note',noteSchema)


module.exports = notesModel