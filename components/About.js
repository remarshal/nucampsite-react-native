import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";

class About extends Component {
  static navigationOptions = {
    title: "About Us",
  };

  render() {
    return (
      <ScrollView>
        <RenderItem
          item={this.state.campsites.filter((campsite) => campsite.featured)[0]}
        />
        <RenderItem
          item={
            this.state.promotions.filter((promotion) => promotion.featured)[0]
          }
        />
        <RenderItem
          item={this.state.partners.filter((partner) => partner.featured)[0]}
        />
      </ScrollView>
    );
  }
}

export default About;
