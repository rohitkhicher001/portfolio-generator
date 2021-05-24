const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("../model/userSchema");
const User = require("../model/userSchema");

// about route
router.get("/about",authenticate, (req,res) =>{
   res.send(req.rootUser);
   console.log(req.rootUser);
});

// resister route
router.post('/register',async (req,res)=>{
    const {name,email,number,profession,password,cpassword} = req.body;
    if(!name || !email || !number || !profession || !password || !cpassword){
        return res.status(422).json({error : "plz filled your areas "});
    }
    if(password !== cpassword){
        return res.status(422).json({error : "Your password are both different"});
    }
    try{
        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error : "Email already exist"});
        }
        const user = new User({
            name,email,number,profession,password,cpassword
        })
        user.password = await bycrypt.hash(user.password, 12);
        user.cpassword = await bycrypt.hash(user.cpassword, 12);
        await user.save();
        res.status(500).json({message : "Suceess"});
    }catch(err){
        console.log(err);
    }
});

// login route
router.post("/login", async (req,res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(422).json({error : "Please filled your areas "});
    }
    try{
        const userExist = await User.findOne({email : email});
        if(userExist){
            const result = await bycrypt.compare(password,userExist.password);
            // maketoken by jwt
            var token = jwt.sign({_id : userExist._id},process.env.SECRETS_KEY);
            userExist.tokens = (userExist.tokens).concat({token : token});
            await userExist.save();
            // making a cookie
            res.cookie("jwttokken",token , {
                expires : new Date(Date.now + 25892000000),
                httpOnly:true
            })
            console.log(token);
            console.log(userExist);
            if(result){
                return res.status(500).json({message : "Sucessfully login"});
            }else{
                return res.status(422).json({error : "Password is incorrect"});
            }
        }else{
            return res.status(422).json({error : "Username are not Exist Please registration "});
        }
    }catch(err){
        console.log(err);
    }
})

// contact route
router.post('/contact',authenticate , async(req,res)=>{
    try {
        const {name,email,subject,messagess1} = req.body;

        if(!name || !email || !subject || !messagess1){
            console.log("Contact from error");
            return res.status(500).json({error: "Please filled your phone "});
        }
        const contactUser = await User.findOne({_id:req.userId});
        if(contactUser){
            contactUser.messagess = (contactUser.messagess).concat({subject,meassges:messagess1});
            await contactUser.save();

            console.log(contactUser.messagess)
            return res.status(200).json({message : "Your message are sent"})
        }
    } catch (error) {
        console.log(error);
    }
})
router.post('/resume',authenticate , async(req,res)=>{
    try {
        const {schoolName,passingSchoolYear,schoolGrades,
        collageName,passingYear,collageGrades,skills,experience,intership,address,cityName, state,
        pincode} = req.body;
        if(!schoolName || !passingSchoolYear || !schoolGrades || !
            collageName || !passingYear || !collageGrades || !skills || !experience || !intership || !address || !cityName || !state
            || !pincode){
            console.log("Resume  from error");
            return res.status(500).json({error: "Please filled your phone "});
        }
        const ResumeUser = await User.findOne({_id:req.userId});
        if(ResumeUser){
            ResumeUser.resume = (ResumeUser.resume).concat({schoolName,passingSchoolYear,schoolGrades,
                collageName,passingYear,collageGrades,skills,experience,intership,address,cityName, state,
                pincode});
            await ResumeUser.save();
            return res.status(200).json({message : "Your resume are ready"})
        }
    } catch (error) {
        console.log(error);
    }
})

// Logout functionality
router.get("/logout",(req,res) =>{
    res.clearCookie("jwttokken",{path: '/'});
    res.status(200).send("Logout succesfully");
    console.log("Successfully logout");
});

// getdata route whole data in this route
router.get("/getdata",authenticate,(req,res) =>{
    res.send(req.rootUser);
});

module.exports = router;