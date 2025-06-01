import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    videoLink:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    }
}, {timestamps:true})

const VideoModel = mongoose.model('Video', videoSchema);
export default VideoModel;