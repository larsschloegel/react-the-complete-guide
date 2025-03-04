import Header from "./components/Header";
import { Meals } from "./components/Meals";
import { CartContextProvider } from "./store/cart-context";
import { MealContextProvider } from "./store/meal-context";
import { UserProgressContextProvider } from "./store/user-progress-context";
import Cart from "./components/Cart";

function App() {

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <main>
          <MealContextProvider>
            <Meals/>
            <Cart/>
          </MealContextProvider>
        </main>
      </CartContextProvider>
    </UserProgressContextProvider>
  )
}

export default App;
