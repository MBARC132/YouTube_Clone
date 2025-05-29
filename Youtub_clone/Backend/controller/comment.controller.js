import CommentModel from "../models/comment.model.js";

export async function addcomment(req,res){
    try{
        let {video, message} = req.body;
        const comment = new CommentModel({user:req.user._id, video,message})
        await comment.save();
        res.status(201).json({message:"success", comment })
        // console.log(req.user);
    }catch(err){
         res.status(500).json({ message: "Server Error", err: err.message || err });
    }
}

export async function getCommentByVideoId(req, res){
    try{
        let {videoId} = req.params
        const comments = await CommentModel.find({video:videoId}).populate('user', 'channelName profilePic userName createdAt');
        res.status(200).json({message:"success", comments })
        console.log(req.params);
    }catch(err){
        res.status(500).json({ message: "Server Error", err: err.message || err });
    }
}