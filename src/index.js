import express from "express";
import bodyParser from "body-parser";

import { connect } from "./config/db-config.js";
import { PORT } from "./config/config.js";
import v1ApiRoutes from './routes/userRoutes.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/system', v1ApiRoutes);

app.listen(PORT, async () => {
    await connect();
});