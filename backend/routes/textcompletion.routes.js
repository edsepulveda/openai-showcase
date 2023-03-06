import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(config);

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 150,
      temperature: 0.4
    });
    const response = completion.data.choices[0].text.trim()
    res.status(200).json({ data: response })
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router
