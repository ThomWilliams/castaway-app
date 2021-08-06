import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <div>
      <form className="form" onSubmit={(e) => setKeyword(e.target.value)}>
        <div className="form-element">
          <input
            placeholder="Search by word"
            name="keyword"
            type="keyword"
            id="keyword"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
