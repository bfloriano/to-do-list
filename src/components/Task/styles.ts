import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 64,
    width: 327,
    backgroundColor: "#262626",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 4,
    //borderColor: "red",
    //borderWidth: 1,
  },
  text: {
    color: "#f2f2f2",
    width: 230,
    right: 0,
  },
  checked: {
    color: "#808080",
    width: 230,
    right: 0,
    textDecorationLine: "line-through",
  },
});
