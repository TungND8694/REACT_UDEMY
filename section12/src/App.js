import React, { useState, useCallback } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App(props) {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("runningggg");

  const setShowParagraphHander = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandlder = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />

      <Button onClick={allowToggleHandlder}>Allow toggle</Button>
      <Button onClick={setShowParagraphHander}>show paragraph</Button>
    </div>
  );
}

export default App;
