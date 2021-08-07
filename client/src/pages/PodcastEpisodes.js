import React from "react";
import PodcastList from "../components/PodcastList";

export default function Podcast() {
  return (
    <div>
      <section>
        <div className="title">
          <h1>Podcast episodes</h1>
        </div>
        <div className="episodes-boxes">
          <PodcastList displayAll={true} />
        </div>
      </section>
    </div>
  );
}
