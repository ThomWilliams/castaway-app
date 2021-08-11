import React, { useState } from "react";
import { Client } from "podcast-api";

const SearchBar = () => {
  // create state for holding returned google api data
  const [searchResults, setSearchResults] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  // TODO: move this to .env file
  // Initialise the Listen Podcast Client with correct apiKey
  const API_KEY = process.env.REACT_APP_API_KEY;
  const listenClient = Client({ apiKey: API_KEY });

  // create method to search for Podcasts and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      // Defines the params for the listen podcast API
      const searchParams = {
        q: searchInput,
        sort_by_date: 1,
        only_in: "title,description",
      };
      // Runs a search on the Listen Podcast Client with the above params
      const { data, status } = await listenClient.search(searchParams);

      if (status !== 200) {
        throw new Error("Something went wrong!");
      }
      // Transforming the data from the Listen Podcast API into desired data structure
      const podcastsData = data.results.map(
        ({
          id,
          link,
          audio,
          image,
          podcast,
          description_highlighted,
          listennotes_url,
        }) => ({
          podcastId: id,
          podcastLink: link,
          podcastAudio: audio,
          podcastImage: image,
          podcastTitle: podcast.title_original,
          podcastPublisher: podcast.publisher_original,
          podcastDescription: description_highlighted,
          podcastListenNotesUrl: listennotes_url,
        })
      );
      // Set podcast state
      setSearchResults(podcastsData);
      // Reset input state
      setSearchInput("");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                className="search-input"
                name="searchInput"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                // size="lg"
                placeholder="Search for a podcast"
              />
            </div>

            <div>
              <button
                className="button"
                type="submit"
                variant="success"
                size="lg"
              >
                Submit Search
              </button>
            </div>
          </form>
        </div>
      </section>

      <section>
        <div className="title">
          <h1>Displaying Podcast Search Results: {searchInput}</h1>
          <h2>
            {searchResults.length
              ? `Viewing ${searchResults.length} results:`
              : ""}
          </h2>
        </div>
        <div className="boxes-section">
          {searchResults.map((podcast) => {
            return (
              <a href={"/podcast/" + [podcast.podcastId]}>
                <div className="episodes-boxes-all">
                  <div className="box-section">
                    <div
                      className="episode-cover"
                      style={{
                        backgroundImage: `url(${podcast.podcastImage})`,
                      }}
                    ></div>
                    {podcast.podcastTitle}
                    {podcast.podcastPublisher}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <div></div>
    </>
  );
};

export default SearchBar;
