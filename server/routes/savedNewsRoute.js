import express from "express";
import * as dotenv from "dotenv";
import { request, gql } from "graphql-request";
import userModel from "../mongodb/models/userModel.js";
dotenv.config();

const router = express.Router();

// -------------------------------------- Get ids of saved news
router.get("/getIds", async (req, res) => {
  try {
    const userObject = req.query;

    const currentUserGoogleId = userObject.googleId;

    const currentUser = await user.findOne({ googleId: currentUserGoogleId });
    const inboundMatchRequest = currentUser.inboundMatchRequest; // get the matches array

    const users = await user.find({ googleId: { $in: inboundMatchRequest } }); // find all users whose googleId is in the matches array

    res.status(200).json(users); // return the matches array
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// -------------------------------------- Adding to savedIds array in my mongodb document
router.patch("/add", async (req, res) => {
  try {
    const { currentUserId, savedNewsId } = req.body;

    const filter = { userId: currentUserId };
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
router.get("/", async (req, res) => {
  try {
    // const postId = "clps3d74q312f0bsuwbh3k4jp";
    const postIds = [
      "clps3d74q312f0bsuwbh3k4jp",
      //   "cloo0xo94f8zt0bsktcjme763",
      //   "clonwbamif1zz0bu4n8o0p17h",
    ];
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
