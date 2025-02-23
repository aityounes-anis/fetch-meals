import { useContext } from "react";
import Meal from "./Meal";
import { MealsContext } from "../App";

const Meals = () => {
  const meals = useContext(MealsContext);

  return (
    <div>
      {meals ? (
        <div className="meals-container">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal} />
          ))}
        </div>
      ) : (
        <h1 className="empty-state">No meals available</h1>
      )}
    </div>
  );
};

export default Meals;
