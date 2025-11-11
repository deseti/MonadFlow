import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { dappsData, getCategories } from "@/lib/data/dapps";

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// System context about MonadFlow and dApps
const getSystemContext = () => {
  const categories = getCategories();
  
  return `You are MonadFlow AI Assistant, a helpful guide for the Monad blockchain ecosystem.

**Your Role:**
- Help users discover and learn about dApps on Monad testnet
- Answer questions about blockchain, DeFi, NFTs, and Web3
- Provide recommendations based on user interests
- Explain technical concepts in simple terms

**MonadFlow Platform:**
- 3D interactive explorer with ${dappsData.length}+ dApps
- Categories: ${categories.join(", ")}
- Features: 3D Network Graph, Smart Recommendations, Live Analytics

**Available dApps (Sample):**
${dappsData.slice(0, 20).map((d: any) => `- ${d.name}: ${d.description} (${d.categories.join(", ")})`).join("\n")}

**Guidelines:**
- Be friendly, concise, and helpful
- Use emojis occasionally to be engaging
- If asked about specific dApps, search from the list above
- If you don't know something, be honest
- Always encourage users to explore the 3D visualization

**Language:**
- Respond in the same language as the user (English or Indonesian)
- Keep responses under 200 words unless asked for details`;
};

export async function POST(req: NextRequest) {
  try {
    const { message, history = [] } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Build conversation history
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: getSystemContext() }],
        },
        {
          role: "model",
          parts: [{ text: "Hi! I'm MonadFlow AI Assistant. I can help you discover dApps, explain blockchain concepts, and navigate the Monad ecosystem. What would you like to know? 🚀" }],
        },
        ...history.map((msg: any) => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        })),
      ],
    });

    // Send message and get response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({
      response: text,
      success: true,
    });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process chat message" },
      { status: 500 }
    );
  }
}
