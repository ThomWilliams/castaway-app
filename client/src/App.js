import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import MyPodcasts from "./pages/Mypodcasts.js";
import Categories from "./pages/Categories";
import Newpodcasts from "./pages/Newpodcasts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Nav />
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/mypodcasts" component={MyPodcasts} />
              <Route exact path="/categories" component={Categories} />
              <Route exact path="/categories" component={Newpodcasts} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
          </div>
        </Router>
      </div>
    );
  }
}
