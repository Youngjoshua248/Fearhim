exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      username: "hypebeast_1",
      email: "hype1@example.com",
      hashed_password: "hashed_pw_1",
    },
    {
      id: 2,
      username: "cozycore",
      email: "cozy@example.com",
      hashed_password: "hashed_pw_2",
    },
    {
      id: 3,
      username: "retro_fits",
      email: "retro@example.com",
      hashed_password: "hashed_pw_3",
    },
    {
      id: 4,
      username: "noirwave",
      email: "noir@example.com",
      hashed_password: "hashed_pw_4",
    },
    {
      id: 5,
      username: "sleeklines",
      email: "sleek@example.com",
      hashed_password: "hashed_pw_5",
    },
  ]);
};
