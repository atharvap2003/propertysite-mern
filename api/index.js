import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//router::
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"

dotenv.config();
const app = express();

app.use(express.json()); // should always a top

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

app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});


app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
