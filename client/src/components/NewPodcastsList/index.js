import React from "react";
import Async from "react-async";

// We'll request genres from this API
const URL = "https://listen-api.listennotes.com/api/v2/";
const loadNewPodcasts = () =>
  fetch(URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      "X-ListenAPI-Key": "ffd40c4878f547648e7bf10c4351a68f",
    },
  })
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

function NewPodcastsList({ displayAll }) {
  return (
    <Async promiseFn={loadNewPodcasts}>
      {({ data, err, isLoading }) => {
        if (isLoading) return "Loading...";
        if (err) return `Something went wrong: ${err.message}`;
        if (data)
          return displayAll
            ? data.podcast.map((item) => (
                <a href={"/podcastepisodes/" + [item.id]}>
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                    className="box-episodes"
                  ></div>
                  {item.title}
                </a>
              ))
            : data.podcast.slice(0, 10).map((item) => (
                <a href={"/podcastepisodes/" + [item.id]}>
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                    className="box-section"
                  ></div>
                  {item.title}
                </a>
              ));
      }}
    </Async>
  );
}

export default NewPodcastsList;
