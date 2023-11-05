import UserRepository from "../repository/userRepository.js";
import sender from '../config/email-config.js';
import { email } from "../config/config.js";

class UserService{
    constructor () {
        this.UserRepository = new UserRepository();
    }

    async createUser (userData) {
        try {
            const user = await this.UserRepository.createUser(userData);
            return user;
        } catch (error) {
            console.log("Service Error");
            throw error;
        }
    }

    async sendotp (userEmail) {
        try{
            const user = await this.UserRepository.findByEmail(userEmail);
            if(!user){
                throw new Error('User does not Exist..!')
            }
            const response = await sender.sendMail({
                from: email,
                to: userEmail,
                subject: 'OTP Verification',
                text: `Your otp for email ${userEmail} is ${user.otp}`
            });
            return true;
        } catch(error){
            throw error;
        }
    }

    async verifyotp (userEmail, otp){
        try {
            const user = await this.UserRepository.findByEmail(userEmail);
            if(!user){
                throw new Error ('User does not Exist..!');
            }
            if(user.otp == otp){
                return true;
            }
            return false;
        } catch (error) {
            throw error;
        }
    }
}   

export default UserService;