import React from "react";
import Async from "react-async";


// display my podcast selections
function MyPodcastsDisplay({ displayAll }) {
  return (
    <Async>
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

export default MyPodcastsDisplay;