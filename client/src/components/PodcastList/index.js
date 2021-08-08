// import { iterateObserversSafely } from "@apollo/client/utilities";
import React from "react";
import Async from "react-async";
import { Link } from "react-router-dom";

// We'll request podcasts episodes from this API
const ID = window.location.pathname.split("/").pop();
const URL = "https://listen-api.listennotes.com/api/v2/podcasts/" + ID;
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

console.log(loadPodcast.res)
console.log(URL)

function PodcastInfo () {
  return (
    <div>
    <Async promiseFn={loadPodcast}>
      {({ data, err, isLoading }) => {
        if (isLoading) return "Loading...";
        if (err) return `Something went wrong: ${err.message}`;
        if (data)
          return (
            <div>
              <div className="title">
                <h1>{data.title}</h1>
                <Link to="/categories">
                  <h2>← All Categories</h2>
                </Link>
              </div>
              <div className="episodes-boxes">
                {data.episodes.map((item) => (
                  <a href={"/podcast/" + [item.id]}>
                    <div className="box-section">
                      <div
                        className="episode-cover"
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      ></div>
                      {item.title}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
      }}
    </Async>
  </div>
  );
}

export default PodcastInfo;
