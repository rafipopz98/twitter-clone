import express from "express"
import authRouter from "./routes/authRouter.js";
import dotenv from 'dotenv'
import connectDB from "./db/connectDB.js";
dotenv.config()
const app = express();

app.use("/auth", authRouter)
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
    connectDB()
})