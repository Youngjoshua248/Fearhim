require("dotenv").config();
const path = require("path");

const migrationsDirectory = path.join(__dirname, "db/migrations");
const seedsDirectory = path.join(__dirname, "db/seeds");

module.exports = {
  development: {
    client: "pg",
    connection: process.env.PG_CONNECTION_STRING || {
      host: "localhost",
      port: 5432,
      user: "joshuayoung",
      password: "3343",
      database: "fearhim",
    },
    migrations: {
      directory: migrationsDirectory,
    },
    seeds: {
      directory: seedsDirectory,
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
