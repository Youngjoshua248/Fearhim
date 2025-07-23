exports.up = function (knex) {
  return knex.schema.createTable("style_board_tags", (table) => {
    table
      .integer("style_board_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("style_boards")
      .onDelete("CASCADE");
    table
      .integer("tag_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("tags")
      .onDelete("CASCADE");
    table.primary(["styleboard_id", "tag_id"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("style_board_tags");
};
