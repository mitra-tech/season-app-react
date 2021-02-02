import "./SeasonDisplay.css";
import React from "react";

const getSeason = (lat, month) => {
  if (2 < month && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};

const seasonConfig = {
  winter: { text: "burr it is cold!", iconName: "snowflake" },
  summer: { text: "let's hit the beach!", iconName: "sun" },
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;