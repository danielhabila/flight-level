import express from "express";
import airlineModel from "../mongodb/models/airlineModel.js";
import * as dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const AirlineModel = await airlineModel.find({});
    res.json(AirlineModel);
    // console.log(AirlineModel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export default router;
