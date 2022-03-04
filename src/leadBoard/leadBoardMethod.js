const Table = require("./leadBoardModel");
const yargs = require ("yargs");
const { hideBin } = require ("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;


exports.addScore = async (scoreObj) => {
    try {
      await Table.sync();
      await Table.create(scoreObj);
    } catch (error) {
      console.log(error)
    }
  };