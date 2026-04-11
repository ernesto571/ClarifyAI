import { sql } from "../config/db.js";
import { geminiModel } from "../config/gemini.config.js";
import { buildPrompt, extractText } from "../lib/Analyze.lib.js";
import { uploadBufferToCloudinary } from "../config/cloudinary.config.js";

export const analyzeDoc = async (req, res) => {
  try {
    const { text, tone } = req.body;
    if (!text && !req.file) {
      return res.status(400).json({ error: "Provide text or a file." });
    }

    let content;
    let cloudinaryUrl = null;

    if (req.file) {
      const { originalname, mimetype, buffer } = req.file;
      console.log("📁 File received:", { originalname, mimetype, size: buffer.length });

      console.log("⏳ Starting text extraction...");
      content = await extractText(buffer, mimetype); // ✅ no const — assigns to outer content
      console.log("📄 Text extracted, length:", content.length);

      console.log("⏳ Starting Cloudinary upload...");
      const cloudinaryResult = await uploadBufferToCloudinary(buffer, originalname);
      cloudinaryUrl = cloudinaryResult.secure_url;
      console.log("☁️ Cloudinary upload done:", cloudinaryUrl);
    } 

    if( text ) {
      content = text;
    }

    console.log("🤖 Sending to Gemini...");
    const prompt = buildPrompt(content, tone);
    const result = await geminiModel.generateContent(prompt);
    const rawText = result.response.text();
    console.log("📥 Gemini raw response:", rawText);

    const cleaned = rawText.replace(/```json|```/g, "").trim();
    let analysis;
    try {
      analysis = JSON.parse(cleaned);
    } catch (parseError) {
      console.error("❌ JSON parse failed:", parseError.message);
      return res.status(500).json({ message: "AI returned invalid response, please try again" });
    }

    const required = ["contract_type", "contract_type_description", "ai_summary", "key_points", "red_flags", "sections", "meta"];
    for (const field of required) {
      if (analysis[field] === undefined) {
        return res.status(500).json({ message: `AI response missing field: ${field}` });
      }
    }

    return res.status(200).json({ analysis, cloudinaryUrl }); // ✅ was missing
  } catch (error) {
    console.error("Analyze error:", {
      message: error.message,
      stack: error.stack,
    });
    return res.status(500).json({ message: error.message || "Analysis failed" });
  }
};