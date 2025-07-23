//pt1
// const prisma = require("../db");

// exports.saveOutfit = async (req, res) => {
//   try {
//     const { top, bottom, shoes, accessory, styleBoardId, imageUrl } = req.body;

//     if (!top || !bottom || !shoes || !accessory || !styleBoardId) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     const outfit = await prisma.outfit.create({
//       data: {
//         user_id: req.user.id, // assuming JWT middleware attaches this
//         style_board_id: styleBoardId,
//         niche: "generated", // or pull from req.body if dynamic
//         image_url: imageUrl || null,
//         outfit_items: {
//           create: [
//             { product_name: top },
//             { product_name: bottom },
//             { product_name: shoes },
//             { product_name: accessory },
//           ],
//         },
//       },
//       include: { outfit_items: true },
//     });

//     res.status(201).json(outfit);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error saving outfit" });
//   }
// };

// exports.getOutfits = async (req, res) => {
//   try {
//     const outfits = await prisma.outfit.findMany({
//       where: { userId: req.user.id },
//       include: { styleboard: true },
//     });

//     res.json(outfits);
//   } catch (err) {
//     console.error("Error fetching outfits:", err);
//     res.status(500).json({ error: "Server error fetching outfits" });
//   }
// };

//pt2
const prisma = require("../db");

exports.saveOutfit = async (req, res) => {
  try {
    const { top, bottom, shoes, accessory, styleBoardId, imageUrl } = req.body;

    // Validate required fields
    if (!top || !bottom || !shoes || !accessory || !styleBoardId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create outfit with related outfit_items
    const outfit = await prisma.outfit.create({
      data: {
        user_id: req.user.id, // make sure JWT middleware sets this
        style_board_id: styleBoardId,
        niche: "generated", // static for now
        image_url: imageUrl || null,
        outfit_items: {
          create: [
            {
              product_name: top,
              product_url: "#",
              image_url: "#",
              price: 0,
              vendor_name: "AI",
            },
            {
              product_name: bottom,
              product_url: "#",
              image_url: "#",
              price: 0,
              vendor_name: "AI",
            },
            {
              product_name: shoes,
              product_url: "#",
              image_url: "#",
              price: 0,
              vendor_name: "AI",
            },
            {
              product_name: accessory,
              product_url: "#",
              image_url: "#",
              price: 0,
              vendor_name: "AI",
            },
          ],
        },
      },
      include: { outfit_items: true },
    });

    res.status(201).json(outfit);
  } catch (err) {
    console.error(" Error saving outfit:");
    console.error("Message:", err.message);
    console.error("Stack:", err.stack);

    res.status(500).json({ error: "Failed to save outfit." });
  }
};

exports.getOutfits = async (req, res) => {
  try {
    const outfits = await prisma.outfit.findMany({
      where: { user_id: req.user.id },
      include: {
        styleboard: true,
        outfit_items: true,
      },
    });

    res.json(outfits);
  } catch (err) {
    console.error(" Error fetching outfits:", err);
    res.status(500).json({ error: "Server error fetching outfits" });
  }
};
