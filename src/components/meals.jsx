import { useContext } from "react";
import Meal from "./meal";
import { DisplayedMealsContext } from "../App";

const Meals = () => {
  const displayedMeals = useContext(DisplayedMealsContext);

  return (
    <div>
      {displayedMeals ? (
        <div className="meals-container">
          {displayedMeals.map((meal) => (
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
