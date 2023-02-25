import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Post from "../mongodb/models/post";

dotenv.config();

const router = express.Router();

export interface IPost {
  name: string;
  prompt: string;
  photo: string;
}

export interface IPostResponse {
  success: boolean;
  data?: any;
  message?: any;
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//GET ALL POSTS
router.route("/").get(async (req, res) => {
  let responseData: IPostResponse;
  let response = null;
  try {
    const posts = await Post.find({});

    responseData = {
      success: true,
      data: posts,
    };

    response = res.status(200).json(responseData);
  } catch (error) {
    
    responseData = {
        success: false,
        message : error,
      };

    response =  res.status(500).json(responseData);
  }
  return response;
});

//CREATE A POSTS
router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo }: IPost = req.body;
    const photoUrl: any = await cloudinary.uploader.upload(photo);

    const newPost: any = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });
    res.status(200).json({ success: true, data: newPost });
  } catch (error) {
    console.error("postRoutes()-0: ", error);
    res.status(500).json({ success: false, message: error });
  }
});

export default router;
