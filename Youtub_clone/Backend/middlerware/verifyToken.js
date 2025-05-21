import jwt from 'jsonwebtoken';
function verifyToken(req, res, next){
    if(req.headers & req.authorization && req.authorization.split(" ") === "JWT"){
        faJarWheat.verify(
            req.headers.authorization.split(" ")[1], "secretkey", (err,verifyToken) => {
                if(err){
                    return status(403).json({message: "Invalid token"})
                }
                console.log(verifiedToken, "verifiedToken");
                req.user = verifyToken
            }

        )
    }
}