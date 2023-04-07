import React, { useState } from "react";
import "../CommonFormStyles.css";
import { EditorState } from "draft-js";
import RichTextEditor from "../RichTextEditor";

const WorkSection = (props) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  return (
    <section>
      <div className="form-section">
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="Job Title"
            name="jobTitle"
            id="jobTitle"
            // value={props.basicData.firstname}
            // onChange={(e) => props.onChange(e)}
            required
          />
          <label htmlFor="jobTitle" className="form_label">
            Job Title
          </label>
        </div>
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="Employer"
            name="employer"
            id="employer"
            // value={props.basicData.lastName}
            // onChange={(e) => props.onChange(e)}
            required
          />
          <label htmlFor="employer" className="form_label">
            Employer
          </label>
        </div>
      </div>

      <div className="form-section">
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="City"
            name="city"
            id="city"
            // value={props.basicData.firstname}
            // onChange={(e) => props.onChange(e)}
            required
          />
          <label htmlFor="city" className="form_label">
            City
          </label>
        </div>
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="Country"
            name="country"
            id="country"
            // value={props.basicData.lastName}
            // onChange={(e) => props.onChange(e)}
            required
          />
          <label htmlFor="country" className="form_label">
            Country
          </label>
        </div>
      </div>

      <div className="form-section">
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="Start Date"
            name="startDate"
            id="startDate"
            // value={props.basicData.firstname}
            // onChange={(e) => props.onChange(e)}
            required
          />
          <label htmlFor="startDate" className="form_label">
            Start Date
          </label>
        </div>
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="End Date"
            name="endDate"
            id="endDate"
            // value={props.basicData.lastName}
            // onChange={(e) => props.onChange(e)}
            required
          />
          <label htmlFor="endDate" className="form_label">
            End Date
          </label>
        </div>
      </div>
      <RichTextEditor editorState={editorState} onChange={setEditorState} />
    </section>
  );
};

export default WorkSection;
