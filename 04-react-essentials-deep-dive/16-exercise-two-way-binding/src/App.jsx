import React, { useState } from 'react';

import Review from './Review';

function App() {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea onChange={e => setFeedback(e.target.value)} value={feedback}/>
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" onChange={e => setName(e.target.value)} value={name} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>
        <Review feedback={feedback} student={name}/>
        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;