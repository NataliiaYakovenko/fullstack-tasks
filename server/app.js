const cors = require('cors')
const express = require("express");
const router = require("./routes/index");
const { errorHandlers } = require("./middlewares/errorHandlers");

const app = express();

app.use(express.json());
app.use("/api", router);
app.use(errorHandlers);

const corsOption = {
  origin: "*",
};
app.use(cors(corsOption));

module.exports = app;
