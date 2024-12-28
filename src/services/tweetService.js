import { Filter } from "bad-words";
import { createTweet as createTweetRepository } from "../repositries/tweetRepository.js";

export const createTweet = async({body})=>{
    const filter = new Filter();
    if(filter.isProfane(body)){
        console.log(body);
        console.log(filter.clean(body));
        throw new Error("tweet contain block words");
    }

    const tweet = await createTweetRepository({body});
    return tweet;
}