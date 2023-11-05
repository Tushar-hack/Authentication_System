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
        const response = await userService.sendotp(req.body.email);
        console.log(response);
        return res.status(200).json({
            message: "Successfully sent the OTP."
        })
    } catch (error) {
        throw error;
    }
}
