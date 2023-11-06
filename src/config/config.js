import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
const URL = process.env.URL;
const email = process.env.EMAIL_ID;
const password = process.env.EMAIL_PASS;
const SECRET = process.env.SECRET;
export{
    PORT,
    URL,
    email,
    password,
    SECRET
}