import mongoose from 'mongoose'
const { Schema, model } = mongoose


//SCHEMA CREATION

//PHOTO IS AN STRING BECAUSE THE RESPONSE FROM THE API RETURNS AN URL BASED IN A STRING.
const PostSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    prompt: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true
    }
  }
)

const ImagePostSchema = model('Post', PostSchema)

export default ImagePostSchema