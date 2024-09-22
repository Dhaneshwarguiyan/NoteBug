const jwt = require("jsonwebtoken");


function authMiddleware(req,res,next){
    const token = req.cookies?.token;
    if(!token){
        return res.status(401).send({
            message:"Please login"
        })
    }
    if(token){
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        if(decode){
            req.user = decode.user;
            next();
        }
    }
}

module.exports = authMiddleware;