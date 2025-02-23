import Meal from "./Meal";

import { useContext } from "react";
import { MealsContext } from "../App";

const Meals = () => {
  const meals = useContext(MealsContext);

  return (
    <div>
      {meals ? (
        <div>
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal} />
          ))}
        </div>
      ) : (
        <h1>empty</h1>
      )}
    </div>
  );
};

export default Meals;
