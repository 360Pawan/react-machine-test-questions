import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let intervalId: number;
  const sampleText =
    "Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference.";
  const [text, setText] = useState("Click Generate text to generate text.");
  const [start, setStart] = useState(false);

  const typewriterEffect = () => {
    let index = 0;

    intervalId = setInterval(() => {
      if (index <= sampleText.length) {
        setText(sampleText.slice(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);
  };

  useEffect(() => {
    if (start) {
      typewriterEffect();
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [start]);

  const handleReset = () => {
    setStart(false);
    clearInterval(intervalId);
    setText("Click Generate text to generate text");
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="flex items-center gap-5">
        <button
          onClick={() => setStart(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={start}
          type="button"
        >
          Start generating
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          disabled={!start ? true : false}
          type="button"
        >
          Reset
        </button>
      </div>
      <div className="bg-slate-100 max-w-md p-8 mt-8 w-full rounded-md shadow-lg">
        {text}
      </div>
    </div>
  );
}

export default App;
