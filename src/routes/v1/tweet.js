import express from 'express'
import { getTweets, getTweetById , createTweet, deleteTweet,updateTweet} from '../../controllers/tweetController.js';
import {validate} from '../../validators/zodValidator.js'
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';
import { s3Uploader } from '../../config/multerConfig.js';

const router = express.Router();

router.get('/', getTweets);


router.get('/:id',getTweetById);

router.post('/', s3Uploader.single('tweetImage'),validate(tweetZodSchema),createTweet);

router.delete('/:id', deleteTweet);

router.put('/:id', updateTweet);
export default router;