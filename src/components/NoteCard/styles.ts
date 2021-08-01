import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: theme.palette.light.card.bg,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    marginBottom: 10
  },
  cardContent: {
    flex: 1
  },
  cardTitle: {
    fontSize: 18,
  },
  cardSubtitle: {
    fontSize: 16,
    color: theme.palette.light.card.text,
  },
  fav: {
    justifyContent: 'flex-end'
  }
})