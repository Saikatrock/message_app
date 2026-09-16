import mongoose from "mongoose"
import "dotenv/config"

export async function connectDB(){
    try{
        const mongUri=process.env.MONGO_URI
       if(!mongUri){
        throw new Error("MONGO_URI is not defined in the environment variables")
       }

        const conn=await mongoose.connect(mongUri);
        
        console.log("mongoose connected successfully",conn.connection.host)

            

        
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}