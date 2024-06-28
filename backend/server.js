import express from "express"
import authRouter from "./routes/authRouter.js";
import dotenv from 'dotenv'
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
dotenv.config()
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/auth", authRouter)
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
    connectDB()
})