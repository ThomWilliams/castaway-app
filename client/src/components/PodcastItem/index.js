import React from "react";
import Async from "react-async";
import AudioPlayer from "react-modular-audio-player";
import { useHistory } from "react-router-dom";


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
  const history = useHistory();

  return (
    <Async promiseFn={loadPodcast}>
      {({ data, err, isLoading }) => {
        if (isLoading) return "Loading...";
        if (err) return `Something went wrong: ${err.message}`;
        if (data) {
          const audioFiles = [{ src: data.audio }];
          return (
            <div>


              <div className="title">
          <h1>{data.title}</h1>
          <div
                    onClick={() => {
                      history.goBack();
                    }}
                  >
                    <a><h2>← Go Back</h2></a>
                  </div>
        </div>


              <div className="podcast-info">
                <div className="podcast-info-details">
                  <div className="podcast-info-cover">
                    <img src={data.image} alt={data.title}></img>
                  </div>
                  <div>
                    <div
                      className="podcast-info-text"
                      style={{
                        paddingLeft: `0`,
                      }}
                    >
                      <ul className="description" style={{ padding: "0px" }}>
                        <li>
                          <span>Episode:</span> {data.podcast.title}
                        </li>
                        <li>
                          <a
                            href={data.website}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            Visit the official website
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <AudioPlayer
                  audioFiles={audioFiles}
                  rearrange={rearrangedPlayer}
                  padding="20px"
                  margin="20px"
                  playerWidth="auto"
                  className="audio-player"
                />

                <div className="podcast-info">
                  <h2>{data.description}</h2>
                  <p className="podcast-info-description">{data.transcript}</p>
                </div>
              </div>
            </div>
          );
        }
      }}
    </Async>
  );
}

export default PodcastItem;
