const express = require('express');
//const myLog = require('debug')('api:routes');
const GodsController = require('./controllers/GodsController');
const WarriorTypesController = require('./controllers/WarriorTypesController');

const routes = express.Router();

routes.get('/gods', GodsController.index);
routes.post('/gods', GodsController.store);

routes.get('/gods/:god/warriors_types', WarriorTypesController.index);
routes.post('/gods/:god/warriors_types', WarriorTypesController.store);

routes.get('/', (request, response) => {
  return response.json({
    helloword: "API Saint Seiya! Em Construção..."
  });
});

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
