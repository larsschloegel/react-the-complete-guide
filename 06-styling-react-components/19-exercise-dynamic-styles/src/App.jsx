import { useState } from 'react';

export default function App() {
  const [toggle, setToggle] = useState();

  function toggleStyle(){
    setToggle(old => !old);
  }
  let style = 'white';
  if (toggle) {
    style = 'red';
  } else {
    style = 'white';
  }
    return (
        <div>
            <p style={{color: style}}>Style me!</p>
            <button onClick={()=>toggleStyle()}>Toggle style</button>
        </div>
    );
}
