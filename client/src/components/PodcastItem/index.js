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

const audioFiles = [
  { src: "https://www.listennotes.com/e/p/ea09b575d07341599d8d5b71f205517b/" },
];

// We'll request genres from this API
const id = "6b6d65930c5a4f71b254465871fed370";
const URL = "https://listen-api.listennotes.com/api/v2/episodes/" + id;
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

function PodcastItem() {
  return (
    <Async promiseFn={loadPodcast}>
      {({ data, err, isLoading }) => {
        if (isLoading) return "Loading...";
        if (err) return `Something went wrong: ${err.message}`;
        if (data)
          return (
            <div>
              {/* <PodcastItem displayAll={true} /> */}
              <img className="cover" src={data.image} alt={data.title} />
              <AudioPlayer
                audioFiles={data.audio}
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
      }}
    </Async>
  );
}

export default PodcastItem;
