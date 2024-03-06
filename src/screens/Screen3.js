import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import styles from "../constants/style";
function Screen3(props) {
  return (
    <SafeAreaView style={styles.bg}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.bottomViewCustom}>
          <Text style={styles.bigText}>{props.route.params.message}</Text>
          <Pressable
            onPress={() => {
              props.navigation.navigate("Screen1");
            }}
            style={styles.startButton}
            padding={20}
          >
            <Text style={styles.textButton}>
              {props.route.params.buttonContent}
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Screen3;
