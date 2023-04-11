import React from "react";
import "../CommonFormStyles.css";
import "./SavedResumes.css";

const SavedResumes = ({ handleCloseSavedResumes }) => {
  return (
    <div className="common-section saved-resumes-section">
      <div className="common-container saved-resumes-common-container">
        <div className="saved-resumes-heading">Saved Resumes</div>
        <div className="saved-resumes-top-text">
          Your saved resumes are shown here. If you click on any resume title,
          the website's form will be filled with the data you previously filled
          for that resume. You can then edit the data and save it as a new
          resume or update a previously saved resume.
        </div>
        <div className="saved-resumes-bottom">
          <button id="style-btn" onClick={handleCloseSavedResumes}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedResumes;
