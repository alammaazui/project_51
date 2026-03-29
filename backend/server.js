const app = require("./app");
const sequelize = require("./config/db");

require("dotenv").config();

let port = process.env.PORT;

// database
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

// database

// creating server using express
app.listen(port, (err) => {
  if (err) {
    console.log(`error while starting server ${err.message}`);
  } else {
    console.log(`started at port ${port}`);
  }
});
