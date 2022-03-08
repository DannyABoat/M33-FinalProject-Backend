const yargs = require ("yargs");
const {hideBin} = require ("yargs/helpers");
const { listUsers, addUser, updateUser, deleteUser } = require("./User/userMethod");
const { addScore } = require("./leadBoard/leadBoardMethod");
const argv = yargs(hideBin(process.argv)).argv;


const express = require("express");
const cors = require("cors");
const userRouter = require("./User/userRoutes");
const boardRouter = require("./leadBoard/leadBoardRoutes");
const port = 5001;

const app = express();


app.use(express.json());
app.use(cors({ origin: "https://m33-final-project.herokuapp.com" }));

app.use(userRouter);
app.use(boardRouter);

// const App = async() =>{
//     if(argv.add){
//         const userObj = {
//             firstName: argv.firstName,
//             lastName: argv.lastName,
//             username: argv.username,
//             email: argv.email,
//             password: argv.password
//         }
//         await addUser(userObj)
//     } else if (argv.list){
//         await listUsers();
//     } else if (argv.update){
//         await updateUser(argv);
//     } else if (argv.deleteOne){
//         await deleteUser(argv);
//     } else {
//         console.log("Wrong query")
//     }
// };

// const Table = async() =>{
//     if(argv.addTable){
//         const scoreObj = {
//             score: argv.score
//         }
//         await addScore(scoreObj)
//     } else {
//         console.log("Invalid")
//     }
// };


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

App()
// Table()
