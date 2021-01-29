const myLog = require('debug')('api:main');
const express = require('express');
const Routes = require('./routes');

require('./database');

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(Routes);

app.listen(PORT, myLog(`running at ${PORT}`));
