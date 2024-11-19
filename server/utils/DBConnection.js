import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

export const DBConnection=async ()=>{
   try {
      
      mongoose.connect(process.env.MONGO_URL)
      console.log("DB Connected")
   } catch (error) {
      console.log(error)
      
   }
}