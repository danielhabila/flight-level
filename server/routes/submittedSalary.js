import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import cors from "cors";
import submittedModel from "../mongodb/models/submittedModel.js";
import axios from "axios";
dotenv.config();
const app = express();
app.use(cors());
const router = express.Router();

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Initializing Telegram Bot with API token
const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const telegramChatId = process.env.TELEGRAM_CHAT_ID;

router.post("/", async (req, res) => {
  try {
    const { salaryProof } = req.body;

    let imageUrls = [];
    if (salaryProof) {
      if (Array.isArray(salaryProof)) {
        for (let i = 0; i < salaryProof.length; i++) {
          const photoUrl = await cloudinary.uploader.upload(salaryProof[i], {
            upload_preset: "modernLiving",
          });
          imageUrls.push(photoUrl.url);
        }
      } else {
        const photoUrl = await cloudinary.uploader.upload(salaryProof, {
          upload_preset: "modernLiving",
        });
        imageUrls.push(photoUrl.url);
      }
    }
    //----------------------------------------------------
    delete req.body.salaryProof;
    const salaryForm = req.body;

    // Save the data to MongoDB
    const newSubmission = await submittedModel.create(salaryForm);

    // Send the message to Telegram
    let message = "*New Submission:*\n";

    const fields = [
      { key: "*Email*", value: salaryForm.email },
      { key: "*Company Name*", value: salaryForm.companyName },
      { key: "*Comments/Notes*", value: salaryForm.notes },
      { key: "*Position*", value: salaryForm.position },
      { key: "*Equipment*", value: salaryForm.equipment },
      { key: "*Hourly Wage*", value: salaryForm.hourlyWage },
      { key: "*Per Diem*", value: salaryForm.perDiem },
      { key: "*MMG*", value: salaryForm.mmg },
      { key: "*Location*", value: salaryForm.location },
      { key: "*Employment Status*", value: salaryForm.employmentStatus },
      { key: "*Years at Company*", value: salaryForm.yearsAtCompany },
      { key: "*Schedule*", value: salaryForm.schedule },
      { key: "*Salary Proof*", value: imageUrls.join(", ") },
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
