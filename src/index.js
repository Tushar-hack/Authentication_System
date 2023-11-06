import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import cookieParser from "cookie-parser";

import { connect } from "./config/db-config.js";
import { PORT, SECRET} from "./config/config.js";
import v1ApiRoutes from './routes/userRoutes.js';

const app = express();

app.use(cookieParser());
app.use(session({
    secret: SECRET,
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    },
    resave: false
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/system', v1ApiRoutes);

app.listen(PORT, async () => {
    await connect();
});