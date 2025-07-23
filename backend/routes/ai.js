// const express = require("express");
// const router = express.Router();
// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// router.post("/generate-outfit", async (req, res) => {
//   const { imageUrl, prompt } = req.body;

//   if (!imageUrl) {
//     return res.status(400).json({ error: "Image URL is required" });
//   }

//   try {
//     const finalPrompt = `Suggest an outfit based on this styleboard image: ${imageUrl}. ${
//       prompt || ""
//     }`;

//     const completion = await openai.createChatCompletion({
//       model: "gpt-4-vision-preview", // or replace with text model if needed
//       messages: [
//         {
//           role: "system",
//           content: "You are a fashion stylist helping users create outfits.",
//         },
//         {
//           role: "user",
//           content: finalPrompt,
//         },
//       ],
//       max_tokens: 500,
//     });

//     const result = completion.data.choices[0].message.content;
//     res.json({ outfit: result });
//   } catch (err) {
//     console.error("AI generation error:", err.response?.data || err.message);
//     res.status(500).json({ error: "Failed to generate outfit." });
//   }
// });

// module.exports = router;

//pt2
const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/generate-outfit", async (req, res) => {
  const { imageUrl, prompt } = req.body;

  if (!imageUrl) {
    return res.status(400).json({ error: "Image URL is required" });
  }

  try {
    const finalPrompt = `Suggest an outfit based on this styleboard image: ${imageUrl}. ${
      prompt || ""
    }`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "system",
          content: "You are a fashion stylist helping users create outfits.",
        },
        {
          role: "user",
          content: finalPrompt,
        },
      ],
      max_tokens: 500,
    });

    const result = completion.choices[0].message.content;
    res.json({ outfit: result });
  } catch (err) {
    console.error("AI outfit generation error:", err);
    res
      .status(500)
      .json({ error: "Something went wrong generating the outfit" });
  }
});

module.exports = router;
