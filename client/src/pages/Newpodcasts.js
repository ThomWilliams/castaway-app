import React from "react";
import NewPodcastsList from "../components/NewPodcastsList";
import { Link } from 'react-router-dom';

export default function Newpodcasts() { 
  return (
    <div>
      <section>
        <div className="title">
          <h1>New Podcasts</h1>
          <Link to="/">
          <h2>← Home</h2>
        </Link>
        </div>
        <div className="boxes-section">
          <NewPodcastsList displayAll = {true} />
        </div>
      </section>
    </div>
  );
}
