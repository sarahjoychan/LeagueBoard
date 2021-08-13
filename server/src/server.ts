require('dotenv').config();
import express from 'express';
import cors from 'cors';
import { sequelize } from "./Models/index";
const errorHandler = require('./middleware/error');
const router = require('./routes/router');

var app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.use(errorHandler);


(async () => {
  await sequelize.sync({ force: true });
})();

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});

module.exports = {
  server,
};