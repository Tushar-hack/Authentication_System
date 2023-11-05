import nodemailer from 'nodemailer';
import { email,password } from './config';

const sender = nodemailer.createTransport({
    service: 'Gmail',
    auth:{
        user: email,
        pass: password
    }
});

export default sender;