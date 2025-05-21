import UserModel from "../models/user.model.js";
import bcrypt from 'bcrypt';
export async function register(req,res){
    try{
        let {firstName, email, password} = req.body;
        UserModel.findOne({email})
        .then((data) => {
            if(data){
                return res.status(409).json({message: "user Already exists"})
            } else{
                UserModel.create({
                    firstName,
                    email,
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
        let {email, password} = req.body;
        UserModel.findOne({email})
        .then((data) => {
            if(!data){
                return res.status(403).json({message: "User Does not exists"})
            }
            let validPassword = bcrypt.compareSync(password, data.password);
            if(!validPassword){
                return res.status(403).json({message:"Wrong Credentials"})
            }
            return res.status(200).json({user:{
                email:data.email,
                firstName:data.firstName,
            }
        })
        })
    } catch(err){
        return res.status(500).json({message:err.message})
    }
}