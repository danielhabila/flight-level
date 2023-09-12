import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./mongodb/connectDB.js";
import salaryRoute from "./routes/salaryRoute.js";
import submittedSalary from "./routes/submittedSalary.js";
import cors from "cors";
const app = express();
const port = 8080;
dotenv.config();

connectDB();

// Middleware
app.use(express.json({ limit: "10mb" }));

app.use(
  cors({
    origin: true,
    methods: "GET, POST, PUT, DELETE, PATCH",
    credentials: true,
  })
);

app.use("/api/", salaryRoute);
app.use("/api/submittedSalary", submittedSalary);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
