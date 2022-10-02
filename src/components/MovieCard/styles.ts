import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginRight: 24,
  },
  cover: {
    width: 236,
    height: 354,
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  footer: {
    width: "100%",
    height: 120,
    padding: 16,
    justifyContent: "flex-end",
  },
  name: {
    color: THEME.COLORS.WHITE_TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  original_title: {
    color: THEME.COLORS.WHITE_TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});
