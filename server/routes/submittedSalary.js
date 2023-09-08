import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import submittedModel from "../mongodb/models/submittedModel.js";
import axios from "axios";

dotenv.config();
const app = express();
app.use(cors());
const router = express.Router();

// Initializing Telegram Bot with API token
const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const telegramChatId = process.env.TELEGRAM_CHAT_ID;

//Create a post
router.post("/", async (req, res) => {
  try {
    const salaryForm = req.body;

    // Save the data to MongoDB
    const newSubmission = await submittedModel.create(salaryForm);

    // Send the message to Telegram
    const message = `New Submission: 
      Name: ${salaryForm.companyName} 
      Email: ${salaryForm.email} 
      Message: ${salaryForm.location}`;

    const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    const telegramMessageData = {
      chat_id: telegramChatId,
      text: message,
    };
    await axios.post(telegramApiUrl, telegramMessageData);

    res.status(201).json({
      newSubmission,
      success: true,
      message:
        "Your submission was successful🤩. Thank you for your contribution to the aviation community.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Unable to submit form, please try again",
    });
  }
});

export default router;
