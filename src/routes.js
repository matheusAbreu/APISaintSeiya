const express = require('express');
//const myLog = require('debug')('api:routes');
const GodsController = require('./controllers/GodsController');
const WarriorTypesController = require('./controllers/WarriorTypesController');
const ArmorsController = require('./controllers/ArmorsController');

const routes = express.Router();

//Gods
routes.get('/gods', GodsController.index);
routes.post('/gods', GodsController.store);
routes.delete('/gods/:god', GodsController.remove);


//warriorsTypes
routes.get('/warriors_types', WarriorTypesController.index);
routes.delete('/warriors_types/:id', WarriorTypesController.remove);
routes.get('/gods/:god/warriors_types', WarriorTypesController.indexSelectedGod);
routes.post('/gods/:god/warriors_types', WarriorTypesController.store);
//routes.delete('/gods/:god/warriors_types', WarriorTypesController.removeSelectedGod);

//Armors
//routes.get('/armors', ArmorsController.index);
//routes.post('/warriors_types/:warriorTypeId/armor');

//home
routes.get('/', (request, response) => {
  return response.json({
    helloword: "API Saint Seiya! Em Construção..."
  });
});

module.exports = routes;
