import "./App.css";
import React, { useState } from "react";
import { marked } from "marked";
import Docs from "./components/Docs/Docs";
import { useLocalStorage } from "./Hooks/useLocalStorage";

const App = () => {
  const [code, setcode] = useLocalStorage("code");
  const [compiledLocal, setCompiledLocal] = useLocalStorage("compiled");
  const [hide, sethide] = useState([true, false, false]);

  const openPreview = (num) => {
    if (num === 1) {
      sethide([true, false, false]);
    } else if (num === 2) {
      sethide([false, true, false]);
    } else {
      sethide([false, false, true]);
    }
  };

  const handleChange = (e) => {
    setcode(e.target.value);
    setCompiledLocal(marked.parse(e.target.value));
  };

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button
            onClick={() => openPreview(1)}
            className="btn" >
            MarkDown
          </button>
          <button
            onClick={() => openPreview(2)}
            className= "btn" >
            Preview
          </button>
          <button
            onClick={() => openPreview(3)}
            className= "btn">
            Docs
          </button>
        </div>
        {hide[2] ? (
          <Docs />
        ) : hide[0] ? (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        ) : (
          <div>
            <textarea value={compiledLocal} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
