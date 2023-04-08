import React from "react";
import "./GenerateResume.css";

const GenerateResume = (props) => {
  const {
    basicData,
    workData,
    educationData,
    technologiesData,
    certificationsData,
  } = props;

  const experienceContents = workData.map((object) => {
    return (
      <div className="experience-item" key={object.id}>
        <div className="experience-item-top">
          <div>{object.employer}</div>
          <div>{`${object.startDate} - ${object.endDate}`}</div>
        </div>
        <div className="experience-item-middle">
          <div>{object.jobTitle}</div>
          <div>{`${object.city}, ${object.country}`}</div>
        </div>
        <div className="experience-item-body">{object.jobDescription}</div>
      </div>
    );
  });

  const educationContents = educationData.map((object) => {
    return (
      <div className="education-item" key={object.id}>
        <div className="education-item-top">
          <div>{object.schoolName}</div>
          <div>{`${object.startDate} - ${object.endDate}`}</div>
        </div>
        <div className="education-item-middle">
          <div>{`${object.degree} (${object.fieldOfStudy})`}</div>
          <div>{`${object.schoolLocation}`}</div>
        </div>
        <div className="education-item-body">{object.eduDescription}</div>
      </div>
    );
  });

  const projectContents = technologiesData.map((object) => {
    return (
      <div className="project-item" key={object.id}>
        <div className="project-item-top">
          <div>{object.project}</div>
          <div>{object.technology}</div>
        </div>
        <div className="project-item-body">{object.additionalDetails}</div>
      </div>
    );
  });

  let certifications = "";
  for (let certificationObj of certificationsData) {
    certifications += certificationObj.certificateTitle + ", ";
  }
  certifications = certifications.replace(/,\s*$/, "");

  return (
    <>
      <div className="download-details">
        <h1>
          Your PDF has been generated! You can see a preview of the generated
          Resume below
        </h1>
        <button id="generate-resume-btn">Download</button>
      </div>
      <div className="generate-resume-container">
        <div className="main-resume">
          <div className="top">
            <h1>{`${basicData.firstName} ${basicData.lastName}`}</h1>
            <div className="links">
              <div className="links-left">{`${basicData.email} | ${basicData.phone} | ${basicData.city}, ${basicData.country}`}</div>
              <div className="links-right">
                {<a href={basicData.linkedin}>LinkedIn</a>}
                {<a href={basicData.github}>{basicData.github}</a>}
              </div>
            </div>
          </div>
          <div className="experience-section">
            <h2 className="heading">Experience</h2>
            {experienceContents}
          </div>
          <div className="education-section">
            <h2 className="heading">Education</h2>
            {educationContents}
          </div>
          <div className="other-section">
            <h2 className="heading">Projects and Certifications</h2>
            {projectContents}
            <div className="certifications-section">{`Certifications: ${certifications}`}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateResume;
