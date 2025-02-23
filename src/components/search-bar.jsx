import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <section>
      <input type="text" placeholder="Search for a meal..." />
      <button type="button">
        <BiSearch />
      </button>
    </section>
  );
};

export default SearchBar;
