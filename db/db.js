import mongoose from "mongoose"

export async function connectMongo() {
  await mongoose.connect("mongodb://127.0.0.1:27017/vehicle-project");
  console.log("Connected to mongo server");
}


