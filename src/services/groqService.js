import  Groq  from "groq/sdk";

const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY, // Will add this key in Step 3
});

export const getEducationalAnswer = async (userQuestion) => {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a helpful teacher. 
          - Answer in 2 concise lines. 
          - Then suggest 3 follow-up questions students might hesitate to ask.
          Format like this:
          "Answer line 1.
          Answer line 2.

          Related questions:
          1. Question one?
          2. Question two?
          3. Question three?"`
        },
        {
          role: "user",
          content: userQuestion,
        },
      ],
      model: "mixtral-8x7b-32768", // Groq's fastest model
    });
    return response.choices[0]?.message?.content || "Error: No response";
  } catch (error) {
    console.error("Groq API error:", error);
    return "Sorry, I couldn't process your question.";
  }
};