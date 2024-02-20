const {useState, useEffect} = React;

export function CountDown({ startFrom, onDone }) {
    const [count, setCount] = useState(startFrom);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prevCount)=>{
                if(prevCount==1) {
                    onDone();
                    clearInterval(intervalId);
                }
                return prevCount -  1;
            })
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [onDone]); // Start a new count-down whenever startFrom changes

    return (
        <div className="countdown">
            <h2>Countdown: {count}</h2>
        </div>
    );
}
