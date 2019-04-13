import mongoose from "mongoose";

import constants from "./constants";

// Get an error about the precondition
mongoose.Promise = global.Promise;

// debug mode on
mongoose.set("debug", true);

mongoose.connect(constants.DB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = () => console.log(` Error on DB Connection ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
