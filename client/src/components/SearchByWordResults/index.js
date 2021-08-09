import React from "react";
import Async from 'react-async';
import SearchBar from '../../components/SearchByWord';

// // request search results from the API
// const URL = 'https://listen-api.listennotes.com/api/v2/search?q=' 
// // + `${query}`;
// const searchResults = () =>
//   fetch(URL, {
//     method: "GET",
//     headers: {
//                "Content-type": "application/json;charset=UTF-8",
//                "X-ListenAPI-Key": "ffd40c4878f547648e7bf10c4351a68f"
//              },
//   }).then(res => (res.ok ? res : Promise.reject(res)))
//     .then(res => res.json());



function SearchByWordResults({ displayAll }) {
  return (
      <Async promiseFn={SearchBar}>
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

