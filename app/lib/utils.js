import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  console.log("Hello")
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    console.log("🚀 ~ file: utils.js:9 ~ connectToDB1 ~ db:", db);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
