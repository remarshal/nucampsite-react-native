import React, { Component } from "react";
import Directory from "./Directory";
import CampsiteInfo from "./CampsiteInfo";
import { CAMPSITES } from "../shared/campsites";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      selectedCampsite: null,
    };
  }

  onCampsiteSelect(campsiteID) {
    this.setState({ selectedCampsite: campsiteID });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Directory
          campsites={this.state.campsites}
          onPress={(campsiteId) => this.onCampsiteSelect(campsiteId)}
        />
        <CampsiteInfo
          campsite={
            this.state.campsites.filter(
              (campsite) => campsite.id === this.state.selectedCampsite
            )[0]
          }
        />
      </View>
    );
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
