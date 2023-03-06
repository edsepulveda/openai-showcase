import * as dotenv from "dotenv";
import express from "express";
import { connectMongoDB } from "./db/connect.js";
import dalle2Routes from './routes/dalle2.routes.js'
import postImgRoutes from './routes/postImg.routes.js'
import textCompletion from './routes/textcompletion.routes.js'

import cors from 'cors'

dotenv.config();
const app = express();
const PORT = process.env.DEV_PORT;


app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use('/api/v1/images', dalle2Routes)
app.use('/api/v1/post', postImgRoutes)
app.use('/api/v1/text', textCompletion)

const createServerListener = async () => {
  try {
    connectMongoDB(process.env.ALTAS_DB_CONNECTION);
    app.listen(PORT, () => {
      console.log(`Server & Database Running like wine in port ${PORT}`);
    });
  } catch (error) {
    console.error(`Server is not running`);
  }
};

createServerListener();
