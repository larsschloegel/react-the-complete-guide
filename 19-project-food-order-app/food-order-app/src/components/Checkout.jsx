import { useContext } from "react";
import Modal from "./Modal";
import { CartContext } from "../store/cart-context";
import { currencyFormatter } from "../util/formatting";
import Button from "./Button";
import { UserProgressContext } from "../store/user-progress-context";
import Input from "./Input";

export default function Checkout() {
    const cart = useContext(CartContext);
    const userProgress = useContext(UserProgressContext);

    const cartTotal = cart.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function handleClose() {
        userProgress.hideCheckout();
    }

    function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());

        

    }

    return (
        <Modal open={userProgress.progress === 'checkout'} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
                <Input label="Full name" type="text" id="full-name" />
                <Input label="E-mail Address" type="email" id="email" />
                <Input label="Street" type="text" id="street" />
                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code" />
                    <Input label="City" type="text" id="city" />
                </div>
                <p className="modal-actions">
                    <Button type="button" textOnly onClick={handleClose}>Close</Button>
                    <Button >Submit Order</Button>
                </p>
            </form>
        </Modal>
    );
}