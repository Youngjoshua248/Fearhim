exports.up = function (knex) {
  return knex.schema.createTable("favourites", (table) => {
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("outfit_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("outfits")
      .onDelete("CASCADE");
    table.primary(["user_id", "outfit_id"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("favourites");
};
