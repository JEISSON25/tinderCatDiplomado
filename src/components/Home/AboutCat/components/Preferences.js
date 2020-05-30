import React from "react";

export const Preferences = () => (
  <div className="interest-container">
    <h3>Preferences</h3>
    <hr />
    <form className="form-preferences">
      <label for="female">Female</label>
      <input name="gender" type="radio" value="female" />
      <span className="divider"></span>
      <label for="male">Male</label>
      <input name="gender" type="radio" value="male" />
    </form>
  </div>
);
