const mongoose = require("mongoose")
const passport = require("passport-local-mongoose")
let backupSchema = mongoose.Schema({

    username:{
        type:String,
        required:[true,"username is required"]
    },
    password:{
        type:String
    }
})

backupSchema.plugin(passport)
let backup = mongoose.model("backup", backupSchema)
module.exports = backup