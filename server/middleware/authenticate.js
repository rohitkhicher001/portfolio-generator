const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async (req,res,next)=>{
    try {
        const token = req.cookies.jwttokken;
        const verifiedToken = jwt.verify(token , process.env.SECRETS_KEY);
        // console.log(verifiedToken);
        const rootUser = await User.findOne({_id:verifiedToken._id});
        if(!rootUser){
            throw new Error("User not found");
        }
        // console.log(rootUser);
        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;
        next();
        
    } catch (err) {
        res.status(401).send("Unauthorised : No token provided");
        console.log("Not get any token");
    }
}

module.exports = Authenticate;