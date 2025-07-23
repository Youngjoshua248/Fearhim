exports.seed = async function (knex) {
  await knex("news_articles").del();
  await knex("news_articles").insert([
    {
      title: "Runway Recap: Summer 2025 Trends",
      url: "https://fashionnews.com/summer-2025-trends",
      content:
        "The summer 2025 runway trends are all about bold colors, oversized silhouettes, and statement accessories. From neon green to bubblegum pink, the runway was a playground for fashion lovers.",
      source: "FashionNews",
    },
    {
      title: "5 Ways to Style Oversized Jackets",
      url: "https://stylehub.com/oversized-jackets-guide",
      content:
        "The summer 2025 runway trends are all about bold colors, oversized silhouettes, and statement accessories. From neon green to bubblegum pink, the runway was a playground for fashion lovers.",
      source: "StyleHub",
    },
    {
      title: "The Rise of AI in Fashion Design",
      url: "https://techwearweekly.com/ai-in-fashion",
      content:
        "The summer 2025 runway trends are all about bold colors, oversized silhouettes, and statement accessories. From neon green to bubblegum pink, the runway was a playground for fashion lovers.",
      source: "TechWear Weekly",
    },
    {
      title: "Street Style Looks from Paris",
      url: "https://urbanmode.com/paris-street-style",
      content:
        "The summer 2025 runway trends are all about bold colors, oversized silhouettes, and statement accessories. From neon green to bubblegum pink, the runway was a playground for fashion lovers.",
      source: "UrbanMode",
    },
    {
      title: "Breaking: Vintage is the New Modern",
      url: "https://retrofitdaily.com/vintage-modern-merge",
      content:
        "The summer 2025 runway trends are all about bold colors, oversized silhouettes, and statement accessories. From neon green to bubblegum pink, the runway was a playground for fashion lovers.",
      source: "Retrofit Daily",
    },
  ]);
};
