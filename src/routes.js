const express = require('express');
//const myLog = require('debug')('api:routes');
const UserController = require('./controllers/GodsController');

const routes = express.Router();

routes.post('/gods', UserController.store);

routes.get('/', (request, response) => response.json({
  helloword: "API Saint Seiya! Em Construção..."}));

/*
function WriteInLog(msg) {
  return myLog(`${msg}, at: ${new Date().toISOString()}`);
}
routes.get('/', (request, response) => {
  let requestInStr = JSON.stringify(request.query);

  if (requestInStr === '{}') requestInStr = 'request made with unidentified author';

  WriteInLog(`request info: ${requestInStr}`);

  return response.send('API Saint Seiya!\n Em Construção...\n');
}); */

module.exports = routes;
