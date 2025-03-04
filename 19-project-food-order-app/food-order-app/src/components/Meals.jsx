import { MealContext } from "../store/meal-context";
import { use } from 'react';
import Meal from "./Meal";

export function Meals() {
    const { meals } = use(MealContext);

    return (
        <ul id="meals">
            {meals && meals.map((meal) => (
                    <li key={meal.id} className="meal-item">
                        <Meal meal={meal} />
                    </li>
                ))}
        </ul>
    );
}