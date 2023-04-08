import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
import router from './routes/postRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  // res.status(200).json({
  //   message: 'Hello from DALL.E!',
  // });

 
});

router.route('/').post(async (req,res)=>{
  res.send("hey boi")
})

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(3000, () => console.log('Server started on port http://localhost:3000'));
  } catch (error) {
    console.log(error);
  }
};

startServer();