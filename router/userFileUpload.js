// This code snippet sets up a router in an Express application to handle a POST request for uploading user profile images. It uses Multer to store the uploaded files in a specific directory with a unique filename generated using UUID.

import express from "express";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import { authenticateToken } from "../utils/routesAuth.js";
import User from "../model/user.js";
import mongoose from "mongoose";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/user-profile-images");
  },
  filename: (req, file, cb) => {
    const ext = file?.originalname?.split(".");

    cb(null, `${uuidv4()}.${ext[ext.length - 1]}`);
  },
});

const upload = multer({ storage: storage });

// router.post(
//   "/user-image-upload",
//   authenticateToken,
//   upload.single("profileImage"),
//   async (req, res) => {
//     try {
//       if (!req.file) {
//         throw new Error("Internal Server Error");
//       }
//       const { id } = req.user;
//       // req?.file?.filename
//       const objId = new mongoose.Types.ObjectId(id);
//       const user = await User.updateOne(
//         { _id: objId },
//         { $set: { profileImage: req?.file?.filename } },
//          // Wait for write confirmation
//       );
//       console.log(user);
//       return res.status(200).json("Image uploaded successfully");
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json("Internal Server Error");
//     }
//   }
// );

router.post(
  "/user-image-upload",
  authenticateToken,
  upload.single("profileImage"),
  async (req, res) => {
    try {
      if (!req.file) {
        throw new Error("Internal Server Error");
      }
      const { id } = req.user;
      const objId = new mongoose.Types.ObjectId(id);
      const result = await User.updateOne(
        { _id: objId },
        { $set: { profileImage: req?.file?.filename } }
      );
      if (result?.acknowledged) {
        return res
          .status(200)
          .json({ msg: "Image uploaded successfully", upload: true });
      }
      return res.status(400).json("Bad Request");
    } catch (error) {
      return res.status(500).json("Internal Server Error");
    }
  }
);

export default router;
