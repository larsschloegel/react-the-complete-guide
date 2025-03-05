import Meal from "./Meal";
import useHttp from "../hooks/useHttp";

const requestConfig = {};

export function Meals() {

    const {data: meals, isLoading, error} = useHttp('http://localhost:3000/meals', requestConfig, []);

    if (isLoading){
        return <p>Fetching meals...</p>;
    }

    return (
        <ul id="meals">
            {meals.map((meal) => (
                    <li key={meal.id} className="meal-item">
                        <Meal meal={meal} />
                    </li>
                ))}
        </ul>
    );
}