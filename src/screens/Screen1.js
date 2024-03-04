import React from "react";
import {
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  Pressable,
} from "react-native";
function Screen1(props) {
  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.topView}>
        <Text style={styles.textTop}>Need some help?</Text>
      </View>
      <View style={styles.bottomView}>
        <Text
          style={StyleSheet.create({
            color: "black",
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 30,
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
        <Pressable
          style={StyleSheet.create({
            backgroundColor: "#F09D5F",
            padding: 10,
            borderRadius: 25,
            marginTop: 20,
          })}
          onPress={() => props.navigation.navigate("Screen2")}
        >
          <Text
            style={StyleSheet.create({
              color: "white",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            })}
          >
            Start game{" "}
          </Text>
        </Pressable>
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
    height: 90,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 30,
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
    fontSize: 13,
    paddingTop: 10,
    paddingRight: 10,
  },
  textBottom: {
    color: "black",
    fontSize: 15,
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
export default Screen1;
