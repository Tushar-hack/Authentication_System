import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { otp_generator } from "../utils/helper";

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String
    },
    phoneNumber:{
        type:Number,
        required: true
    },
    otp:{
        type: Number
    }
}, {timestamps: true});

userSchema.pre('save', function (next) {
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(this.password, SALT);
    this.password = encryptedPassword;
    next();
});

userSchema.pre('save', function (next) {
    const otp = otp_generator();
    this.otp = otp;
    next();
});

const User = mongoose.model('User', userSchema);

export default User;