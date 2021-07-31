import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from "../../global/styles/theme";

interface NoteCardProps {
  title: string;
  subtitle: string;
  favorite?: boolean;
}

export function NoteCard({
  title,
  subtitle,
  favorite = false
}: NoteCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text numberOfLines={1} style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
      {
        favorite &&
        <View style={styles.fav}>
          <Icon name="star" color={theme.palette.primary} />
        </View>
      }
    </View>
  )
}