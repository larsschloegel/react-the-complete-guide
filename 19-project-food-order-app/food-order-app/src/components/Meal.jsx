import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import { currencyFormatter } from "../util/formatting";
import Button from "./Button";

export default function Meal({ meal }) {
    const { id, description, image, name, price } = meal;
    const cart = useContext(CartContext);

    function handleAddMealToCart() {
        cart.addItem(meal);
    }
    return (
        <article>
            <img src={`http://localhost:3000/${image}`} alt={name} ></img>
            <div>
                <h3>{name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(price)}</p>
                <p className="meal-item-description">{description}</p>
            </div>
            <p className="meal-item-actions">
                <Button onClick={handleAddMealToCart}>Add to cart</Button>
            </p>
        </article>
    )
}