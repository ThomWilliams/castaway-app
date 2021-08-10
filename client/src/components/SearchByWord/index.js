import React, { useState } from "react";
import { Client } from "podcast-api";

const SearchBar = () => {
  // create state for holding returned google api data
  const [searchedPodcasts, setSearchedPodcasts] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  const searchPodcasts = Client({ apiKey: "ffd40c4878f547648e7bf10c4351a68f" });
  searchPodcasts
    .search({
      q: `${searchInput}`,
    })
    .then((response) => {
      // Get response json data here
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  // create method to search for Podcasts and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchPodcasts(searchInput);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { results } = await response.json();

      const podcastData = results.map((podcastResults) => ({
        podcastId: podcastResults.id,
        podcastLink: podcastResults.link,
        podcastAudio: podcastResults.audio,
        podcastImage: podcastResults.image,
        podcastTitle: podcastResults.podcast.title_original,
        podcastPublisher: podcastResults.podcast.publisher_original,
        podcastDescription: podcastResults.description,
        podcastListenNotesUrl: podcastResults.listennotes_url,
      }));

      setSearchedPodcasts(podcastData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <h2>
          {searchedPodcasts.length
            ? `Viewing ${searchedPodcasts.length} results:`
            : "Search for a podcast"}
        </h2>

        <div>
          {searchedPodcasts.map((podcastResults) => {
            return (
              <div key={podcastResults.id}>
                {podcastResults.image ? (
                  <image
                    src={podcastResults.image}
                    alt={`The cover for ${podcastResults.podcast.title_original}`}
                    variant="top"
                  />
                ) : null}
                <div>
                  <title>{podcastResults.podcast.title_original}</title>
                  <p>Publisher: {podcastResults.podcast.publisher_original}</p>
                  <p>Description: {podcastResults.description}</p>
                  <p>Podcast Link: {podcastResults.link}</p>
                  <p>Podcast Audio: {podcastResults.audio}</p>
                  <p>Listen Here: {podcastResults.listennotes_url}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
