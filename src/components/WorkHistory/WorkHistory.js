import React, { useState } from "react";
import WorkSection from "./WorkSection";
import NavigationArrows from "../NavigationArrows";
import "../CommonFormStyles.css";

const WorkHistory = (props) => {
  const [numOfSections, setNumOfSections] = useState([{ id: 1 }]);

  const workSectionElements = numOfSections.map((object) => (
    <WorkSection className="work-section" key={object.id} id={object.id} />
  ));

  const addSection = () => {
    const lastSectionId = numOfSections[numOfSections.length - 1].id;
    setNumOfSections((prevValue) => {
      return [...prevValue, { id: lastSectionId + 1 }];
    });
  };

  const deleteLastSection = () => {
    const lastSectionId = numOfSections[numOfSections.length - 1].id;
    if (lastSectionId === 1) {
      return;
    }
    setNumOfSections((prevValue) => {
      return prevValue.filter((object) => object.id !== lastSectionId);
    });
  };

  const workHistoryContainerStyles = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div className="common-section">
      <div className="common-container" style={workHistoryContainerStyles}>
        <div className="form-container">
          <h2>Work History</h2>
          <form>{workSectionElements}</form>
        </div>
        <div className="add-and-delete-buttons">
          <button type="add-new-section" onClick={addSection}>
            Add a new section
          </button>
          <button type="add-new-section" onClick={deleteLastSection}>
            Delete the last section
          </button>
        </div>
        <NavigationArrows nextPage={props.nextPage} prevPage={props.prevPage} />
      </div>
    </div>
  );
};

export default WorkHistory;
