import { useState } from 'react';

export default function App() {
    const [highlighted, setHighligted] = useState();

    function toggleStyle() {
        setHighligted(isHighligthed => !isHighligthed);
    }
    return (
        <div>
            <p style={{ color: highlighted ? 'red' : 'white' }}>Style me!</p>
            <button onClick={() => toggleStyle()}>Toggle style</button>
        </div>
    );
}
