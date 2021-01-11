const express = require('express');
const myLog = require('debug')('api:routes');

function WriteInLog(msg) {
  return myLog(`${msg}, at: ${new Date().toISOString()}`);
}

const routes = express.Router();

routes.get('/', (request, response) => {
  let requestInStr = JSON.stringify(request.query);

  if (requestInStr === '{}') requestInStr = 'request made with unidentified author';

  WriteInLog(`request info: ${requestInStr}`);

  return response.send('API Saint Seiya!\n Em Construção...\n');
});

module.exports = routes;