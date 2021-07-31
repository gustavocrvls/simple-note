import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.light.bg,
    alignItems: "center",
    marginTop: Constants.statusBarHeight,
  },
})