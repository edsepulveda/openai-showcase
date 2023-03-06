import mongoose from 'mongoose'


export const connectMongoDB = (url) => {
  mongoose.set('strictQuery', true)
  mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB Atlas Server'))
  .catch((err) => console.error(err))
}