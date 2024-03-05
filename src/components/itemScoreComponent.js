import React from "react";

import { View, Text, StyleSheet } from "react-native";

export default function ItemScoreComponent(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.key}</Text>
      <Text style={styles.text}>Opponent {props.guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
});