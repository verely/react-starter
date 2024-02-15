const { useState, useEffect } = React;

export function SeasonClock(props) {
  const [isDark, setIsDark] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleClick = () => {
    setIsDark(!isDark);
    //console.log("isToggled:" + isDark);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Clear the interval when the component unmounts
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const month = date.toLocaleString("default", { month: "long" });
  const day = date.toLocaleString("default", { weekday: "long" });
  const season = getSeason(date);

  return (
    <section
      className={`season-clock ${isDark ? "toggled" : ""}`}
      onClick={handleClick}
    >
      <h1>
        {month}({season})
      </h1>
      <img src={"./assets/img/seasons/"+season.toLowerCase()+".png"} alt="season" />
      <h3>{day}</h3>
      <p>{date.toLocaleTimeString()}</p> {/* Display the running clock */}
    </section>
  );
}

function getSeason(date) {
  const month = date.getMonth() + 1; // Adding 1 because getMonth() returns a zero-based index

  if (month >= 3 && month <= 5) {
    return "Spring";
  } else if (month >= 6 && month <= 8) {
    return "Summer";
  } else if (month >= 9 && month <= 11) {
    return "Autumn";
  } else {
    return "Winter";
  }
}
