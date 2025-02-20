import express, { urlencoded } from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config();
import connectdatabase from "./db/databaseconnection.js";
import userdata from "./router/user.router.js"
import path from "path"

const port = process.env.port
const app = express();
const __dirname = path.resolve();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(urlencoded({
    extended:true
}))

//middleware for parse json 
app.use(express.json())
app.use('/api/user',userdata)
// app.get('/',(req,res)=>{
//     res.json({"message":"hello world!! "})
// })

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")))
    app.use("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"/frontend","dist", "index.html"))
    })
}

app.listen(port,()=>{
    console.log(`the express app running correct portal ${port} `)
    connectdatabase();

})