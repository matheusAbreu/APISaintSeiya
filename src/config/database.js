module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'postgresapi',
  //url: 'postgres://bgnqbrvdljmcmr:eac3595b9595c853b4b94a7c64ad8c4a0815aec60441208d93faf82b3134c1b4@ec2-3-232-92-90.compute-1.amazonaws.com:5432/dfaah20rlucccm',
  define: {
    timestamps: true,
    underscored: true,
  },
  /*
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  port: 5432,
  url: "",
  password: 'postgres',
  database: 'postgresapi',

  dialect: 'postgres',
  host: 'ec2-3-232-92-90.compute-1.amazonaws.com',
  username: 'bgnqbrvdljmcmr',
  port: 5432,
  url: 'postgres://bgnqbrvdljmcmr:eac3595b9595c853b4b94a7c64ad8c4a0815aec60441208d93faf82b3134c1b4@ec2-3-232-92-90.compute-1.amazonaws.com:5432/dfaah20rlucccm',
  password: 'eac3595b9595c853b4b94a7c64ad8c4a0815aec60441208d93faf82b3134c1b4',
  database: 'dfaah20rlucccm',
  define: {
    timestamps: true,
    underscored: true,
  }, */
};