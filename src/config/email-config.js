import nodemailer from 'nodemailer';
import { email,password } from './config.js';

const sender = nodemailer.createTransport({
    service: 'Gmail',
    auth:{
        user: email,
        pass: password
    }
});

export default sender;