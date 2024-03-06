import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ItemScoreComponent from "../components/itemScoreComponent";
import styles from "../constants/style";
import { Alert } from "react-native";
let max = 100;
let min = 1;
let currentGuess;
let i = 0;
let data = [{ name: currentGuess, key: i }];
function Screen2(props) {
  const userResult = props.route.params.number;
  const [data, setData] = useState([]);
  const [currentGuess, setCurrentGuess] = useState(randomInt(min, max));
  if (currentGuess === userResult) {
    max = 100;
    min = 1;
    i = 0;
    for (let i = data.length - 1; i >= 0; i--) {
      data.pop();
    }
    props.navigation.navigate("Screen3", {
      message: "You win!",
      buttonContent: "Play again",
    });
  }
  const handleAlert = (message) => {
    Alert.alert("Are you sure?", message, [
      {
        text: "Yes",
        onPress: () => {
          max = 100;
          min = 1;
          i = 0;
          for (let i = data.length - 1; i >= 0; i--) {
            data.pop();
          }
          props.navigation.navigate("Screen3", {
            message: "You lose!",
            buttonContent: "Now you have to play it again. Told ya!",
          });
        },
      },
      { text: "No", onPress: () => console.log("No") },
    ]);
  };
  const handleReload = () => {
    setCurrentGuess(randomInt(min, max));
    i++;
    data.push({ name: currentGuess, key: i });
  };
  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.topView}>
        <Text style={styles.textTop}>Opponent's Guess</Text>
      </View>
      <View style={styles.bottomView}>
        <Text
          style={StyleSheet.create({
            color: "#F09D5F",
            fontSize: 35,
            fontWeight: "bold",
            marginTop: 40,
            alignSelf: "center",
            borderRadius: 15,
            borderColor: "#F09D5F",
            borderWidth: 5,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 120,
            paddingRight: 120,
          })}
        >
          {currentGuess}
        </Text>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            borderColor: "#F09D5F",
            borderWidth: 1,
            marginTop: 40,
            borderRadius: 15,
          }}
        >
          <Text style={styles.textBottom}>
            Is the number higher or lower than {currentGuess}?
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                if (currentGuess > userResult) {
                  handleAlert(
                    "Are you sure the result is bigger than" + currentGuess
                  );
                } else {
                  min = currentGuess;
                  handleReload();
                }
              }}
            >
              <Ionicons name="arrow-up" size={50} style={styles.button} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                if (currentGuess < userResult) {
                  handleAlert(
                    "Are you sure the result is smaller than" + currentGuess
                  );
                } else {
                  max = currentGuess;
                  handleReload();
                }
              }}
            >
              <Ionicons name="arrow-down" size={50} style={styles.button} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          style={{ marginTop: 20 }}
          data={data}
          renderItem={({ item }) =>
            ItemScoreComponent({ guess: item.name, key: item.key })
          }
        />
      </View>
    </SafeAreaView>
  );
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min - 1)) + min + 1;
}
export default Screen2;
