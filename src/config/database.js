const dotenv = require('dotenv');
dotenv.config({ silent: true })

const { 
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
  DB_DIALECT,
} = process.env;

module.exports = {
  dialect: DB_DIALECT,
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  define: {
    timestamps: true,
    underscored: true,
  },
};
