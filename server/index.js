import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import memberRouter from "./routers/member.js";

const app = express();
const PORT = process.env.port || 5000;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb'}));
app.use(cors());

app.use('/member', memberRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});