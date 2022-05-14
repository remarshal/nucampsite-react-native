import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";

function Mission() {
  return (
    <Card title="Mission">
      <Text style={{ margin: 10 }}>
        We present a curated database of the best campsites in the vast woods
        and backcountry of the World Wide Web Wilderness. We increase access to
        adventure for the public while promoting safe and respectful use of
        resources. The expert wilderness trekkers on our staff personally verify
        each campsite to make sure that they are up to our standards. We also
        present a platform for campers to share reviews on campsites they have
        visited with each other.
      </Text>
    </Card>
  );
}
class About extends Component {
  static navigationOptions = {
    title: "About Us",
  };

  render() {
    return (
      <ScrollView>
        <Mission />
      </ScrollView>
    );
  }
}

export default About;
