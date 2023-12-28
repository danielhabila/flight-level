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

    res.send(results);
  } catch (error) {
    console.log(error);
  }
});

// --------------------------------Upvotes per post
router.post("/upvotes", async (req, res) => {
  try {
    // const body = [10, 20];
    const body = 20;

    // -----------------------
    const mutationQuery = gql`
      mutation VoteMutation {
        createVote(data: { upvotes: ${body} }) {
          id
          upvotes
        }
      }
    `;

    const graphqlAPI = process.env.HYGRAPH_ENDPOINT;
    const results = await request(graphqlAPI, mutationQuery);

    res.send(results);
  } catch (error) {
    console.log(error);
  }
});

export { router as savedNewsRouter };
