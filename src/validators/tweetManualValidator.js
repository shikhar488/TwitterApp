export const createTweetManaulValidator = (req,res,next)=>{
    if(!req.body.tweet){
        return res.status(404).json({
            error: "tweet required"
        })
    }
    next();
}