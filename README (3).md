
# 📘 EduBuddy AI Copilot

**EduBuddy** is an **AI-powered educational assistant** designed to enhance student learning through **interactive voice conversations, personalized explanations, and automated academic support**.  
It acts as a **teacher-to-student AI tutor**, capable of explaining complex topics, generating quizzes, evaluating performance, and offering real-time assistance using **speech and natural language understanding**.

---

## 🚀 Features

- 🎙️ **Speech-to-Text (STT)** — Converts students’ voice queries into text using advanced speech recognition APIs.  
- 🔊 **Text-to-Speech (TTS)** — Reads out AI-generated answers and explanations in natural-sounding voices.  
- 🧠 **AI-Powered Tutor** — Uses **OpenAI GPT models** to explain concepts interactively and in-depth for school-level learning.  
- 📚 **Contextual Q&A** — Answers follow-up questions based on the previous context for a seamless learning experience.  
- 🧩 **Auto-Generated Quizzes & Scoring** — Generates topic-wise quizzes and evaluates scores instantly.  
- 🗂️ **Student Dashboard** — Displays learning progress, quiz performance, and personalized study suggestions.  
- 💬 **Voice Assistant Integration** — Provides a hands-free learning experience through real-time voice communication.

---

## 🧑‍💻 Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React.js, Tailwind CSS, Framer Motion |
| **Backend** | Flask / FastAPI / Django (modular APIs for AI, quiz, and voice features) |
| **AI Integration** | OpenAI GPT API (LLM-based Q&A, content generation) |
| **Speech Processing** | Google Cloud Speech-to-Text, gTTS / ElevenLabs API for TTS |
| **Database** | MongoDB / Firebase (user data, quiz results, and progress tracking) |
| **Other Tools** | Axios, Web Speech API, JSON Web Tokens (JWT), Node.js utilities |

---

## 🧩 System Architecture

            ┌────────────────────────────┐
            │     User (Student)         │
            │   🎙️ Voice / Text Input     │
            └────────────┬───────────────┘
                         │
                         ▼
            ┌────────────────────────────┐
            │   Speech-to-Text Engine    │
            │  (Google Cloud / Whisper)  │
            └────────────┬───────────────┘
                         │
                         ▼
            ┌────────────────────────────┐
            │     EduBuddy Backend API   │
            │(Flask/FastAPI with GPT API)│
            └────────────┬───────────────┘
                         │
                         ▼
            ┌────────────────────────────┐
            │  GPT Model (OpenAI API)    │
            │  Generates Explanations,Q&A│
            └────────────┬───────────────┘
                         │
                         ▼
            ┌────────────────────────────┐
            │   Text-to-Speech Engine    │
            │  (gTTS / ElevenLabs / Web) │
            └────────────┬───────────────┘
                         │
                         ▼
            ┌────────────────────────────┐
            │ Student UI (React Frontend)│
            │🎧 Plays voice output,shows │
            │     quiz & study data      │
            └────────────────────────────┘



---

## 🧠 Core Modules

1. **Voice Assistant Module**
   - Integrates OpenAI API for live question answering.
   - Handles both STT (input) and TTS (output) flows.

2. **Quiz Generator**
   - Uses GPT-based content generation to create MCQs.
   - Automatically evaluates and displays scores.

3. **Student Profile & Tracking**
   - Stores user activity, performance data, and topic-wise progress.

4. **Interactive Learning**
   - Contextual understanding of previous chats.
   - Provides multi-turn, teacher-like tutoring.

---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/EduBuddy-AI-Copilot.git
cd EduBuddy-AI-Copilot

# 2. Install dependencies
npm install          # For frontend
pip install -r requirements.txt  # For backend

# 3. Add your API keys
# Create a .env file in both frontend and backend directories

OPENAI_API_KEY=your_openai_key_here
GOOGLE_SPEECH_KEY=your_google_key_here

# 4. Run the backend
python app.py

# 5. Run the frontend
npm start

EduBuddy-AI-Copilot/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app.py
│   ├── routes/
│   ├── models/
│   ├── quiz/
│   ├── ai_module/
│   ├── voice/
│   ├── requirements.txt
│   └── .env
│
└── README.md

🧩 Future Enhancements

🗣️ Multi-language voice support

🧭 Adaptive learning recommendations

📖 Integration with textbooks / PDF content summarization

🤖 Offline mode using Whisper + Local LLM

🧍 Avatar-based visual tutor (React + Three.js)