import React from "react";
import Async from 'react-async';

// We'll request genres from this API
const URL = 'https://listen-api.listennotes.com/api/v2/genres?top_level_only=1';
const loadGenres = () =>
  fetch(URL, {
    method: "GET",
    headers: {
               "Content-type": "application/json;charset=UTF-8",
               "X-ListenAPI-Key": "ffd40c4878f547648e7bf10c4351a68f"
             },
  }).then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

function CategoryList({ displayAll }) {
  return (
      <Async promiseFn={loadGenres}>
       {({ data, err, isLoading }) => {
          if (isLoading) return "Loading..."
          if (err) return `Something went wrong: ${err.message}`
          if (data)
            return displayAll ? (
              data.genres.map((item, index) => (<div className="box-section" key={index}>{item.name}</div>))                                       
            ) : data.genres.slice(0, 10).map((item, index) => (<div className="box" key={index}>{item.name}</div>))  
        }}         
      </Async>                            
  );
}

export default CategoryList;