import React from "react";

const howWorkData = [
  "Introduce your projects to Buyers",
  "Be a part of the largest buyer sourcing platform for Residential, Commercial and Land projects",
  "Create your tremendous company profile and make it visible to buyers.",
  "Exhibit your brand new project development.",
  "Build trust by display your verified certificates and/or membership.",
  "Convert your profile into your own professional company website with just one click.",
  "Share your profile link in communication to external sales leads.",
  "Save your time for source buyers.",
];
const howWorkData2 = [
  "Join the largest sourcing platform for Real Estate projects in Bangladesh.",
  "Free access to explore detailed profile of developer company with accurate information.",
  "Visit project development of every developer.",
  "Connect directly with developer.",
  "Choose your required from large number of collection.",
  "Manage relationship with your existing and new developer.",
  "Automatically notified about development of developer network.",
];

const HowIsItWork = () => {
  return (
    <div>
      <div className="container">
        <h5>
          <b>How it works:</b>
        </h5>
        <div className="mb-5">
          <ul>
            {howWorkData.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <ul>
          {howWorkData2.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HowIsItWork;
