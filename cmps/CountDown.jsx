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

    // useEffect(() => {
    //     if (count === 0) {
    //         onDone();

    //     }
    // }, [count, onDone]); // Call onDone when count reaches 0

    return (
        <div className="countdown">
            <h2>Countdown: {count}</h2>
        </div>
    );
}

// export function CountDown({ startFrom, onDone }) {
//     const [timeLeft, setTimeLeft] = useState(startFrom);

//     useEffect(() => {
//       // Set up the countdown interval
//       const intervalId = setInterval(() => {
//         setTimeLeft((prevTimeLeft) => {
//           if (prevTimeLeft <=  1) {
//             // Clear the interval and call the onDone function when the countdown ends
//             clearInterval(intervalId);
//             onDone();
//             return  0;
//           }
//           return prevTimeLeft -  1;
//         });
//       },  1000); // Decrement every second

//       // Clean up the interval on component unmount
//       return () => clearInterval(intervalId);
//     }, [startFrom, onDone]); // Dependency array ensures the effect runs only when startFrom or onDone changes

//     return (
//       <div>
//         <p>Time left: {timeLeft} seconds</p>
//       </div>
//     );
//   }

// export function CountDown({startFrom, onDone}) {
//     let [count, setCount] = useState(startFrom)

//     let intervalId; // Define intervalId in the outer scope

//     useEffect(() => {
//         intervalId = setInterval(() => {
//             console.log(`current value of count is: ${count}`);
//             setCount(prevCount => prevCount - 1); // Decrement count by 1
//         }, 1000);

//         return () => {
//             console.log('clean timer')
//             clearInterval(intervalId); // Clear the interval when the component unmounts
//         };
//     }, []); // Empty dependency array ensures the effect runs only once when the component mounts

//     useEffect(() => {
//         if (count === 0) {
//             onDone();
//             clearInterval(intervalId); // This will not work because intervalId is not accessible here
//             console.log('clean timer on Done')
//         }
//     }, [count, onDone]);

//     return (
//         <div className="outer-box">
//             <div className="inner-box">{count}</div>
//         </div>
//     );
// }
