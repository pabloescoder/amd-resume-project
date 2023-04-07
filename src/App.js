import React, { useState } from "react";
import Homepage from "./components/Homepage";
import BasicDetails from "./components/BasicDetails/BasicDetails";

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  const [basicData, setBasicData] = useState({
    firstName: "",
    lastName: "",
    profession: "",
    city: "",
    country: "",
    pincode: "",
    phone: "",
    email: "",
    github: "",
    linkedin: "",
    twitter: "",
  });

  const handleBasicDataChange = (event) => {
    setBasicData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  };

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
        <BasicDetails
          nextPage={incrementCurrentSection}
          basicData={basicData}
          onChange={handleBasicDataChange}
        />
      )}
    </div>
  );
}

export default App;
