import React from "react";
import { Interest } from "./components/Interests";
import { Preferences } from "./components/PreferencesAges";
import { PreferencesAges } from "./components/Preferences";

export const AboutCat = () => {
  return (
    <div className="about-cat">
      <Preferences />
      <PreferencesAges />
      <Interest />
    </div>
  );
};
