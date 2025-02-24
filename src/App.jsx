/* eslint-disable react-refresh/only-export-components */
import "./App.css";
import SearchBar from "./components/search-bar";
import Meals from "./components/meals";
import { createContext, useEffect, useState } from "react";
import { useFecth } from "./hooks/use-fetch";
import Loading from "./components/loading";
import Error from "./components/Error";

export const MealsContext = createContext();
export const DisplayedMealsContext = createContext();
export const SetDisplayedMealsContext = createContext();

const App = () => {
  const { data, loading, error } = useFecth({
    URL: "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
  });

  const meals = data["meals"];
  const [displayedMeals, setDisplayedMeals] = useState([]);

  useEffect(() => {
    if (meals) {
      setDisplayedMeals(meals);
    }
  }, [meals]);

  if (loading) return <Loading />;

  if (error) return <Error message={error.message} />;

  return (
    <section>
      <MealsContext.Provider value={meals}>
        <DisplayedMealsContext.Provider value={displayedMeals}>
          <SetDisplayedMealsContext.Provider value={setDisplayedMeals}>
            <SearchBar />
            <Meals />
          </SetDisplayedMealsContext.Provider>
        </DisplayedMealsContext.Provider>
      </MealsContext.Provider>
    </section>
  );
};

export default App;
