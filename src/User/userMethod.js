const User = require("./userModel");
const yargs = require ("yargs");
const { hideBin } = require ("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const bcrypt = require("bcryptjs");


exports.addUser = async (userObj) => {
    try{
        await User.sync();
        await User.create(
            firstName: userObj.firstName,
          lastName: userObj.lastName,
          username: userObj.username,
          email: userObj.email,
          password: userObj.password); 
    } catch (error) {
        console.log (error);
    }
};

exports.listUsers = async() => {
    try{
        const listOfUsers = await User.findAll()
        console.log(listOfUsers)
    } catch (error) {
        console.log(error)
    }
};

exports.updateUser = async (user) => {
    try {
      await User.update({
        firstName: argv.firstName,
          lastName: argv.lastName,
          username: argv.username,
          email: argv.email,
          password: argv.password
      },
      {where: {
          id: user.id
        }
});
        console.log(`User id: ${user.id} was updated`)
    } catch (error) {
      console.log(error)
    }
};

exports.deleteUser = async (user) => {
    try {
      await User.destroy({
        where: {
          id: user.id
        }
      })
    } catch (error) {
      console.log(error)
    }
  };



  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const newUser = await User.findOne({ email });
      if (newUser) {
        const validPassword = await bcrypt.compare(password, newUser.password);
        if (validPassword) {
          res.status(200).send({message: "Login was successful"})
        } else {
          res.status(500).send({message: "Incorrect password"})
        }
      } else {
        res.status(500).send({message: "Entered wrong email"})
      }
    } catch (error) {
      console.log(error)
      res.status(500).send({error: error.message})
    }
  };
