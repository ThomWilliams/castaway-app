import React from "react";
import PodcastItem from "../components/PodcastItem";

export default function Podcast() {
  return (
    <div>
      <section>
        <div className="title">
          <h1>Podcast</h1>
        </div>
        <PodcastItem displayAll = {true} />
      </section>
    </div>
  );
}