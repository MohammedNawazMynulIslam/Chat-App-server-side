import express from "express"
import dotenv from 'dotenv'

import authRoutes from "./routes/auth.routes.js";

const app = express();
dotenv.config()

const port = process.env.PORT || 5000;

// middle ware
 app.use("/api/auth", authRoutes)

app.get("/", (req, res) => {
    res.send("hello wo00rld")
});
app.listen(port, ()=>console.log(`chat server running on port ${port}`))