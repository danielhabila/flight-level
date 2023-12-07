import express from "express";
import * as dotenv from "dotenv";
import { request, gql } from "graphql-request";
import cors from "cors";

const router = express.Router();
dotenv.config();
const app = express();
app.use(cors());

router.get("/fetchBlogs", async (req, res) => {
  try {
    const query = gql`
      query Posts {
        newsPosts(orderBy: postDate_DESC, first: 100) {
          id
          author
          postUrl
          visibleBaseUrl
          postDate
          slug
          title
          content {
            html
          }
          coverPhoto {
            url
          }
        }
      }
    `;
    const graphqlAPI = process.env.HYGRAPH_ENDPOINT;
    const results = await request(graphqlAPI, query);
    // console.log(results);

    res.send(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/single-post/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const query = gql`
      query BlogPosts($slug: String!) { "'$slug' declares a variable named "slug" of type "String!" The exclamation means the variable is required "
        newsPosts(where: { slug: $slug }) {  "filter condition where the "slug" field matches the value of the "slug" variable"
          id
          postDate
          slug
          title
          content {
            html
          }
          coverPhoto {
            url
          }
        }
      }
    `;

    const graphqlAPI = process.env.HYGRAPH_ENDPOINT;
    const results = await request(graphqlAPI, query, { slug });
    console.log("single post", results);
    console.log("source: API");

    res.send(results);
  } catch (error) {
    console.log(error);
  }
});

export default router;
