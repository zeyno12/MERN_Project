import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.router.js';
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mogose salan");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json())
app.listen(3000, () => {
  console.log("zeynus");
});
app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)