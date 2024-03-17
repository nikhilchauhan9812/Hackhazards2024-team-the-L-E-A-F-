const mongoose= require("mongoose")
const {ObjectId} = mongoose.Schema.Types
const channelSchema=new mongoose.Schema({
    name:{
        type:"string",
        required:true
    },
    description:{
        type:"string",
        required:true
    },
   

})

mongoose.model("channel",channelSchema)