import { v2 } from 'cloudinary'
import express from 'express'
import * as dotenv from 'dotenv'
import ImagePostSchema from '../models/post.schema.js'

dotenv.config()

const router = express.Router()


v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
})


//GET THE 6 LATEST POSTS CREATED BY THE USERS
router.get('/', async (req, res) => {
  try{
    const getAllPosts = await ImagePostSchema.find({})
    res.status(200).json({ message: 'Endpoint Working', data: getAllPosts })
  }catch (err){
    res.status(500).json({ message: err, customMessage: 'Failed to get the POSTS, check your endpoint call' })
  }

})

//POST A IMAGE WITH NAME AND THE PROMPT,
router.post('/', async(req, res) => {
  try{
    const { name, prompt, photo } = req.body

    const urlImage = await v2.uploader.upload(photo)
  
    const Post = await ImagePostSchema.create({
      name,
      prompt,
      photo: urlImage.url
    })
  
    res.status(200).json({ call: true, data: Post })
  } catch (err){
    res.status(500).json(err?.message)
  }

})


export default router