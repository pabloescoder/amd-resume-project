import React, { useState } from "react";
import Homepage from "./components/Homepage";
import BasicDetails from "./components/BasicDetails/BasicDetails";

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  const incrementCurrentSection = () => {
    setCurrentSection((prevValue) => prevValue + 1);
  };

  const decrementCurrentSection = () => {
    setCurrentSection((prevValue) => prevValue + 1);
  };

  return (
    <div className="App">
      {currentSection === 0 && <Homepage nextPage={incrementCurrentSection} />}
      {currentSection === 1 && (
        <BasicDetails nextPage={incrementCurrentSection} />
      )}
    </div>
  );
}

export default App;
