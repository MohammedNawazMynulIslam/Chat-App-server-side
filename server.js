import express from "express"
import dotenv from 'dotenv'
import messageRoutes  from './routes/message.routes.js';
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

// middle ware
app.use(express.json())  // parse request body as JSON payloads (from req.body)
 app.use("/api/auth", authRoutes)
 app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
    res.send("hello wo00rld")
});
app.listen(port, ()=>{
connectToMongoDB();
console.log(`chat server running on port ${port}`);
})