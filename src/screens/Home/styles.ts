import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 24,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  formEvent: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 36,
    marginBottom: 42,
  },
  inputEvent: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FCFDFE",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonEvent: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31FC67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextEvent: {
    color: "#000",
    fontSize: 24,
  },
  listEmptyText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
});
