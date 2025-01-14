import { CostExplorer } from "aws-sdk";
import { createTweet as createTweetService, 
    getTweets as getTweetService, getTweetById as getTweetByIdService,
     deleteTweet as deleteTweetService, updateTweet as updateTweetService} from "../services/tweetService.js";


export const createTweet = async (req,res)=>{
    console.log(req.file)
    try {
        const response = await createTweetService({
            body:req.body.body,
            image: req.file?.location
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

export const getTweets = async (req,res)=>{
    try {
        const response = await getTweetService();
        return res.status(201).json({
            success:true,
            data:response,
            message:"tweet fetched successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'internal service error'
        })
    }
}


export const getTweetById = async (req,res)=>{

    try {
        const response = await getTweetByIdService(req.params.id);
        return res.status(201).json({
            success:true,
            data:response,
            message:"tweet fetched successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'internal service error'
        })
    }
}


export const deleteTweet = async (req,res)=>{
    try {
        const response = await deleteTweetService(req.params.id);
        return res.status(201).json({
            success:true,
            data:response,
            message:"tweet deleted successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'internal service error'
        })
    }
}


export const updateTweet = async (req,res)=>{
    try {
        const response = await updateTweetService(req.params.id,req.body.body);
        return res.status(201).json({
            success:true,
            data:response,
            message:"tweet updated successfully"
        })
    }  catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'internal service error'
        })
    }
};     