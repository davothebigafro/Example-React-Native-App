import React from "react";
import { Alert, StyleSheet, Text, View, Button } from "react-native";

export default class Square extends React.Component {
  render() {
    return (
      <Button
        title={"Asiya sucks"}
        onPress={() => {
          Alert.alert("Loser");
        }}
      />
    );
  }
}
