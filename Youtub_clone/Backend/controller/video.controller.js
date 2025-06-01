import VideoModel from "../models/video.model.js";

export async function uploadvideo(req, res){
    try{
        const {title, description, videoLink, thumbnail, category } = req.body;
        const videoUpload = new VideoModel({user: req.user._id, title, description, videoLink,category, thumbnail})
        await videoUpload.save();

        res.status(201).json({success:"true", videoUpload})
    }catch(err){
        res.status(500).json({message:"Server error",err})
    }
}


export async function getAllVideo(req, res) {
    try {
        const videos = await VideoModel.find().populate('user', 'channelName profilePic userName createdAt');
        res.status(200).json({ success: true, videos });
    } catch (err) {
        console.error("Get All Videos Error:", err);
        res.status(500).json({ message: "Server Error", err: err.message || err });
    }
}

export async function getVideoById(req, res){
    try{
        let { id } = req.params
        console.log(id)
        const video = await VideoModel.findById(id).populate('user', 'channelName profilePic userName createdAt');
        res.status(200).json({success: "true", "video": video})
    } catch(err){
        res.status(500).json({ message: "Server Error", err: err.message || err });
    }
}

export async function getAllVideoByUserId(req, res){
    try{
        let {userId} = req.params
        const video = await VideoModel.find({user:userId}).populate('user', 'channelName profilePic userName createdAt about');
        res.status(200).json({success: "true", "video": video})
    } catch(err){
        res.status(500).json({ message: "Server Error", err: err.message || err });
    }
}