const { Router } = require("express");
const {
  addUser,
  comparePassword,
  getUser,
  updateUser,
  deleteUser,
} = require("./userMethod");
const { hashPassword } = require("../middleware/");
const userRouter = Router();

userRouter.post("/register", hashPassword, addUser);
userRouter.post("/user", getUser);
userRouter.put("/user", updateUser);
userRouter.delete("/user", deleteUser);

userRouter.post("/User", hashPassword, addUser);
userRouter.get("/User", listUsers);
userRouter.put("/User", updateUser);
userRouter.delete("/User", deleteUser);

userRouter.get("/login", comparePassword);

module.exports = userRouter;
