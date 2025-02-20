import mongoose, { model, Schema } from "mongoose";

const userdataschema = new Schema({

    fullname :{
        type:String,
        required:true,

    },
    rollnumber :{
        type:Number,
        required:true,
        unique:true,
    },
    email :{
        type:String,
        required:true,
        unique:true,
    },
    age:{
        type:String,
       
    }

},{timestamps:true})

const User = mongoose.model("user",userdataschema)
export default User