/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  // Title column already exists in the outfits table creation migration
  // No need to add it again
  return Promise.resolve();
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  // Title column is part of the main table, don't drop it here
  return Promise.resolve();
};
