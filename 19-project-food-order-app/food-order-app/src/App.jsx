import Header from "./components/Header";
import { Meals } from "./components/Meals";
import { CartContextProvider } from "./store/cart-context";
import { UserProgressContextProvider } from "./store/user-progress-context";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <main>
            <Meals/>
            <Cart/>
            <Checkout/>
        </main>
      </CartContextProvider>
    </UserProgressContextProvider>
  )
}

export default App;
