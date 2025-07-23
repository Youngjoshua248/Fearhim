exports.seed = async function (knex) {
  await knex("outfits").del();
  await knex("outfits").insert([
    {
      id: 1,
      user_id: 1,
      title: "Summer Grunge",
      description: "Layered flannels with denim cutoffs",
      niche: "grunge",
    },
    {
      id: 2,
      user_id: 2,
      title: "Y2K Revival",
      description: "Velour tracksuit and chunky sneakers",
      niche: "y2k",
    },
    {
      id: 3,
      user_id: 3,
      title: "Boho Dreams",
      description: "Flowy dress and wide-brim hat",
      niche: "boho",
    },
    {
      id: 4,
      user_id: 4,
      title: "Monochrome Mood",
      description: "All-black fitted look",
      niche: "minimalist",
    },
    {
      id: 5,
      user_id: 5,
      title: "Street Tech",
      description: "Cargo pants and reflective jacket",
      niche: "streetwear",
    },
  ]);
};
