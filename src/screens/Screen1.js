import {
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import React, { useState, useRef } from "react";
import styles from "../constants/style";
export default function Screen1({ navigation }) {
  const [number, setNumber] = useState("");
  const numberInputRef = useRef(null);
  const handleNumber = () => {
    const parsedNumber = parseInt(number, 10);
    if (isNaN(parsedNumber) || parsedNumber < 1 || parsedNumber > 100) {
      alert("Please insert a number between 1 and 100");
    } else {
      numberInputRef.current.clear();
      navigation.navigate("Screen2", { number: parsedNumber });
    }
  };
  return (
    <SafeAreaView style={styles.bg}>
      <View style={style.topView}>
        <Text style={style.textTop}>Need some help?</Text>
      </View>
      <View style={styles.bottomView}>
        <Text
          style={styles.bigText}
        >
          Let's play a game
        </Text>
        <Text style={styles.textBottom}>
          Welcome to the Number Guessing Game!
          {"\n"}Insert your number and we will try to guess it.
        </Text>

        <TextInput
          ref={numberInputRef}
          style={styles.input}
          placeholder="Enter a number from 1 to 100"
          keyboardType="numeric"
          onChangeText={(e) => setNumber(e)}
        />
        <Pressable
          style={styles.startButton}
          onPress={handleNumber}
        >
          <Text
            style={styles.textButton}
          >
            Start game{" "}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
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
});
