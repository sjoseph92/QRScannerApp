import { StyleSheet }  from "react-native";

export const styles = StyleSheet.create({
  TitleText: {
    color: "red",
    textAlign: "center",
    flexDirection: "column",
    fontSize: 50,
    fontFamily: "AvenirNext-Heavy"
  },
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: "column"
  },

  ButtonStyle: {
    height: 50,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red"
  },
  TextStyle: {
    color: "red",
    textAlign: "center"
  },
  textInput: {
    height: 40,
    fontSize: 20,
    width: "90%",
    borderColor: "#9b9b9b",
    borderBottomWidth: 1,
    marginTop: 8,
    marginVertical: 15,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 18,
    marginRight: 30
  }
});