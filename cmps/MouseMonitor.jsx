const { useState, useEffect } = React;

export function MouseMonitor() {
  const [isOn, setIsOn] = useState(true);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isOn) {
        setPos({
          x: event.clientX,
          y: event.clientY,
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // cleanup function to remove the event listener
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isOn]); // re-run the effect when isOn changes

  const handlePauseClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="mouse-monitor">
      <h2>Mouse Position</h2>
      {isOn && <h2>x: {pos.x}, y: {pos.y}</h2>}
      <button onClick={handlePauseClick}>{isOn ? 'Pause' : 'Resume'}</button>
    </div>
  );
}
