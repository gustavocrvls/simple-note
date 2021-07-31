import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    width: 80,
  },
  activeContainer: {
    borderTopColor: theme.palette.primary,
    borderTopWidth: 2,
  },
  label: {
    color: theme.palette.light.card.text
  },
  activeLabel: {
    color: theme.palette.primary
  }
})