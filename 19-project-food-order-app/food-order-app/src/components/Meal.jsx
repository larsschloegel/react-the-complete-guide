import { currencyFormatter } from "../util/formatting";
import Button from "./Button";

export default function Meal({ meal: { id, description, image, name, price } }) {
    return (
        <article>
            <img src={`http://localhost:3000/${image}`} alt={name} ></img>
            <div>
                <h3>{name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(price)}</p>
                <p className="meal-item-description">{description}</p>
            </div>
            <p className="meal-item-actions">
                <Button>Add to cart</Button>
            </p>
        </article>
    )
}