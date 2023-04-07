import React from "react";
import "../CommonFormStyles.css";
import "./BasicDetails.css";
import "../NavigationArrows";
import NavigationArrows from "../NavigationArrows";

const BasicDetails = (props) => {
  return (
    <div className="basic-details-section">
      <div className="basic-details-container">
        <div className="form-container">
          <h2>Let's start with some basic details about you</h2>
          <form>
            <div className="form-section">
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="First Name"
                  name="first-name"
                  id="first-name"
                  required
                />
                <label htmlFor="first-name" className="form_label">
                  First Name
                </label>
              </div>
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="Last Name"
                  name="last-name"
                  id="last-name"
                  required
                />
                <label htmlFor="last-name" className="form_label">
                  Last Name
                </label>
              </div>
            </div>

            <div className="form-section three-in-a-row">
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="Profession"
                  name="profession"
                  id="profession"
                  required
                />
                <label htmlFor="profession" className="form_label">
                  Profession
                </label>
              </div>
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="City"
                  name="city"
                  id="city"
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
                  placeholder="Pincode/Zip"
                  name="pincode"
                  id="pincode"
                  required
                />
                <label htmlFor="pincode" className="form_label">
                  Pincode/Zip
                </label>
              </div>
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="Phone No."
                  name="phone"
                  id="phone"
                  required
                />
                <label htmlFor="phone" className="form_label">
                  Phone No.
                </label>
              </div>
            </div>

            <div className="form-section">
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="Email"
                  name="email"
                  id="email"
                  required
                />
                <label htmlFor="email" className="form_label">
                  Email
                </label>
              </div>
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="Github (Optional)"
                  name="github"
                  id="github"
                />
                <label htmlFor="github" className="form_label">
                  Github (Optional)
                </label>
              </div>
            </div>

            <div className="form-section">
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="LinkedIn (Optional)"
                  name="linkedin"
                  id="linkedin"
                />
                <label htmlFor="linkedin" className="form_label">
                  LinkedIn (Optional)
                </label>
              </div>
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="Twitter (Optional)"
                  name="twitter"
                  id="twitter"
                />
                <label htmlFor="twitter" className="form_label">
                  Twitter (Optional)
                </label>
              </div>
            </div>
          </form>
        </div>
        <NavigationArrows nextPage={props.nextPage} />
      </div>
    </div>
  );
};

export default BasicDetails;
