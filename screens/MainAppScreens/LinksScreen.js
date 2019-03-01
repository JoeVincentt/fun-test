import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Camera from "../../components/Camera/Camera";

class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <Camera />;
  }
}

export default LinksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
