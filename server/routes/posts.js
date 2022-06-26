import express from "express";

//import { getPosts } from 'C:\Users\tanma\Desktop\react-crash-2021-master\memories-project\server\controllers\posts.js';
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

//localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);



export default router;