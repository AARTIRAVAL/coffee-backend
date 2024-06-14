
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import authRoutes from "./routes/user.routes.js";

const app = express();

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connected");
    })
    .catch((error) => {
        console.error("DB connection error:", error);
    });

app.use(express.json());

app.use("/api/v1/user/", authRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});

