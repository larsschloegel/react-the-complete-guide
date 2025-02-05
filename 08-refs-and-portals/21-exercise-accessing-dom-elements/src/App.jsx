import { useRef } from "react";

function App() {
  const show = useRef();

  function handleClick() {
    show.current.click();
  }
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input data-testid="file-picker" type="file" accept="image/*" ref={show} />
        <button onClick={handleClick}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;