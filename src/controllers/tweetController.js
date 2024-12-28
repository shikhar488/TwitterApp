import { createTweet as createTweetService } from "../services/tweetService.js";


export const getTweets = (req,res)=>{
    return res.json({
        message: "welcome to the tweet"
    });
}

export const getTweetById = (req,res)=>{
    return res.json({
        message: "welcome",
        id: req.params.id
    });
}

export const createTweet = async (req,res)=>{
    try {
        const response = await createTweetService({
            body:req.body.body
        });
        return res.status(201).json({
            success:true,
            data:response,
            message:"tweet created"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'internal service error'
        })
    }
}