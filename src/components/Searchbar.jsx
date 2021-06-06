import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../contexts/DataProvider";

const Searchbar = () => {
  const [data, setData, query, setQuery] = useContext(DataContext);

  const [search, setSearch] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar__container">
      <input
        type="search"
        name="search-bar"
        id="search-bar"
        placeholder="Song / Artist / Album"
        onChange={handleSearch}
      />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default Searchbar;
