import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./mongodb/connectDB.js";
import salaryRoute from "./routes/salaryRoute.js";
import submittedSalary from "./routes/submittedSalary.js";
import blogRoute from "./routes/blogRoute.js";
import { userRouter } from "./routes/user.js";
import { savedNewsRouter } from "./routes/savedNewsRoute.js";
import nodemailerRoute from "./routes/nodemailerRoute.js";
import cors from "cors";

const app = express();
const port = 8080;
dotenv.config();
connectDB();

app.use(express.json());
app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: true,
    methods: "GET, POST, PUT, DELETE, PATCH",
    credentials: true,
  })
);

// app.use("/api/", salaryRoute);
app.use("/api/submittedSalary", submittedSalary);
app.use("/api/v1", blogRoute);
app.use("/api", userRouter);
app.use("/api/savedNews", savedNewsRouter);
app.use("/api/v3", nodemailerRoute);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
