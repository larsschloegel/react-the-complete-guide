import Header from "./components/Header";
import { Meals } from "./components/Meals";
import { MealContextProvider } from "./store/meal-context";

function App() {


  return (
    <>
      <Header />
      <main>
        <MealContextProvider>
          <Meals />
        </MealContextProvider>
      </main>
    </>
  );
}

export default App;
