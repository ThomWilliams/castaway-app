import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as SettingsIcon } from "../../assets/user.svg";
import { ReactComponent as MyPodcastsIcon } from "../../assets/list.svg";

export default class Nav extends React.Component {
  render() {
    return (
      <footer>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <span>
                  <HomeIcon className="icon" />
                </span>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link to="/search">
                <span>
                  <SearchIcon className="icon" />
                </span>
                <p>Search</p>
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <span>
                  <SettingsIcon className="icon" />
                </span>
                <p>Settings</p>
              </Link>
            </li>
            <li>
              <Link to="/mypodcasts">
                <span>
                  <MyPodcastsIcon className="icon" />
                </span>
                <p>My Podcasts</p>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
}
