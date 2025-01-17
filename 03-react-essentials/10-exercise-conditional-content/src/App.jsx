import React, { useState } from 'react';

export default function App() {

  const [showDialog, setShowDialog] = useState(false)

    return (
      <div>
        {showDialog && (
          <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={() => setShowDialog(false)}>Proceed</button>
        </div>
        )}
      
        <button onClick={() => setShowDialog(true)}>Delete</button>
      </div>    
    );
}