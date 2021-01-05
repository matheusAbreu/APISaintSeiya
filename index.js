const myLog = require('debug')('api:main');
const app = require('express')();
const { Sequelize } = require('sequelize');

const mySequelize = new Sequelize('postgres://user:postgres:5432/potgres');

const PORT = 4000;

async function connectionDatabase() {
    
try {
    await mySequelize.authenticate();
    myLog('Connection has been established successfully.');
  } catch (error) {
    myLog(`Unable to connect to the database: ${error}`);
  }
}

connectionDatabase();
app.use(async (request, response, next) => {
    
    myLog(request.query,`request at: ${new Date().toISOString()}`);
  return next();
});

app.get('/', (request, response) => response.send('API Saint Seiya!\n Em Construção...\n'));

app.listen(PORT, myLog(`running at ${PORT}`));
