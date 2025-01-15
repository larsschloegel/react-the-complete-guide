import { useState } from 'react'
import './App.css'

function App() {
  const [price, setprice] = useState('100');
    
    function handleClick(){
        setprice('75');
    }
    return (
        <div>
            <p data-testid="price">{price}$</p>
            <button onClick={() => handleClick()}>Apply Discount</button>
        </div>
    );
}

export default App
