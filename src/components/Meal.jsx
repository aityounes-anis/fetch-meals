/* eslint-disable react/prop-types */
const Meal = ({ meal }) => {
  return (
    <div>
      <img src={meal.strMealThumb} alt={`img-${meal.strMeal}`} />
      <h1>{meal.strMeal}</h1>
    </div>
  );
};

export default Meal;
