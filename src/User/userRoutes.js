const { Router } = require("express");
const { hashPassword } = require("../middleware");
const { addUser, listUsers, updateUser, deleteUser, login } = require("./userMethod");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.get("/User", listUsers);
userRouter.put("/User", updateUser);
userRouter.delete("/User", deleteUser);



// userRouter.post("/signIn", login);


module.exports = userRouter;
