const myLog = require('debug')('api:main');
const express = require('express');
const cors = require('cors');
const Routes = require('./routes');

require('./database');

const { 
    APP_PORT_EXPOSE,
  } = process.env;

//const PORT = 4000;
const app = express();

app.use(express.json());
app.use(cors('*'));
app.use(Routes);

app.listen(APP_PORT_EXPOSE, myLog(`running at ${APP_PORT_EXPOSE}`));
