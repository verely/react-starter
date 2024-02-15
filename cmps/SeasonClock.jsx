const { useState, useEffect } = React;

export function SeasonClock(props) {
  const { seasonClockData } = props;
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
      <p>{date.toLocaleTimeString()}</p> {/* Display the running clock */}
    </section>
  );
}
