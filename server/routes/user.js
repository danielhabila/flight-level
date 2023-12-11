import express from "express";
import { v4 as uuidv4 } from "uuid";
import userModel from "../mongodb/models/userModel.js";
import * as dotenv from "dotenv";
dotenv.config();

const router = express.Router();

//check if user exists in mongodb or create a profile
router.post("/check-user", async (req, res) => {
  try {
    const { username, email } = req.body;
    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      return res.status(200).json();
    } else {
      //creating a new user
      const userId = uuidv4();

      await userModel.create({
        userId,
        username,
        email,
      });
      return res.status(201).json();
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

export { router as userRouter };
