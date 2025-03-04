import { useEffect, useState } from "react";
import { createContext } from "react";

export const MealContext = createContext({
    meals: null,
});

export function MealContextProvider({ children}) {
    const [meals, setMeals] = useState();

    useEffect(() => {
        async function loadMeals() {
            const response = await fetch('http://localhost:3000/meals');
            const meals = await response.json();
            setMeals(meals);
        }
        loadMeals();
    }, []);


    const contextValue = {
        meals: meals,
    };

    return <MealContext value={contextValue}>{children}</MealContext>
}