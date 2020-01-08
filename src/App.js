import React, { Component , Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import jquery from 'jquery';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "@fortawesome/fontawesome-free/css/all.css";

import Config from "./config/default";
import {ROUTE_LANDING} from './types/sitemap';

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pageCurrent: ""
    };
  }

  componentDidMount() {
    const { pageCurrent } = this.state;
    document.title = Config.APP_NAME + (pageCurrent ? ` | ${pageCurrent}` : "");
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div className="App">
            <Navbar user={{name: "Wyatt"}}/>

            <Switch>
              <Route exact path={ROUTE_LANDING} component={Landing}/>
            </Switch>

            <Footer />
            <div className="bg-success test-case"></div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
