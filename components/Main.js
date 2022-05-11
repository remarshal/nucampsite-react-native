import React, { Component } from "react";
import Directory from "./Directory";
import CampsiteInfo from "./CampsiteInfo";
import Constants from "expo-constants";
import { View, Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const DirectoryNavigator = createStackNavigator(
  {
    Directory: { screen: Directory },
    CampsiteInfo: { screen: CampsiteInfo },
  },
  {
    initialRouteName: "Directory",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const AppNavigator = createAppContainer(DirectoryNavigator);
class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
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
