const { signupService, findUserByEmail, findUsers, findUser } = require("../services/user.service");
const { generateToken } = require("../utils/token");

exports.signup=async(req,res)=>{
    try{
        const user=await signupService(req.body); 
        const token=user.generateConfirmationToken();
        await user.save({validateBeforeSave:false});
        res.status(200).json({
            status:"success",
            message:"Successfully signed up"
        })
    }catch(error){
      
        res.status(500).json({
            status:"fail",
            error,
        })
    }
}

exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;

        if(!email||!password){
            return res.status(401).json({
                status:"fail",
                error:"Please Provide your credentials",
            });
        }
        const user=await findUserByEmail(email);
        if(!user){
            return res.status(401).json({
                status:"fail",
                error:"No user found. Please create an account",
            });
        }
        const isPasswordValid=user.comparePassword(password,user.password)
        if(!isPasswordValid){
            return res.status(403).json({
                status:"fail",
                error:"Password is not corree"
            })
        }
        if(user.status!="active"){
            return res.status(401).json({
                status:"failed",
                error:"Your account is not active yet!"
            })
        }

        const token=generateToken(user);
        const {password:pwd,...others}=user.toObject()
        res.status(200).json({
            status:"success",
            message:"Successfully logged in",
            data:{
                user:others,
                token
            }
        })
    }catch(error){
     
        res.status(500).json({
            status:"fail",
            error,
        })
    }
}

exports.getMe=async(req,res)=>{
    try{
        const user=await findUserByEmail(req.user?.email);
        res.status(200).json({
            status:"success",
            data:user,
        });
    }catch(error){
        res.status(500).json({
            status:"failed",
            error
        })
    }
}

exports.checkUser=async(req,res)=>{
    try{
        const {email}=await req.query;
        const user=await findUserByEmail(email);
       if(user){
        res.status(200).json({
            status:"success",
            data:user,
        });
       }else{
        res.status(403).json({
            status: "fail",
            error: "Invalid user"
          });
       }
    }catch(error){
        res.status(500).json({
            status:"failed",
            error
        })
    }
}

exports.allUsers=async(req,res)=>{
    try{
        const users=await findUsers();
       if(users){
        res.status(200).json({
            status:"success",
            data:users,
        });
       }else{
        res.status(403).json({
            status: "fail",
            error: "Invalid users"
          });
       }
    }catch(error){
        res.status(500).json({
            status:"failed",
            error
        })
    }
}
exports.findUser=async(req,res)=>{
    try{
        const user=await findUser(req.query.email);
       if(user){
        res.status(200).json({
            status:"success",
            data:user,
        });
       }else{
        res.status(403).json({
            status: "fail",
            error: "Invalid users"
          });
       }
    }catch(error){
        res.status(500).json({
            status:"failed",
            error
        })
    }
}