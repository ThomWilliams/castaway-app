import React from "react";
import BestPodcastsList from "../components/BestPodcastsList";
import { Link } from 'react-router-dom';

export default function BestPodcasts() { 
  return (
    <div>
      <section>
        <div className="title">
          <h1>BestPodcastsList</h1>
          <Link to="/">
          <h2>← Home</h2>
        </Link>
        </div>
        <div className="boxes-section">
          <BestPodcastsList displayAll = {true} />
        </div>
      </section>
    </div>
  );
}
