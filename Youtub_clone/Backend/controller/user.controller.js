import UserModel from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const cookieOptions = {
    httpOnly: true,
    secure: false, // when we are using in production we have to make this as true.
    sameSite:'Lax'
}
export async function register(req,res){
    try{
        let {channelName, userName, password, about,profilePic} = req.body;
        UserModel.findOne({userName})
        .then((data) => {
            if(data){
                return res.status(409).json({message: "user Already exists"})
            } else{
                UserModel.create({
                    channelName,
                    userName,
                    about,
                    profilePic,
                    password: bcrypt.hashSync(password, 10)
                })
                res.status(201).json({message: "User Register Successfully"});
            }
        })
    }  catch(err){
        return res.status(500).json({message: err.message});
    }
}

export async function login(req, res){
    try{
        let {userName, password} = req.body;
        UserModel.findOne({userName})
        .then((data) => {
            if(!data){
                return res.status(403).json({message: "User Does not exists"})
            }
            let validPassword = bcrypt.compareSync(password, data.password);
            if(!validPassword){
                return res.status(403).json({message:"Wrong Credentials"})
            }
            // Generate JWT token
            const token = jwt.sign({userId: data._id}, "Secret_key", { expiresIn: "1h" });
            res.cookie('token', token,cookieOptions);
            return res.status(200).json({
                message:"Loged In SuccessFully",
                user:{
                userName:data.userName,
                channelName:data.channelName,
                
            },
            token,

        })
    
        })
    } catch(err){
        return res.status(500).json({message:err.message})
    }
}

export async function logout(req, res){
    try{
        res.clearCookie('token', cookieOptions).json({message: 'Loggout out Successfully'});
    } catch(err){
        res.status(500).json({message:err})
    }
}