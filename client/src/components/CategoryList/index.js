import React from "react";
import Async from 'react-async';

const API_KEY = process.env.REACT_APP_API_KEY;

// We'll request genres from this API
const URL = 'https://listen-api.listennotes.com/api/v2/genres?top_level_only=1';
const loadGenres = () =>
  fetch(URL, {
    method: "GET",
    headers: {
               "Content-type": "application/json;charset=UTF-8",
               "X-ListenAPI-Key": API_KEY,
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
              data.genres.map((item, index) => (<a href={"/category/" + [item.id]} key={index}><div className={`head ${"box-section-categories"} ${"category" + [item.id]}`}>{item.name}</div></a>))                                       
            ) : data.genres.slice(0, 10).map((item, index) => (<a href={"/category/" + [item.id]} key = {index}><div className={`head ${"box"} ${"category" + [item.id]}`}>{item.name}</div></a>))  
        }}         
      </Async>                            
  );
}

export default CategoryList;