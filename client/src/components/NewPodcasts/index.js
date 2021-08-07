import React from "react";
import Async from 'react-async';

// We'll request genres from this API
const URL = 'https://listen-api.listennotes.com/api/just_listen';
const loadPodcasts = () =>
  fetch(URL, {
    method: "GET",
    headers: {
               "Content-type": "application/json;charset=UTF-8",
               "X-ListenAPI-Key": "ffd40c4878f547648e7bf10c4351a68f"
             },
  }).then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

function Newpodcasts({ displayAll }) {
  return (
      <Async promiseFn={loadPodcasts}>
       {({ data, err, isLoading }) => {
          if (isLoading) return "Loading..."
          if (err) return `Something went wrong: ${err.message}`
          if (data)
            return displayAll ? (
              data.map(item => (<a href={"/newpodcasts/" + [item.id]}><div style={{ 
                backgroundImage: `url(${item.image})`}} className="box-section">{item.title}</div></a>))                                       
            ) : data.slice(0, 10).map(item => (<a href={"/newpodcasts/" + [item.id]}><div className="box">{item.title}</div></a>))  
        }}         
      </Async>                            
  );
}

export default Newpodcasts;