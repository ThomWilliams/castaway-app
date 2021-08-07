import React from "react";
import Async from 'react-async';
import { Link } from 'react-router-dom';

// We'll request genres from this 
const ID = window.location.pathname.split("/").pop();
const URL = 'https://listen-api.listennotes.com/api/v2/typeahead?show_podcasts=1&show_genres=' + ID;
const loadCategory = () =>
  fetch(URL, {
    method: "GET",
    headers: {
               "Content-type": "application/json;charset=UTF-8",
               "X-ListenAPI-Key": "ffd40c4878f547648e7bf10c4351a68f"
             },
  }).then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

function OneCategory({ displayAll }) {
  return (
      <Async promiseFn={loadCategory}>
       {({ data, err, isLoading }) => {
          if (isLoading) return "Loading..."
          if (err) return `Something went wrong: ${err.message}`
          if (data) 
          return (
<div>       <div className="title">
          <h1>Category</h1>
          <Link to="/categories">
          <h2>← All Categories</h2>
        </Link>
        </div>
              <img className="cover" src={data.image} alt={data.title_original} />

              <div className="podcast-info">
                  Hola
                <h1>{data.podcasts[0].title_original}</h1>
                <h2>Last episode release</h2>
                <p className="podcast-info-description">{data.transcript}</p>
              </div>
            </div>
            //   data.podcasts.map(item => (<a href={"" + [item.id]}><div className="box-section">{item.title_original}</div></a>))                                       
            // ) : data.podcasts.slice(0, 10).map(item => (<a href={"" + [item.id]}><div className="box">{item.title_original}</div></a>)) 
        );
        }}         
      </Async>                            
  );
}

export default OneCategory;