import React from "react";
import Async from "react-async";

// We'll request genres from this API
const URL = "https://listen-api.listennotes.com/api/v2/just_listen";
const API_KEY = process.env.REACT_APP_API_KEY;
const loadNewPodcast = () =>
  fetch(URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      "X-ListenAPI-Key": API_KEY,
    },
  })
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

function NewPodcastsList() {
  return (
    <Async promiseFn={loadNewPodcast}>
      {({ data, err, isLoading }) => {
        if (isLoading) return "Loading...";
        if (err) return `Something went wrong: ${err.message}`;
        if (data) {

          return (
            
            <div>


              <div className="podcast-info">

                  <div className="podcast-info-details">

                    <div className="podcast-info-cover">
                    <a href={"/podcast/" + [data.id]}> 
                      
                        <div
                            className="episode-cover"
                            style={{
                              backgroundImage: `url(${data.image})`,
                            }}
                          >
                        </div>

                      </a>                    
                    </div>

                    <div className="podcast-info-text">
                        <ul>
                          <li>{data.title}</li>
                          <li>Publisher: {data.podcast.publisher}</li>
                          <li><a href={"/podcast/" + [data.id]}> Discover more...</a></li>
                        </ul>
                    </div>
                    
                  </div>

              </div>
            </div>
          );
        }
      }}
    </Async>
  );
}

export default NewPodcastsList;
