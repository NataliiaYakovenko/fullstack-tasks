const cors = require('cors');
const express = require('express');
const router = require('./routes/index');
const { errorHandlers } = require('./middlewares/errorHandlers');

const app = express();

const corsOption = {
  origin: '*',
};
app.use(cors(corsOption));

app.use(express.json());
app.use('/api', router);
app.use(errorHandlers);

module.exports = app;
