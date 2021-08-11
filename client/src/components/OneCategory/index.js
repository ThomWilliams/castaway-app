import React from "react";
import Async from "react-async";
import { Link } from "react-router-dom";

// We'll request genres from this
const API_KEY = process.env.REACT_APP_API_KEY;
const ID = window.location.pathname.split("/").pop();
const URL =
  "https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=" + ID;
const loadCategory = () =>
  fetch(URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      "X-ListenAPI-Key": API_KEY,
    },
  })
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

function OneCategory({ displayAll }) {
  return (
    <Async promiseFn={loadCategory}>
      {({ data, err, isLoading }) => {
        if (isLoading) return "Loading...";
        if (err) return `Something went wrong: ${err.message}`;
        if (data)
          return (
            <div>
              <div className="title">
                <h1>{data.name}</h1>
                <Link to="/categories">
                  <h2>← All Categories</h2>
                </Link>
              </div>
              <div className="episodes-boxes">
                {data.podcasts.map((item) => (
                  <a href={"/podcastepisodes/" + [item.id]}>
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
  );
}

export default OneCategory;
