import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//router::
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"

dotenv.config();
const app = express();

app.use(express.json());

const PORT = 8000 || process.env.PORT;

mongoose
  .connect(
    process.env.MONGO
  )
  .then(() => {
    console.log("MongoDB Connected::");
  })
  .catch((err)=>{
    console.log("MongoDB Conection Error::", err);
  })

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);


app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
