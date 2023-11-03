import express from "express";
import * as dotenv from "dotenv";
import { request, gql } from "graphql-request";
import cors from "cors";
// import Redis from "redis";

const router = express.Router();
dotenv.config();
const app = express();
app.use(cors());
// const redis = Redis.createClient({
//   port: "6379",
//   host: "127.0.0.1",
// });
// await redis.connect();
// if in production enter the url of your production instance of redis "Redis.createClient({url:})"
// const CACHE_EXPIRATION = 3600; // 1 hour

router.get("/fetchBlogs", async (req, res) => {
  try {
    // check whether we have data in redis cache
    // let cacheEntry = await redis.get("bloglist");

    // // if we have a cache hit
    // if (cacheEntry && cacheEntry != null) {
    //   console.log("source: Cache");
    //   cacheEntry = JSON.parse(cacheEntry);
    //   return res.json(cacheEntry);
    // }
    const query = gql`
      query Posts {
        newsPosts {
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
    const results = await request(graphqlAPI, query);
    // console.log(results);

    // console.log("source: API");
    // redis.setEx("bloglist", CACHE_EXPIRATION, JSON.stringify(results));
    res.send(results);
  } catch (error) {
    console.log(error);
  }
});

router.get("/single-post/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    // check whether we have data in redis cache
    // let cacheEntry = await redis.get(`slug:${slug}`);

    // // if we have a cache hit
    // if (cacheEntry && cacheEntry != null) {
    //   console.log("source: Cache");
    //   cacheEntry = JSON.parse(cacheEntry);
    //   return res.json(cacheEntry);
    // }

    //else we have a cache miss and we call our API
    const query = gql`
      query BlogPosts($slug: String!) {
        newsPosts(where: { slug: $slug }) {
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

    // redis.setEx(`slug:${slug}`, CACHE_EXPIRATION, JSON.stringify(results));
    res.send(results);
  } catch (error) {
    console.log(error);
  }
});

export default router;
