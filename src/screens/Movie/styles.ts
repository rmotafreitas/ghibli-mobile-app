import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    marginTop: 55,
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 60,
  },
  right: {
    width: 20,
    height: 20,
  },
  title: {
    marginTop: 30,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.LG,
  },
  cover: {
    marginTop: 32,
    width: 300,
    height: 450,
    borderRadius: 16,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  detail: {
    textAlign: "justify",
    color: THEME.COLORS.CAPTION_400,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
  },
  buttonSection: {
    width: "100%",
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
