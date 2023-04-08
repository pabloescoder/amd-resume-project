import React, { useState } from "react";
import Homepage from "./components/Homepage";
import BasicDetails from "./components/BasicDetails/BasicDetails";
import WorkHistory from "./components/WorkHistory/WorkHistory";

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

  const [workData, setWorkData] = useState([
    {
      id: 1,
      jobTitle: "",
      employer: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
    },
  ]);

  console.log(workData);

  const handleAddWorkSection = (id) => {
    setWorkData((prevData) => {
      return [
        ...prevData,
        {
          id: id,
          jobTitle: "",
          employer: "",
          city: "",
          country: "",
          startDate: "",
          endDate: "",
          jobDescription: "",
        },
      ];
    });
  };

  const handleRemoveLastWorkSection = (id) => {
    setWorkData((prevData) => {
      return prevData.filter((object) => object.id !== id);
    });
  };

  const handleWorkDataChange = (event, id) => {
    setWorkData((prevData) => {
      return prevData.map((object) =>
        object.id === id
          ? { ...object, [event.target.name]: event.target.value }
          : object
      );
    });
  };

  const handleWorkEditorChange = (event, id, name, value) => {
    setWorkData((prevData) => {
      return prevData.map((object) =>
        object.id === id ? { ...object, [name]: value } : object
      );
    });
  };

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
    setCurrentSection((prevValue) => prevValue - 1);
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
      {currentSection === 2 && (
        <WorkHistory
          nextPage={incrementCurrentSection}
          prevPage={decrementCurrentSection}
          workData={workData}
          handleAddSection={handleAddWorkSection}
          handleRemoveLastSection={handleRemoveLastWorkSection}
          onChange={handleWorkDataChange}
          handleEditorChange={handleWorkEditorChange}
        />
      )}
    </div>
  );
}

export default App;
