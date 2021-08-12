import React from "react";
import MyPodcastsDisplay from "../components/MyPodcastsDisplay";

export default function MyPodcasts() {
  return (
    <div>
      <section>
        <div className="title">
          <h1>My Podcasts</h1>
        </div>
        <div className="boxes-section">
        <div>
      <section>
      <MyPodcastsDisplay displayAll = {true} />
      </section>
    </div>
        <div className="box-section">Title 1</div>
          <div className="box-section">Title 1</div>
          <div className="box-section">Title 1</div>
          <div className="box-section">Title 1</div>
          <div className="box-section">Title 1</div>
          <div className="box-section">Title 1</div>
          <div className="box-section">Title 1</div>
          <div className="box-section">Title 1</div>
          <div className="box-section">Title 1</div>
          <div className="box-section">Title 1</div>
          <div className="box-section">Title 1</div>
          <div className="box-section">Title 1</div>
        </div>
      </section>
    </div>
  );
}