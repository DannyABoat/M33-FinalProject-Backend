const bcrypt = require("bcryptjs");
const User = require("./userModel");


exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).send({ user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
 }
};

exports.addUser = async (userObj) => {
    try{
        await User.sync();
        await User.create({
        firstName: userObj.username,
   lastName: userObj.lastName,
   username: userObj.firstName,
   email: userObj.email,
   password: userObj.password}); 
    } catch (error) {
        console.log (error);
    }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.find(req.body);
    res.status(200).send({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      const updatedUser = {
        username: req.body.newUsername
          ? req.body.newUsername
          : req.body.username,
        email: req.body.email || user.email,
        pass: req.body.password || user.password,
      };
      await User.updateOne({ username: user.username }, updatedUser);
      res.status(200).send({ updatedUser });
    } else {
      res.status(404).send({
        error: "Cannot find user to update",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ username: req.body.username });
    res.status(200).send({ message: "User Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.comparePassword = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    (await bcrypt.compare(req.body.password, user.password))
      ? res.status(200).send({ message: "Successfully Logged In!" })
      : res.status(500).send({ err: "Wrong Password!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
