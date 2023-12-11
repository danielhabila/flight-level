import express from "express";
import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config();
const router = express.Router();

async function sendEmail({ recipient_email, OTP }) {
  // First, define send settings by creating a new transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  // Define and send message
  let mail_configs = {
    from: `"FlightLevel fyi" <${process.env.MY_EMAIL}>`,
    to: recipient_email,
    subject: "Password Reset",
    html: `<!DOCTYPE html>
      <html lang="en" >
      <head>
        <meta charset="UTF-8">
        <title>CodePen - OTP Email Template</title>
        
      
      </head>
      <body>
      <!-- partial:index.partial.html -->
      <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
        <div style="margin:50px auto;width:70%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
            <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">FlightLevel fyi</a>
          </div>
          <p style="font-size:1.1em">Hi,</p>
          <p>Please use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
          <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
          <p style="font-size:0.9em;">Regards,<br />FL Team</p>
          <hr style="border:none;border-top:1px solid #eee" />
          <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
            <p>FlightLevel fyi</p>
            <p>Marine Drive</p>
            <p>Vancouver</p>
          </div>
        </div>
      </div>
      <!-- partial -->
        
      </body>
      </html>`,
  };

  transporter.sendMail(mail_configs, function (error, info) {
    if (error) {
      console.log(error);
      return res.json({ message: "An error has occured" });
    } else {
      console.log("Email sent successfully: ");
      return res.json({ message: "Email sent succesfuly" });
    }
  });
}

router.post("/send-recovery-email", async (req, res) => {
  try {
    await sendEmail(req.body);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

export default router;
