import express from "express";
import { DBConnection } from "./utils/DBConnection.js";
import userRoutes from "../server/routes/auth.route.js"
const app=express();
app.use(express.json())
const PORT=8000;

// Api Routes

app.use("/auth/user",userRoutes)


app.listen(PORT,()=>{
   DBConnection();
   console.log(`server is running on port ${PORT}`);
})