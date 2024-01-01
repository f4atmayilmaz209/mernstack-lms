import {app} from "./app"
import { initSocketServer } from "./socketServer";
import connectDB from "./utils/db";
import {v2 as cloudinary} from "cloudinary"
import http from "http"
require("dotenv").config();

 const server=http.createServer(app)

//cloudinary config
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_SECRET_KEY,
})

initSocketServer(server)

//create server
app.listen(process.env.PORT,()=>{
    console.log(`Server is connected with port ${process.env.PORT}`)
    connectDB();
});