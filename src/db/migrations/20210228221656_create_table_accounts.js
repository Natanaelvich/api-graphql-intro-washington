const Knex = require('knex');

/**
 *
 * @param {Knex} knex
 */
exports.up = function (knex) {
  return knex.schema.createTable('accounts', (table) => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('email').notNullable().unique();
  });
};

/**
 *
 * @param {Knex} knex
 */
exports.down = function (knex) {
  knex.schema.dropSchema('accounts');
};
