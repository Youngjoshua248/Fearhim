exports.seed = async function (knex) {
  await knex("news_articles").del();
  await knex("news_articles").insert([
    {
      title: "Runway Recap: Summer 2025 Trends",
      content:
        "The summer 2025 runway trends are all about bold colors, oversized silhouettes, and statement accessories. From neon green to bubblegum pink, the runway was a playground for fashion lovers.",
      source: "FashionNews",
    },
    {
      title: "5 Ways to Style Oversized Jackets",
      content:
        "The summer 2025 runway trends are all about bold colors, oversized silhouettes, and statement accessories. From neon green to bubblegum pink, the runway was a playground for fashion lovers.",
      source: "StyleHub",
    },
    {
      title: "The Rise of AI in Fashion Design",
      content:
        "The summer 2025 runway trends are all about bold colors, oversized silhouettes, and statement accessories. From neon green to bubblegum pink, the runway was a playground for fashion lovers.",
      source: "TechWear Weekly",
    },
    {
      title: "Street Style Looks from Paris",
      content:
        "The summer 2025 runway trends are all about bold colors, oversized silhouettes, and statement accessories. From neon green to bubblegum pink, the runway was a playground for fashion lovers.",
      source: "UrbanMode",
    },
    {
      title: "Breaking: Vintage is the New Modern",
      content:
        "The summer 2025 runway trends are all about bold colors, oversized silhouettes, and statement accessories. From neon green to bubblegum pink, the runway was a playground for fashion lovers.",
      source: "Retrofit Daily",
    },
  ]);
};
