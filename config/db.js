import mongoose from "mongoose";
// import dotenv from "./db/.env";

// dotenv.config();

 export const connectdb = async () => {
  try {
    console.log(process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};


