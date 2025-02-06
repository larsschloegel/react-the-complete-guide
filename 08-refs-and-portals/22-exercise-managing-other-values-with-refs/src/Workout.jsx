import { useRef } from "react";

export default function Workout({ title, description, time, onComplete }) {
    const timer = useRef();

    function handleStartWorkout() {
        timer.current = setInterval(function () {
            time--;
            console.log(time);
            if (time === 0) {
                clearInterval(timer);
                console.log("Countdown finished");
            }
        }, 1000);
    }

    function handleStopWorkout() {
        clearInterval(timer.current);
        onComplete();
    }

    return (
        <article className="workout">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{time}</p>
            <p>
                <button onClick={handleStartWorkout}>Start</button>
                <button onClick={handleStopWorkout}>Stop</button>
            </p>
        </article>
    );
}
