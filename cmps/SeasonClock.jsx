//import React, { useState } from 'react';
const { useState } = React;

export function SeasonClock(props) {
  const { seasonClockData } = props;
  const [isDark, setIsDark] = useState(false);
  //const [date, setDate] = useState(new Date())

  const handleClick = () => {
    setIsDark(!isDark);
    //console.log("isToggled:" + isDark);
  };

  return (
    <section
      className={`season-clock ${isDark ? "toggled" : ""}`}
      onClick={handleClick}
    >
      <h1>
        {seasonClockData.month}({seasonClockData.season})
      </h1>
      <img src="" alt="season" />
      <h3>{seasonClockData.day}</h3>
    </section>
  );
}
