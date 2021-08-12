import React from "react";
import Async from 'react-async';
const API_KEY = process.env.REACT_APP_API_KEY;

// We'll request genres from this API
const URL = 'https://listen-api.listennotes.com/api/v2/best_podcasts';
const loadBestPodcasts = () =>
  fetch(URL, {
    method: "GET",
    headers: {
               "Content-type": "application/json;charset=UTF-8",
               "X-ListenAPI-Key": API_KEY,
             },
  }).then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

function BestPodcastsList({ displayAll }) {
  return (
      <Async promiseFn={loadBestPodcasts}>
       {({ data, err, isLoading }) => {
          if (isLoading) return "Loading..."
          if (err) return `Something went wrong: ${err.message}`
          if (data)
            // if (data.podcasts.title.split(' ').length > 10) data.podcasts.title = data.podcasts.title.split(' ').slice(0, 5).join(' ').concat('...')
            return displayAll ? (
              data.podcasts.map(item => (<a href={"/podcastepisodes/" + [item.id]}><div className="episodes-boxes-all">
                <div className="box-section">
              <div
                className="episode-cover"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>
              {item.title}
              </div>
              </div>
              </a>))                                       
            ) : data.podcasts.slice(0, 10).map(item => (<a href={"/podcastepisodes/" + [item.id]}><div style={{ 
                backgroundImage: `url(${item.image})`}} className="box-section"></div>{item.title}</a>))  
        }}         
      </Async>
  );
}

export default BestPodcastsList;