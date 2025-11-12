import mongoose from "mongoose";


 export const connectdb = async () => {
  try {
    await mongoose.connect('mongodb+srv://abdullah_al_amin:j7ToVtUoH6RTZL8A@cluster0.hqppjhd.mongodb.net/client_10_server?appName=Cluster0');

    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};


