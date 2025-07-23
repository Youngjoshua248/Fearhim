exports.seed = async function (knex) {
  await knex("tags").del();
  await knex("tags").insert([
    { id: 1, name: "grunge" },
    { id: 2, name: "minimalist" },
    { id: 3, name: "streetwear" },
    { id: 4, name: "y2k" },
    { id: 5, name: "boho" },
  ]);
};
