import React, { Component } from "react";
import Directory from "./Directory";
import { Campsites } from "../shared/campsites";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: Campsites,
    };
  }

  render() {
    return <Directory campsites={this.state.campsites} />;
  }
}

export default Main;
