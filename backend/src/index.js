import express from "express"
import User from "./models/user.model.js"
import "dotenv/config"
import { connectDB } from "./lib/db.js"
import {clerkMiddleware} from "@clerk/express"
import cors from "cors"

const app=express();

a

const PORT=process.env.PORT;

app.use(express.json())
app.use(cors({
    origin:"*"
}))

app.use(clerkMiddleware({
   
})  )

app.get("/",async(req,res)=>{
    res.status(200).json({ok:"true"})
})


app.listen(PORT,()=>{
       connectDB()
   console.log("server is up and running on port:",PORT)
})