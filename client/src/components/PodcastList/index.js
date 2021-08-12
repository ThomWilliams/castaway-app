// import { iterateObserversSafely } from "@apollo/client/utilities";
import React from "react";
import Async from "react-async";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/like.svg";
        
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

function PodcastInfo() {
  const history = useHistory();
  
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
                  <a><div
                    onClick={() => {
                      history.goBack();
                    }}
                  >
                    <h2>← Go Back</h2>
                  </div></a>
                </div>
                <div className="podcast-info">
                  <div className="podcast-info-details">
                    <div className="podcast-info-cover">
                      <img src={data.image} alt={data.title}></img>
                    </div>
                    <div>
                      <div className="podcast-info-text" style={{
                            paddingLeft: `0`,
                          }}>
                        <ul className="description" style={{padding: "0px"}}>
                          <li>{data.description.split(' ').slice(0, 35).join(' ').concat('...')}</li>
                          <li>Country: {data.country}</li>
                          <li>Language: {data.language}</li>
                          <li>Publisher: {data.publisher}</li>
                          <li><a href={data.website} target="_blank" rel="noreferrer noopener">Visit the official website</a></li>
                        </ul>
                      </div>
                      <div className="like">
                        <ul>
                        <button className="heart">
                        <Logo className="icon" />
                        </button>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="title">
                  <h1>Episodes</h1>
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
                {/* <a href={"/nextpodcastepisodes/" + [data.id] + "/" + [data.next_episode_pub_date]}>Next Page</a> */}
              </div>
            );
        }}
      </Async>
    </div>
  );
}

export default PodcastInfo;
