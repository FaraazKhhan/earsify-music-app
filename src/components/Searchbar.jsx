import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
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
    <form onSubmit={handleSubmit} className="input-wrapper">
      <input
        type="input"
        name="search-bar"
        id="search-bar"
        onChange={handleSearch}
        autoComplete="off"
        placeholder="Search your song"
        className="form-input"
      />
      <span>Search your song:</span>
      <button type="submit" className="search-btn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <button type="reset" defaultValue="Reset" className="cancel-btn">
        <FontAwesomeIcon icon={faTimesCircle} />
      </button>
    </form>
  );
};

export default Searchbar;
