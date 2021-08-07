import React from "react";
import Async from 'react-async';
import searchBar from '../SearchByWord';

// request search results from the API

function SearchByWordResults({ displayAll }) {
  return (
      <Async promiseFn={searchBar}>
       {({ data, err, isLoading }) => {
          if (isLoading) return "Loading..."
          if (err) return `Something went wrong: ${err.message}`
          if (data)
            return displayAll ? (
              data.genres.map(item => (<div className="box-section">{item.name}</div>))                                       
            ) : data.genres.slice(0, 30).map(item => (<div className="box">{item.name}</div>))  
        }}         
      </Async>                            
  );
}

export default SearchByWordResults;

