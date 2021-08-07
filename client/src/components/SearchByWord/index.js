import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {background:"white", border:"none"};
  return (
    <input className="form"
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search by word"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar