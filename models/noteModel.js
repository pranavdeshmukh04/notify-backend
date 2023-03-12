const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: Date.now
    },
    user_id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
},{
    timeStamp: true
})

module.exports = mongoose.model('Notes', noteSchema)