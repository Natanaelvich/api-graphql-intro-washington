const Knex = require('knex');

/**
 *
 * @param {Knex} knex
 */
exports.up = function (knex) {
  return knex.schema.createTable('contatos', (table) => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('email').notNullable().unique();
    table.integer('user_id').unsigned();

    table.foreign('user_id').references('id').inTable('users');
  });
};

/**
 *
 * @param {Knex} knex
 */
exports.down = function (knex) {
  knex.schema.dropSchema('contatos');
};
