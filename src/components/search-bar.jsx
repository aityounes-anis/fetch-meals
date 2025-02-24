import { useContext, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { MealsContext, SetDisplayedMealsContext } from "../App";

const SearchBar = () => {
  const meals = useContext(MealsContext);
  const setDisplayedMeals = useContext(SetDisplayedMealsContext);

  const inputRef = useRef(null);

  const filterMeals = () => {
    const newMeals = meals.filter((meal) =>
      meal.strMeal.toLowerCase().startsWith(inputRef.current.value)
    );
    setDisplayedMeals(newMeals);
  };

  return (
    <section>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a meal..."
          ref={inputRef}
          onChange={filterMeals}
        />
        <button type="button">
          <BiSearch />
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
