import express from "express";

const memberRouter = express.Router();

memberRouter.get('/', (req, res) => {
    res.send('REQUEST SUCCESS');
});

export default memberRouter;