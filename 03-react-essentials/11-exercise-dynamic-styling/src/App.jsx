import React from 'react';
import { useState } from 'react';

export default function App() {
  const [activeButton, setActiveButton] = useState(false);

  return (
    <div>
      <p className={activeButton ? '' : 'active'}>Style me!</p>
      <button onClick={() => setActiveButton(!activeButton)}>Toggle style</button>
    </div>
  );
}