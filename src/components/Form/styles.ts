import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 48,
  },

  title: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },

  formWrapper: {
    marginBottom: 42,
    flexDirection: "row",
  },

  input: {
    color: "#FFF",
    flex: 1,
    height: 56,
    padding: 16,
    borderRadius: 5,
    marginRight: 12,
    backgroundColor: "#1F1E25",
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#31CF67",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
})
