exports.seed = async function (knex) {
  await knex("user_tags").del();
  await knex("user_tags").insert([
    { user_id: 1, tag_id: 2 },
    { user_id: 2, tag_id: 4 },
    { user_id: 3, tag_id: 1 },
    { user_id: 4, tag_id: 5 },
    { user_id: 5, tag_id: 3 },
  ]);
};
