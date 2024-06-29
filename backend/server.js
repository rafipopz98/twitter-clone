import path from 'path'
import express from "express"
import authRouter from "./routes/authRouter.js";
import dotenv from 'dotenv'
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
import userRoute from './routes/userRouter.js'
import postRoute from './routes/postRoute.js'
import notificationRoutes from "./routes/notificationRouter.js";

dotenv.config()
const app = express();

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const __dirname = path.resolve();



app.use("/api/auth", authRouter)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/notifications", notificationRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
    connectDB()
})