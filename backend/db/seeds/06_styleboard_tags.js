exports.seed = async function (knex) {
  await knex("style_board_tags").del();
  await knex("style_board_tags").insert([
    { style_board_id: 1, tag_id: 3 },
    { style_board_id: 2, tag_id: 1 },
    { style_board_id: 3, tag_id: 2 },
    { style_board_id: 4, tag_id: 5 },
    { style_board_id: 5, tag_id: 4 },
  ]);
};
