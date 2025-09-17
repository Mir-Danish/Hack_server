import User from "../model/User.js";

export const registerController = async(req, res) => {
    try {
        const {name,email,password} = req.body;
        //validation
        if(!name || !email || ! password){
            return res.status(400).json({
                message: "All fields are required"});
        }

        const user = new User({name,email,password});
        await user.save();

       res.status(201).json({message:"User registered successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error in registering user"})
    }
}




export const getAllUsers = async(req,res) =>{
    try {
        const users = await User.find({}); //Fetch Allusers in the db
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message:"Error in fetching users"})
    }
};