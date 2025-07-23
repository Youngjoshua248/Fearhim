exports.seed = async function (knex) {
  await knex("outfit_items").del();
  await knex("outfit_items").insert([
    {
      outfit_id: 1,
      product_name: "Flannel Shirt",
      product_url: "https://store.com/flannel-shirt",
      image_url: "https://res.cloudinary.com/demo/image/upload/flannel.jpg",
      price: 49.99,
      vendor_name: "Urban Outfitters",
    },
    {
      outfit_id: 2,
      product_name: "Velour Pants",
      product_url: "https://store.com/velour-pants",
      image_url: "https://res.cloudinary.com/demo/image/upload/velour.jpg",
      price: 59.99,
      vendor_name: "Juicy Couture",
    },
    {
      outfit_id: 3,
      product_name: "Wide Hat",
      product_url: "https://store.com/wide-hat",
      image_url: "https://res.cloudinary.com/demo/image/upload/hat.jpg",
      price: 29.99,
      vendor_name: "Free People",
    },
    {
      outfit_id: 4,
      product_name: "Combat Boots",
      product_url: "https://store.com/combat-boots",
      image_url: "https://res.cloudinary.com/demo/image/upload/boots.jpg",
      price: 89.99,
      vendor_name: "Dr. Martens",
    },
    {
      outfit_id: 5,
      product_name: "Tech Jacket",
      product_url: "https://store.com/tech-jacket",
      image_url: "https://res.cloudinary.com/demo/image/upload/jacket.jpg",
      price: 129.99,
      vendor_name: "Nike",
    },
  ]);
};
