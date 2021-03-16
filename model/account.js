const mongoose = require("mongoose")
let accountSchema = mongoose.Schema({

    username:{
        type:String,
        required:[true,"username is required"]
    },
    password:{
        type:String
    }
})

let account = mongoose.model("account", accountSchema)
module.exports = account