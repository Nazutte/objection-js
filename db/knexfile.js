// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const {knexSnakeCaseMappers} = require('objection');

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'objection_tutorial',
      user:     'postgres',
      password: 'password',
      port: 5433,
      host: 'localhost'
    },

    pool: {
      min: 2,
      max: 10
    },

    migrations: {
      tableName: 'knex_migrations'
    },

    seeds: {
      directory: './seeds'
    },

    ...knexSnakeCaseMappers,
  },
};
