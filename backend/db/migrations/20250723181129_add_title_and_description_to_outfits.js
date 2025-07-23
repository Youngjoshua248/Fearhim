/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("outfits", (table) => {
    table.string("title");
    // table.text("description"); // Already exists, so don't add again
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("outfits", (table) => {
    table.dropColumn("title");
    // table.dropColumn("description"); // Only drop if you want to remove it
  });
};
