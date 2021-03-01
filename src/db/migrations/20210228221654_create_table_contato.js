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
    table.string('telefone').notNullable();
  });
};

/**
 *
 * @param {Knex} knex
 */
exports.down = function (knex) {
  knex.schema.dropSchema('contatos');
};
