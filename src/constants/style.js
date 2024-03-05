import { StyleSheet } from "react-native";

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
    alignSelf: "center",
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
  button: {
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: "rgb(100,134,48)",
    paddingLeft: 25,
    paddingRight: 25,
    color: "white",
  },
});
export default styles;
