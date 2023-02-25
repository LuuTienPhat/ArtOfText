import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect";
import postRoutes from "./routes/postRoutes"
import dalleRoutes from "./routes/dalleRoutes"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use('/api/v1/post', postRoutes);
app.use('api/v1/dalle', dalleRoutes);

app.get("/", async (req, res) => {
  res.send("hello from DALL E");
});

const startServer = async () => {
  try {
    const mongodbUrl: string | undefined = process.env.MONGODB_URL;
    if (mongodbUrl) {
      connectDB(mongodbUrl);
      app.listen(process.env.PORT || 8080, () => console.log("Server has started on port"));
    }
  } catch (error) {
    console.log(error);
  }

  
};

startServer();
