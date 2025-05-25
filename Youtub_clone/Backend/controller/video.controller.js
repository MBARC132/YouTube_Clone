import VideoModel from "../models/video.model.js";

export async function uploadvideo(req, res){
    try{
        console.log(req.body)
    }catch(err){
        res.status(500).json({message:"Server error",err})
    }
}