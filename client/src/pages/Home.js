import React from "react";
import { Link } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import NewPodcasts from "../components/NewPodcasts";


export default function Home() {
  return (
    <div>
      {/* Categories */}
      <section>
        <div className="title">
          <h1>Categories</h1>
          <Link to="/Categories"><h2>See all</h2></Link>
        </div>
        <div className="boxes">
        <CategoryList displayAll = {false} />
        </div>
      </section>

      {/* My Podcasts */}
      <section>
        <div className="title">
          <h1>My Podcasts</h1>
          <Link to="/Mypodcasts"><h2>See all</h2></Link>
        </div>
        <div className="boxes">
          <div className="box">Title 1</div>
          <div className="box">Title 2</div>
          <div className="box">Title 3</div>
          <div className="box">Title 4</div>
          <div className="box">Title 5</div>
          <div className="box">Title 6</div>
        </div>
      </section>

      {/* New Podcasts */}
      <section>
        <div className="title">
          <h1>New Podcasts</h1>
          <Link to="/Newpodcasts"><h2>See more</h2></Link>
        </div>
        <div className="boxes">
        <NewPodcasts displayAll = {false} />
        </div>
      </section>

      {/* Others */}
      <section>
        <div className="title">
          <h1>Title</h1>
          <h2>See all</h2>
        </div>
        <div className="boxes">
          <div className="box">Title 1</div>
          <div className="box">Title 2</div>
          <div className="box">Title 3</div>
          <div className="box">Title 4</div>
          <div className="box">Title 5</div>
          <div className="box">Title 6</div>
        </div>
      </section>
    </div>
  );
}
