// exports.up = function (knex) {
//   return knex.schema.alterTable("outfits", (table) => {
//     table.string("title");
//     // table.text("description"); // Already exists, so don't add again
//   });
// };

// exports.down = function (knex) {
//   return knex.schema.alterTable("outfits", (table) => {
//     table.dropColumn("title");
//     // table.dropColumn("description"); // Only drop if you want to remove it
//   });
// };

// exports.seed = async function (knex) {
//   await knex("outfits").del();
//   await knex("outfits").insert([
//     {
//       id: 1,
//       user_id: 1,
//       title: "Summer Grunge",
//       description: "Layered flannels with denim cutoffs",
//       niche: "grunge",
//     },
//     {
//       id: 2,
//       user_id: 2,
//       title: "Y2K Revival",
//       description: "Velour tracksuit and chunky sneakers",
//       niche: "y2k",
//     },
//     {
//       id: 3,
//       user_id: 3,
//       title: "Boho Dreams",
//       description: "Flowy dress and wide-brim hat",
//       niche: "boho",
//     },
//     {
//       id: 4,
//       user_id: 4,
//       title: "Monochrome Mood",
//       description: "All-black fitted look",
//       niche: "minimalist",
//     },
//     {
//       id: 5,
//       user_id: 5,
//       title: "Street Tech",
//       description: "Cargo pants and reflective jacket",
//       niche: "streetwear",
//     },
//   ]);
// };

exports.up = function (knex) {
  return knex.schema.createTable("outfits", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("style_board_id")
      .nullable()
      .references("id")
      .inTable("style_boards")
      .onDelete("SET NULL");
    table.string("niche").notNullable();
    table.string("image_url");
    table.string("title"); // optional
    table.text("description"); // optional
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("outfits");
};
