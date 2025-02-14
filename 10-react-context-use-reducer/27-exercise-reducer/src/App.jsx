import { useReducer } from "react";

export function counterReducer(state, action) {
  if (action.type === 'INCREMENT') {
    const newCounter = state.count + 1;
    return {
      ...state,
      count: newCounter,
    }
  }
  if (action.type === 'DECREMENT') {
    const newCounter = state.count - 1;
    return {
      ...state,
      count: newCounter,
    }
  }
  if (action.type === 'RESET') {
    const newCounter = 0;
    return {
      ...state,
      count: newCounter,
    }
  }

  return state;
}

function App() {
  const [counter, counterDispatch] = useReducer(counterReducer, {
    count: 0,
  });

  function handleIncrementCounter() {
    counterDispatch({
      type: 'INCREMENT'
    })
  }
  function handleDecrementCounter() {
    counterDispatch({
      type: 'DECREMENT'
    })
  }
  function handleResetCounter() {
    counterDispatch({
      type: 'RESET'
    })
  }
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={handleIncrementCounter}>Increment</button>
        <button onClick={handleDecrementCounter}>Decrement</button>
        <button onClick={handleResetCounter}>Reset</button>
      </p>
      <p id="counter">{counter.count}</p>
    </div>
  );
}

export default App;