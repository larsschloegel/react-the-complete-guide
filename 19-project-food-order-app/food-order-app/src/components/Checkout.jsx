import { useContext, useActionState } from "react";
import Modal from "./Modal";
import { CartContext } from "../store/cart-context";
import { currencyFormatter } from "../util/formatting";
import Button from "./Button";
import { UserProgressContext } from "../store/user-progress-context";
import Input from "./Input";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

export default function Checkout() {
    const cart = useContext(CartContext);
    const userProgress = useContext(UserProgressContext);

    const { data, error, sendRequest, clearData } = useHttp('http://localhost:3000/orders', requestConfig)

    const cartTotal = cart.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function handleClose() {
        userProgress.hideCheckout();
    }

    function handleFinish() {
        userProgress.hideCheckout();
        cart.clearCart();
        clearData();
    }

    async function checkoutAction(prevState, fd) {
        const customerData = Object.fromEntries(fd.entries());

        await sendRequest(JSON.stringify({
            order: {
                items: cart.items,
                customer: customerData
            },
        }));
    }

    const [formState, formAction, pending] = useActionState(checkoutAction, null);

    let actions = (
        <>
            <Button type="button" textOnly onClick={handleClose}>Close</Button>
            <Button >Submit Order</Button>
        </>
    );

    if (pending) {
        actions = <span>Sending order data...</span>
    }

    if (data && !error) {
        return <Modal open={userProgress.progress === 'checkout'} onClose={handleFinish}>
            <h2>Success!</h2>
            <p>Your order was submitted successfully.</p>
            <p>We will get back to you with more details via email within the next few minutes.</p>
            <p className="modal-actions">
                <Button onClick={handleFinish}>Okay</Button>
            </p>
        </Modal>
    }

    return (
        <Modal open={userProgress.progress === 'checkout'} onClose={handleClose}>
            <form action={formAction}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
                <Input label="Full name" type="text" id="name" />
                <Input label="E-mail Address" type="email" id="email" />
                <Input label="Street" type="text" id="street" />
                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code" />
                    <Input label="City" type="text" id="city" />
                </div>
                {error && <Error title="Failed to submit order" message={error} />}
                <p className="modal-actions">
                    {actions}
                </p>
            </form>
        </Modal>
    );
}