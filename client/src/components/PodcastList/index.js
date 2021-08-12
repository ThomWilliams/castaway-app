// import { iterateObserversSafely } from "@apollo/client/utilities";
import React from "react";
import Async from "react-async";
import { useHistory } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ReactComponent as Logo } from "../../assets/like.svg";
import { SAVE_PODCAST } from '../../utils/mutations';
import { QUERY_PODCASTS, QUERY_USER } from '../../utils/queries';
import Auth from '../../utils/auth';



// We'll request podcasts episodes from this API
const ID = window.location.pathname.split("/").pop();
const API_KEY = process.env.REACT_APP_API_KEY;
const URL = "https://listen-api.listennotes.com/api/v2/podcasts/" + ID;
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

function PodcastInfo() {

// ADD PODCAST TO MYPODCASTS
  const [addPodcast, { error }] = useMutation(SAVE_PODCAST, {
    update(cache, { data: { addPodcast } }) {
      try {
        const { podcasts } = cache.readQuery({ query: QUERY_PODCASTS });

        cache.writeQuery({
          query: QUERY_PODCASTS,
          data: { podcasts: [addPodcast, ...podcasts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update user object's cache
      const { user } = cache.readQuery({ query: QUERY_USER });
      cache.writeQuery({
        query: QUERY_USER,
        data: { user: { ...user, podcasts: [...user.podcasts, addPodcast] } },
      });
    },
  });

  // Button Handler to Add Podcast to MyPodcasts
  const handleButtonSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPodcast({
        variables: {
          username: Auth.getProfile().data.username,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };


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
                  <h1>{data.title.split(' ').slice(0, 10).join(' ')}</h1>
                  <a><div
                    onClick={() => {
                      history.goBack();
                    }}
                  >
                    <h2>← Go Back</h2>
                  </div></a>
                </div>
                <div onSubmit={handleButtonSubmit} className="podcast-info">
                  <div className="podcast-info-details">
                    <div className="podcast-info-cover">
                      <img src={data.image} alt={data.title}></img>
                    </div>
                    <div>
                      <div className="podcast-info-text" style={{
                            paddingLeft: `0`,
                          }}>
                        <ul className="description" style={{padding: "0px"}}>
                          <li><span>Country:</span> {data.country}</li>
                          <li><span>Language:</span> {data.language}</li>
                          <li><span>Publisher:</span> {data.publisher}</li>
                          <li><a href={data.website} target="_blank" rel="noreferrer noopener">Visit the official website</a></li>
                        </ul>
                      </div>
                      <div className="like">
                        {/* <button className="heart">
                        <Logo className="icon" />
                        </button> */}
                        <button type="submit" className="button">
                          Add To My Podcasts
                        </button>
                                              </div>
                    </div>
                  </div>
                  <div className="podcast-info-description">
                    <span>Description:</span>
                  <p>{data.description}</p>
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
