import "./styles.css";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("loading....");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAlN1zYRZJ4L5OWGEEiqPRaRVP383S9qiQ",
      method: "post",
      data: {
        contents: [
          {
            parts: [{ text: question }],
          },
        ],
      },
    });
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }

  return (
    <div className="container">
      <h1>Chat AI</h1>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        cols="30"
        rows="10"
        placeholder="Ask Anything to me...."
        className="custom-textbox"
      ></textarea>

      <button onClick={generateAnswer}>Generate Answer</button>
      <p>{answer}</p>
    </div>
  );
}
