import express from "express";
import * as dotenv from "dotenv";
import createPostModel from "../mongodb/models/createPostModel.js";
import axios from "axios";
dotenv.config();

const router = express.Router();

// Initializing Telegram Bot with API token
const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const telegramChatId = process.env.TELEGRAM_CHAT_ID;

router.post("/", async (req, res) => {
  try {
    const formData = req.body;
    console.log("formData", formData);

    // Save the data to MongoDB
    const newSubmission = await createPostModel.create(formData);

    // Send the message to Telegram
    let message = "*New Post Submission:*\n";

    const fields = [
      { key: "*Email*", value: formData.email },
      { key: "*Username*", value: formData.username },
      { key: "*Title*", value: formData.title },
      { key: "*postUrl*", value: formData.postUrl },
      { key: "*Comments/Notes*", value: formData.notes },
    ];

    fields.forEach(({ key, value }) => {
      if (value.trim() !== "") {
        message += `\n${key}: ${value}`;
      }
    });

    const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    const telegramMessageData = {
      chat_id: telegramChatId,
      text: message,
      parse_mode: "Markdown",
    };
    await axios.post(telegramApiUrl, telegramMessageData);

    res.status(201).json({
      newSubmission,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
    });
  }
});

export default router;
