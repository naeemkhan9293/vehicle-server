import { model, Schema } from "mongoose";

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  phone: String,
  createAt: String,
  profileImage: String,
});

export default model("user", userSchema);
