const { 
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
  DB_SSL,
  DB_DIALECT,
  DB_STORAGE
} = process.env;

module.exports = {
  database: DB_DATABASE,
  host: DB_HOST,
  password: DB_PASSWORD,
  port: DB_PORT,
  username: DB_USER,
  ssl: DB_SSL,
  dialect: DB_DIALECT,
  storage: DB_STORAGE
};
