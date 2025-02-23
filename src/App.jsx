import "./App.css"; // Import the CSS file
import SearchBar from "./components/search-bar";
import Meals from "./components/meals";
import { createContext } from "react";
import { useFecth } from "./hooks/use-fetch";

export const MealsContext = createContext();

const App = () => {
  const { data } = useFecth({
    URL: "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
  });

  const meals = data["meals"];

  return (
    <section>
      <MealsContext.Provider value={meals}>
        <SearchBar />
        <Meals />
      </MealsContext.Provider>
    </section>
  );
};

export default App;
