const reactDescriptions = ['Fundamentals', 'Crucial', 'Core']

function getRandomInt(number) {
  return Math.floor(Math.random()*(number+1));
}
function Header() {
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header>
      <img src="src/assets/react.svg" alt="react logo"/>
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
        {description}
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}
export default App