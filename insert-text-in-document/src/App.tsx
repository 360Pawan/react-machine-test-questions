import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [documentText, setDocumentText] = useState("");
  const [highLightedText, setHighlightedText] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      const inputElement = e.currentTarget as HTMLTextAreaElement;
      const newText = inputElement.value;

      setDocumentText(`${documentText} ${newText}`);
      setText("");
      setHighlightedText(newText);
      setTimeout(() => setHighlightedText(""), 5000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md flex items-start justify-center flex-col gap-8">
        <textarea
          className="rounded-lg shadow-md focus:outline-none p-5"
          name="text"
          cols={50}
          rows={5}
          placeholder="Enter your text here"
          onKeyDown={handleKeyDown}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>Document</p>
        <div className="border-slate-00 p-5 shadow-md rounded-lg w-full">
          {documentText}
        </div>
      </div>
    </div>
  );
}

export default App;
