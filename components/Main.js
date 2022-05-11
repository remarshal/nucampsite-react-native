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

// Functional component alternative
// function Main() {
//   const [campsites, setCampsites] = React.useState(Campsites) < - - - don't need this???

//   return (
//     <Directory campsites={Campsites} />
//   )
// }
