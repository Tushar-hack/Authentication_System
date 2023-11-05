import UserService from "../services/userService.js";

const userService = new UserService();

export const create = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        return res.status(201).json({
            data: newUser,
            message: "Success"
        });
    } catch (error) {
        throw error;
    }
}  

export const sendOTP = async (req,res) => {
    try {
        const response = await userService.sendotp(req.body.email, req.body.otp);
        return res.status(200).json({
            message: "Successfully sent the OTP."
        });
    } catch (error) {
        throw error;
    }
}

export const verifyOTP = async (req, res) => {
    try {
        const response = await userService.verifyotp(req.body.email, req.body.otp);
        if(response){
            return res.status(200).json({
              message: "Successfully verified the OTP.",
            });
        }else{
            return res.status(400).json({
                message: "Wrong OTP."
            });
        }
    } catch (error) {
        throw error;
    }
}
