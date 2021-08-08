import React, { useState } from 'react';
import { searchResults } from "../../utils/api";


const SearchBar = ({setSearchData, setWrapperHeader}) => {

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchKeywordError, setSearchKeywordError] = useState("");

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    let results = [];
    if (searchKeyword !== "") {
      try {
        results = await searchResults(searchKeyword);
      } catch (e) {
        setSearchKeywordError(e);
      } finally {
        if (results.length > 0) {
          setWrapperHeader(searchKeyword);
          setSearchData(results);
        } else {
          setSearchKeywordError("No matches");
        }
      }
    } else {
      setSearchKeywordError("Enter a keyword.");
    }
  };

  const onBlurHandler = () => {
    handleSubmit();
  };

  const BarStyling = { background: "white", border: "none", width: "75vh" };

  return (
    <div className="search-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          style={BarStyling}
          key="random1"
          // value={keyword}
          error={searchKeywordError !== "" ? true : false}
          helperText={searchKeywordError}
          placeholder={"Search by word"}
          onBlur={() => onBlurHandler()}
          onChange={(text) => setSearchKeyword(text.target.value.trim())}
        />
      </form>
    </div>
  );
};



export default SearchBar


