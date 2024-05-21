import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#0D0D0D",
    alignItems: "center",
  },
  logo: {
    marginVertical: 100,
  },
  bottomHome: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1A1A1A",
    zIndex: -1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerInput: {
    flexDirection: "row",
    position: "absolute",
    top: 200,
  },
  input: {
    width: 271,
    height: 55,
    backgroundColor: "#262626",
    borderRadius: 6,
    marginRight: 6,
    paddingLeft: 12,
    fontSize: 16,
    color: "#f2f2f2",
  },
  buttom: {
    width: 52,
    height: 52,
    backgroundColor: "#1e6f9f",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyTasksLabel: {
    marginTop: 80,
    alignItems: "center",
  },
  taskLabelBold: {
    marginTop: 16,
    fontWeight: "bold",
    color: "#808080",
  },
  taskLabel: {
    color: "#808080",
  },
});
