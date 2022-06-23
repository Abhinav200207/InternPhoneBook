const mongoose = require('mongoose');

const phoneSchema = mongoose.Schema({
    first:{
        type:String,
        required: true
    },
    last:{
        type:String
    },
    number:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("phone", phoneSchema);