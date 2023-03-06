import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const openAIConfig = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

const dalle = new OpenAIApi(openAIConfig);

router.get("/", (req, res) => {
  res.send("<h1>Hello from backendDalle</h1>");
});



//POST A CUSTOM IMAGE BASED OF A PROMPT GIVEN BY THE USER
router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    const dalleResponse = await dalle.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const resImage = dalleResponse.data.data[0].b64_json;
    res.status(200).json({ photo: resImage });
  } catch (err) {
    if (err.response) {
      res.status(500).json(err?.response.status || err?.response.data);
    } else {
      res.status(500).json(err.message);
    }
  }
});

export default router;
