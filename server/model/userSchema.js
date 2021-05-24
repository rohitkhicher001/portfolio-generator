const  mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    number:{
        type : Number,
        required : true
    },
    profession:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    cpassword:{
        type : String,
        required : true
    },
    messagess:[
        {
            subject:{
                type : String,
                required : true
            },
            meassges:{
                type : String,
                required : true
            }
        }
    ],
    alreadyResume:{
        type:Boolean
    },
    resume:[
        {
            schoolName:{
                type : String,
                required : true
            },
            passingSchoolYear:{
                type : String,
                required : true
            },
            schoolGrades:{
                type : String,
                required : true
            },
            collageName:{
                type : String,
                required : true
            },
            passingYear:{
                type : String,
                required : true
            },
            collageGrades:{
                type : Number,
                required : true
            },
            skills:{
                type : String,
                required : true
            },
            experience:{
                type : String,
                required : true
            },
            intership:{
                type : String,
                required : true
            },
            address:{
                type : String,
                required : true
            },
            cityName:{
                type : String,
                required : true
            },
            state:{
                type : String,
                required : true
            },
            pincode:{
                type : Number,
                required : true
            }
        }
    ],
    tokens :[
        {
            token:{
                type : String,
                required : true
            }
        }     
    ]
});

const USER = mongoose.model("USER",userSchema);

module.exports = USER;