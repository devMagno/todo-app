import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  title: {
    flex: 1,
    fontSize: 16,
    color: "#FFF",
    marginLeft: 16,
  },

  removeButton: {
    width: 56,
    height: 56,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E23C44",
  },

  removeButtonText: {
    color: "#FFF",
    fontSize: 24,
  },
})