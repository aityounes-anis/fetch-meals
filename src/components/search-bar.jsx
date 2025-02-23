import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <section>
      <div className="search-bar">
        <input type="text" placeholder="Search for a meal..." />
        <button type="button">
          <BiSearch />
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
