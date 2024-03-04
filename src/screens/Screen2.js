import React from "react";
import {
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
export default function Screen2(props) {
  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.topView}>
        <Text style={styles.textTop}>Opponent's Guess</Text>
      </View>
      <View style={styles.bottomView}>
        <Text
          style={StyleSheet.create({
            color: "black",
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 40,
          })}
        >
          Let's play a game
        </Text>
        <Text style={styles.textBottom}>
          Welcome to the Number Guessing Game!
          {"\n"}Insert your number and we will try to guess it.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter a number from 1 to 100"
          keyboardType="numeric"
        />
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(100,134,48)",
  },
  topView: {
    paddingTop: 40,
    height: 120,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomView: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 39,
    borderTopRightRadius: 39,
    padding: 30,
  },
  textTop: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 25,
    borderColor: "white",
    borderWidth: 1,
    padding: 15,
  },
  textBottom: {
    color: "black",
    fontSize: 16,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ECECF1",
    borderRadius: 25,
    padding: 10,
    width: "100%",
    fontSize: 16,
    marginTop: 90,
    backgroundColor: "#ECECF1",
  },
});
