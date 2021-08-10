import React from "react";
import Async from 'react-async';

// We'll request genres from this API
const URL = 'https://listen-api.listennotes.com/api/v2/best_podcasts';
const loadBestPodcasts = () =>
  fetch(URL, {
    method: "GET",
    headers: {
               "Content-type": "application/json;charset=UTF-8",
               "X-ListenAPI-Key": "ffd40c4878f547648e7bf10c4351a68f"
             },
  }).then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

function BestPodcastsList({ displayAll }) {
  return (
      
      <div>
          
      <Async promiseFn={loadBestPodcasts}>
          
       {({ data, err, isLoading }) => {
          if (isLoading) return "Loading..."
          if (err) return `Something went wrong: ${err.message}`
          if (data)
            return displayAll ? (
                
              data.podcasts.map(item => (<a href={"/podcastepisodes/" + [item.id]}><div style={{ 
                backgroundImage: `url(${item.image})`}} className="box-section"></div>{item.title}</a>))                                       
            ) : data.podcasts.slice(0, 10).map(item => (<a href={"/podcastepisodes/" + [item.id]}><div style={{ 
                backgroundImage: `url(${item.image})`}} className="box-section"></div>{item.title}</a>))  
        }}         
      </Async>
      </div>                            
  );
}

export default BestPodcastsList;