import React, { useEffect, useContext } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import AuthContext from "../../context/AuthProvider";
import "../CommonFormStyles.css";
import "./SavedResumes.css";

const SavedResumes = ({
  isLoggedIn,
  savedResumeTitles,
  setSavedResumeTitles,
  handleCloseSavedResumes,
}) => {
  const { auth } = useContext(AuthContext);
  const axios = useAxiosPrivate();

  useEffect(() => {
    if (isLoggedIn && auth?.accessToken && savedResumeTitles?.length === 0) {
      const getSavedResumeTitles = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_HOST}/resume/all-titles`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + auth.accessToken,
              },
            }
          );

          setSavedResumeTitles(response.data);
        } catch (err) {
          console.log(err);
        }
      };
      getSavedResumeTitles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, savedResumeTitles]);

  let savedResumeElements = savedResumeTitles.map((resumeObj) => (
    <section
      key={resumeObj._id}
      className="resume-element"
      onClick={() => console.log(`Clicked ${resumeObj.resumeTitle}`)}
    >
      {resumeObj.resumeTitle}
    </section>
  ));

  let noResumesFound = (
    <section className="resume-element">
      {"No saved resumes found in your account :("}
    </section>
  );

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
        <div className="main-content">
          {savedResumeElements?.length ? savedResumeElements : noResumesFound}
        </div>
        <div className="saved-resumes-bottom">
          <button
            className="no-left-margin"
            id="style-btn"
            onClick={() => setSavedResumeTitles([])}
          >
            Refresh Data
          </button>
          <button
            id="style-btn"
            className="no-left-margin-mobile"
            onClick={handleCloseSavedResumes}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedResumes;
