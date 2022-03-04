const { Router } = require("express");
const { addScore } = require("./leadBoardMethod")
const boardRouter = Router();



boardRouter.post("/leadBoard", addScore);


module.exports = boardRouter;