exports.up = function (knex) {
  return knex.schema.createTable("user_tags", (table) => {
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("tag_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("tags")
      .onDelete("CASCADE");
    table.primary(["user_id", "tag_id"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user_tags");
};
