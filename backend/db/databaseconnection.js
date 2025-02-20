import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const connectdatabase = async()=>{
    try {
        await mongoose.connect(process.env.mongodp_url)
        console.log("database connected")
    } catch (error) {
        console.error(`mongodp connect error is ${error.message}`)
    }
}

export default connectdatabase