import Meal from "./Meal";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

export function Meals() {

    const {data: meals, isLoading, error} = useHttp('http://localhost:3000/meals', requestConfig, []);

    if (isLoading){
        return <p className="center">Fetching meals...</p>;
    }

    if (error) {
        return <Error title='Failed to fetch meals' message={error}/>;
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