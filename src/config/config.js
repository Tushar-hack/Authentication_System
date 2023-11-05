import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
const URL = process.env.URL;
const email = process.env.EMAIL_ID;
const password = process.env.EMAIL_PASS;
export{
    PORT,
    URL,
    email,
    password
}