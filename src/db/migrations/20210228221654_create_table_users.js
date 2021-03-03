const Knex = require('knex');

/**
 *
 * @param {Knex} knex
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('login').notNullable();
    table.string('bio').notNullable();
  });
};

/**
 *
 * @param {Knex} knex
 */
exports.down = function (knex) {
  knex.schema.dropSchema('users');
};
