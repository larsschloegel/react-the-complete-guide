import Header from "./components/Header";
import { Meals } from "./components/Meals";
import { CartContextProvider } from "./store/cart-context";
import { MealContextProvider } from "./store/meal-context";

function App() {


  return (
    <>
    <CartContextProvider>
      <Header />
      <main>
          <MealContextProvider>
            <Meals />
          </MealContextProvider>
      </main>
      </CartContextProvider>
    </>
  );
}

export default App;
