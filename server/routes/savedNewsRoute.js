import express from "express";
import * as dotenv from "dotenv";
import { request, gql } from "graphql-request";
import userModel from "../mongodb/models/userModel.js";
dotenv.config();

const router = express.Router();

// -------------------------------------- Get ids of saved news
router.get("/getIds", async (req, res) => {
  try {
    const currentUserEmail = req.query.currentUserEmail;

    const currentUser = await userModel.findOne({ email: currentUserEmail });
    const savedIds = currentUser.savedIds; // get the savedNewsIds array

    res.status(200).json(savedIds);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// -------------------------------------- Adding to savedIds array in my mongodb document
router.patch("/add", async (req, res) => {
  try {
    const { currentUserEmail, savedNewsId } = req.body;
    console.log("req.body", req.body);
    const filter = { email: currentUserEmail };
    const update = { $push: { savedIds: savedNewsId } };
    const options = { new: true };

    const updatedProfile = await userModel.findOneAndUpdate(
      filter,
      update,
      options
    );

    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// -------------------------------------- Fetching data from hygraph using Ids from mongodb

router.patch("/remove", async (req, res) => {
  try {
    const { currentUserEmail, savedNewsId } = req.body;

    const filter = { email: currentUserEmail };
    const update = { $pull: { savedIds: savedNewsId } };
    const options = { new: true };

    const updatedProfile = await userModel.findOneAndUpdate(
      filter,
      update,
      options
    );

    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// -------------------------------------- Fetching data from hygraph using Ids from mongodb
router.get("/", async (req, res) => {
  try {
    const { fetchedSavedIds: postIds } = req.query;
    console.log("fetchedSavedIds", postIds);
    // const postIds = fetchedSavedIds.split(",");
    // console.log("postIds", postIds);

    // ------------------------------
    // } catch (error) {
    //   res.status(400).json({ message: error.message });
    // }
    // ------------------------------
    // const postIds = [
    //   "clps3d74q312f0bsuwbh3k4jp",
    //   "cloo0xo94f8zt0bsktcjme763",
    //   "clonwbamif1zz0bu4n8o0p17h",
    // ];
    // -----------------------
    const query = gql`
      query BlogPosts($ids: [ID!]!) {
        newsPosts(where: { id_in: $ids }) {
          author
          content {
            json
          }
          postDate
          postUrl
          title
          visibleBaseUrl
          id
        }
      }
    `;

    const graphqlAPI = process.env.HYGRAPH_ENDPOINT;
    const results = await request(graphqlAPI, query, { ids: postIds });
    console.log("single post", results);

    res.send(results);
  } catch (error) {
    console.log(error);
  }
});

export { router as savedNewsRouter };
