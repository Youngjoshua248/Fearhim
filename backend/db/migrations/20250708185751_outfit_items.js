exports.up = function (knex) {
  return knex.schema.createTable("outfit_items", (table) => {
    table.increments("id").primary();
    table
      .integer("outfit_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("outfits")
      .onDelete("CASCADE");
    table.string("product_name").notNullable();
    table.string("product_url").notNullable();
    table.string("image_url").notNullable();
    table.float("price").notNullable();
    table.string("vendor_name").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("outfit_items");
};
