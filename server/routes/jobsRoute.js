import express from "express";
import * as dotenv from "dotenv";
import { request, gql } from "graphql-request";

const router = express.Router();
dotenv.config();

router.get("/", async (req, res) => {
  try {
    const query = gql`
      query JobsQuery {
        jobPosts(orderBy: jobUrl_DESC, first: 100) {
          id
          jobUrl
          location
          logoUrl
          postDate
          title
          airline
        }
      }
    `;
    const graphqlAPI = process.env.HYGRAPH_ENDPOINT;
    const results = await request(graphqlAPI, query);
    console.log(results);

    res.status(200).json(results);
  } catch (error) {
    res.status(500).send("Server Error");

    console.log(error);
  }
});

export default router;
