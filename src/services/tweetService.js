import { Filter } from "bad-words";
import { createTweet as createTweetRepository, getTweets as getTweetRepository, 
    getTweetById as getTweetByIdRepository, deleteTweet as deleteTweetRepository
    , updateTweet as updateTweetRepository } from "../repositries/tweetRepository.js";

export const createTweet = async({body,image})=>{
    const filter = new Filter();
    if(filter.isProfane(body)){
        console.log(body);
        console.log(filter.clean(body));
        throw new Error("tweet contain block words");
    }

    const tweet = await createTweetRepository({body,image});
    return tweet;
}

export const getTweets = async ()=>{
    const tweets = await getTweetRepository();

    return tweets;
}


export const getTweetById = async (id)=>{
    const tweets = await getTweetByIdRepository(id);

    if(!tweet){
        throw{
            message:'tweet not found',
            status:404
        };
    }

    return tweets;
}


export const deleteTweet = async (id)=>{
    const tweet = await deleteTweetRepository(id);

    if(!tweet){
        throw{
            message:'tweet not found',
            status:404
        };
    }

    return tweet;
}


export const updateTweet = async (id,body)=>{
    const tweet = await updateTweetRepository(id,body);

    if(!tweet){
        throw{
            message:'tweet not found',
            status:404
        };
    }

    return tweet;
}