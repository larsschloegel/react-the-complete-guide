import { useContext } from "react"
import Modal from "./Modal"
import { CartContext } from "../store/cart-context"
import { currencyFormatter } from "../util/formatting";
import Button from "./Button";
import { UserProgressContext } from "../store/user-progress-context";

export default function Cart() {
    const cart = useContext(CartContext);
    const userProgress= useContext(UserProgressContext);

    const cartTotal = cart.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function handleCloseCart() {
        userProgress.hideCart();
    }
    return <Modal className="cart" open={userProgress.progress === 'cart'}>
        <h2>Your Cart</h2>
        <ul>
            {cart.items.map(item => <li key={item.id}>{item.name} - {item.quantity}</li>)}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly onClick={handleCloseCart}>Close</Button>
            <Button onClick={handleCloseCart}>Go to Checkout</Button>
        </p>
    </Modal>
}