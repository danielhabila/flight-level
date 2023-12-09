import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import userModel from "../mongodb/models/userModel.js";
import * as dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });

    if (user) {
      return res.json({ message: "User already exist" });
    }
    const userId = uuidv4();

    const hashedPassword = bcrypt.hashSync(password, 10); // hash password

    const newUser = await userModel.create({
      userId,
      username,
      password: hashedPassword,
    }); //creating a user
    res.status(201).json({ message: "User registered successfully" });
    console.log(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});
// -----------------------------------------------------

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });

    if (!user) {
      return res.json({ message: "User doesn't exist" });
    }

    //compare submitted password with the hashed password
    const passwordMatch = bcrypt.compareSync(password, user.password); //returns boolean
    if (!passwordMatch) {
      return res.json("Password is incorrect");
    } else {
      //create a jwt token. This is how we can tell which user is logged in.
      const token = jwt.sign({ id: user.userId }, process.env.JWT_SECRET_KEY); //1st arg = data we want to encryt, 2nd arg = secret key used to encrypt and decrypt it.

      //send the jwt token
      res.json({ token, userId: user.userId });
    }
  } catch (error) {
    console.log(error);
  }
});
// -------------------------------------
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    jwt.verify(authHeader, process.env.JWT_SECRET_KEY, (err) => {
      if (err) return res.sendStatus(403); // user not authorized

      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export { router as userRouter };
// -----------------------------------------------------

//AUTHENTICATION

// app.get("/logout", (req, res) => {
//   try {
//     res.clearCookie("authorization");
//     res.sendStatus(200);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(400);
//   }
// });

// app.get("/checkAuth", requireAuth, (req, res) => {
//   console.log(req.userById);
//   res.sendStatus(200);
// });
