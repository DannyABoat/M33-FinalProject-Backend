require("./db/connection");
const express = require("express");
const cors = require("cors");
const userRouter = require("./User/userRoutes");
// const boardRouter = require("./leadBoard/leadBoardRoutes");
const app = express();

const port = process.env.PORT;


app.use(express.json());
app.use(cors());

app.use(userRouter);
// app.use(boardRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

