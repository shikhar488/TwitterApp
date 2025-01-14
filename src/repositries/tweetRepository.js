import Tweet from "../schema/tweet.js";


export const createTweet = async({body,image}) =>{
    try {
        const tweet = await Tweet.create({body,image});
        return tweet;
    } catch (error) {
        throw error;
    }
}

export const getTweets = async()=>{
    try {
        const tweets = await Tweet.find();
        return tweets;
    } catch (error) {
        throw error;
    }
}

export const getTweetById = async(id)=>{
    try {
        const tweet = await Tweet.findById(id);
        return tweet;
    }
    catch (error) {
        throw error;
    }

}

export const deleteTweet = async(id)=>{
    try {
        const tweet = await Tweet.findByIdAndDelete(id);
        return tweet;
    } catch (error) {
        throw error;
    }
} 

export const updateTweet = async(id,body)=>{
    try {
        const tweet = await Tweet.findByIdAndUpdate(id,{body},{new:true});
        return tweet;

    } catch (error) {
        throw error;
    }
};