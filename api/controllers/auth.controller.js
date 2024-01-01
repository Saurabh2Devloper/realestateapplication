import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";


export const signup = async (req,res,next)=>{


    const {username , email , password} =req.body;

    // last 10 is salt = Number of Rounds in Encryption

const saltRounds = 10; 

const hashedPassword = bcryptjs.hashSync(password, saltRounds);
   
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });
try{
    await newUser.save();
    res.status(201).json("User Created Successfully...!!!")

}catch(err){
    // res.status(500).json(err.message);
    next(err);
}
}