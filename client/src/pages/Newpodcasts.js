import React from "react";
import NewPodcasts from "../components/NewPodcasts";
import { Link } from 'react-router-dom';

export default function Categories() { 
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
          <NewPodcasts displayAll = {true} />
        </div>
      </section>
    </div>
  );
}
