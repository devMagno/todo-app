import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
  },

  header: {
    height: 173,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D0D0D",
  },

  content: {
    paddingHorizontal: 24,
  },

  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  listHeaderItem: {
    fontSize: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  created: {
    color: "#4EA8DE",
    fontWeight: "bold",
  },

  done: {
    color: "#8284FA",
    fontWeight: "bold",
  },

  count: {
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    backgroundColor: "#333333",
  },

  countText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#D9D9D9",
  },

  emptyList: {
    paddingVertical: 48,
    padingHorizontal: 20,
    borderTopColor: "#333333",
    borderTopWidth: 1,
    alignItems: "center",
  },

  emptyListIcon: {
    marginBottom: 16,
  },

  emptyListText: {
    fontSize: 14,
    lineHeight: 19.6,
    color: "#808080",
  },

  emptyListTextBold: {
    fontWeight: "bold",
  },
})
