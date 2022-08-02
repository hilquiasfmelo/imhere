import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  nameParticipant: {
    flex: 1,
    color: "#FFF",
    fontSize: 16,
    padding: 16,
  },
  buttonRemoveParticipant: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextRemoveParticipant: {
    color: "#000",
    fontSize: 30,
  },
});
