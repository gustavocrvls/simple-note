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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    padding: 8
  },
  title: {
    minHeight: 40,
    marginHorizontal: 12,
    padding: 10,
    width: '100%',
    fontSize: 28
  },
  text: {
    minHeight: 40,
    padding: 10,
    width: '100%',
    fontSize: 20
  },
})