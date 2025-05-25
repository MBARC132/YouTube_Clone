import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    // firstName: String,
    // email:String,
    // password: String
    channelName:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    about:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        required:true,
    }
}, {timestamps:true})

const UserModel = mongoose.model('Users', userSchema);
export default UserModel;
