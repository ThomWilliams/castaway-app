import React, { useState } from "react";
import { Client } from "podcast-api";

const SearchBar = () => {
  // create state for holding returned google api data
  const [searchResults, setSearchResults] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  // TODO: move this to .env file
  // Initialise the Listen Podcast Client with correct apiKey
  const listenClient = Client({ apiKey: "ffd40c4878f547648e7bf10c4351a68f" });

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
        <div className="search-container" >
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
            <button  className="search-button" type="submit" variant="success" size="lg">
                  Submit Search
                </button>
              </div>
               
          </form>
       
        </div>
      </section>

      <div>
        <h1>Displaying Podcast Search Results: {searchInput}</h1>

        <h2>
          {searchResults.length
            ? `Viewing ${searchResults.length} results:`
            : ""}
        </h2>

        <div className="episodes-boxes">
          {searchResults.map((podcast) => {
            console.log("check", podcast);
            return (
              <div>
                <a href={"/podcast/" + [podcast.podcastId]}>
                  <div className="box-section">
                    <div
                      className="episode-cover"
                      style={{
                        backgroundImage: `url(${podcast.podcastImage})`,
                      }}
                    ></div>
                    <p>{podcast.podcastTitle}</p>
                    <p>{podcast.podcastPublisher}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
