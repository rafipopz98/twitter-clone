import express from "express"
import authRouter from "./routes/authRouter.js";
import dotenv from 'dotenv'
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
import userRoute from './routes/userRouter.js'
import postRoute from './routes/postRoute.js'
dotenv.config()
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


app.use("/auth", authRouter)
app.use("/users", userRoute)
app.use("/post", postRoute)


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
    connectDB()
})