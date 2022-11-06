import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#262626",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    paddingLeft: 16,
    paddingRight: 8,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#333333",
  },

  checkbox: { borderRadius: 100, width: 18, height: 18 },

  title: {
    flex: 1,
    fontSize: 14,
    color: "#FFF",
    marginLeft: 12,
    marginRight: 8,
  },

  strikethrough: {
    color: "#808080",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },

  removeButton: {
    width: 32,
    alignItems: "center",
    justifyContent: "center",
  },
})
