
exports.up = function(knex) {
  return knex.schema.createTable('note', function (table) {
    table.increments('id');
    table.string('title');
    table.string('content').notNullable();
    table.boolean('is_starred').notNullable().defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('note');
};
