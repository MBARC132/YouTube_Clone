import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model.js';
// function verifyToken(req, res, next){
//     if(req.headers & req.authorization && req.authorization.split(" ") === "JWT"){
//         faJarWheat.verify(
//             req.headers.authorization.split(" ")[1], "secretkey", (err,verifyToken) => {
//                 if(err){
//                     return status(403).json({message: "Invalid token"})
//                 }
//                 console.log(verifiedToken, "verifiedToken");
//                 req.user = verifyToken
//             }

//         )
//     }
// }
const auth = async (req,res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({error: "No token, authorization denied"})
    } else{
        try{
            const decode = jwt.verify(token, "Secret_key");
            req.user = await UserModel.findById(decode.userId).select('-password');
            next();
        } catch(err){
            res.status(401).json({error: "token is not valid",err});
        }
    }
}

export default auth;