import React from "react";
import Async from "react-async";

// We'll request genres from this API
const id = "4d3fe717742d4963a85562e9f84d8c79";
const URL = "https://listen-api.listennotes.com/api/v2/podcasts/" + id;
const loadPodcast = () =>
  fetch(URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      "X-ListenAPI-Key": "ffd40c4878f547648e7bf10c4351a68f",
    },
  })
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

function PodcastItem({ displayAll }) {
  return (
    <Async promiseFn={loadPodcast}>
      {({ data, err, isLoading }) => {
        if (isLoading) return "Loading...";
        if (err) return `Something went wrong: ${err.message}`;
        if (data)
        return displayAll (
          <div className="card-body bg-light p-2">
          <p>hello</p>
        </div>
          
        )  
    }}         
    </Async>
  );
}          


export default PodcastItem;
