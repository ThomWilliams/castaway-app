import React from "react";
import Async from "react-async";
import AudioPlayer from "react-modular-audio-player";

let iconStyle = { width: "fit-content" },
  rearrangedPlayer = [
    {
      className: "tier-top",
      style: { padding: "5px 0" },
      innerComponents: [
        {
          type: "play",
          style: iconStyle,
        },
        {
          type: "rewind",
          style: iconStyle,
        },
        {
          type: "forward",
          style: iconStyle,
        },
        {
          type: "volume",
        },
      ],
    },
    {
      className: "tier-bottom",
      innerComponents: [
        {
          type: "time",
          style: iconStyle,
        },
        {
          type: "seek",
        },
      ],
    },
  ];

// We'll request genres from this API
const ID = window.location.pathname.split("/").pop();
const API_KEY = process.env.REACT_APP_API_KEY;
const URL = "https://listen-api.listennotes.com/api/v2/episodes/" + ID;
const loadPodcast = () =>
  fetch(URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      "X-ListenAPI-Key": API_KEY,
    },
  })
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

function PodcastItem() {
  return (
    <Async promiseFn={loadPodcast}>
      {({ data, err, isLoading }) => {
        if (isLoading) return "Loading...";
        if (err) return `Something went wrong: ${err.message}`;
        if (data) {
          const audioFiles = [{ src: data.audio }]
          return (
            <div>
              <img className="cover" src={data.image} alt={data.title} />
              <AudioPlayer
                audioFiles={audioFiles}
                rearrange={rearrangedPlayer}
                padding="20px"
                margin="20px"
                playerWidth="auto"
                className="audio-player"
              />
            
              <div className="podcast-info">
                <h1>{data.title}</h1>
                <h2>Last episode release</h2>
                <p className="podcast-info-description">{data.transcript}</p>
              </div>
            </div>
          );
        }
      }}
    </Async>
  );
}

export default PodcastItem;
