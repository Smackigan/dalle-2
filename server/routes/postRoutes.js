import { Express } from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';
import { Configuration } from 'openai';

dotenv.config();

const router = express.Router();
