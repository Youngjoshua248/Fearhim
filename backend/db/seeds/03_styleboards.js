exports.seed = async function (knex) {
  await knex("style_boards").del();
  await knex("style_boards").insert([
    {
      id: 1,
      user_id: 1,
      image_url: "https://res.cloudinary.com/demo/image/upload/sample1.jpg",
    },
    {
      id: 2,
      user_id: 2,
      image_url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
    },
    {
      id: 3,
      user_id: 3,
      image_url: "https://res.cloudinary.com/demo/image/upload/sample3.jpg",
    },
    {
      id: 4,
      user_id: 4,
      image_url: "https://res.cloudinary.com/demo/image/upload/sample4.jpg",
    },
    {
      id: 5,
      user_id: 5,
      image_url: "https://res.cloudinary.com/demo/image/upload/sample5.jpg",
    },
  ]);
};
