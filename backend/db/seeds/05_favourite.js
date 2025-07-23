exports.seed = async function (knex) {
  await knex("favourites").del();
  await knex("favourites").insert([
    { user_id: 1, outfit_id: 3 },
    { user_id: 2, outfit_id: 1 },
    { user_id: 3, outfit_id: 5 },
    { user_id: 4, outfit_id: 2 },
    { user_id: 5, outfit_id: 4 },
  ]);
};
