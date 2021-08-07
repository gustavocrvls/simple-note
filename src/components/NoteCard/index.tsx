import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from "../../global/styles/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface NoteCardProps {
  id: string;
  title: string;
  subtitle: string;
  isStarred?: boolean;
}

export function NoteCard({
  id,
  title,
  subtitle,
  isStarred = false
}: NoteCardProps) {
  const navigation = useNavigation();

  function openNote() {
    navigation.navigate('Note', {
      id 
    });
  }

  return (
    <TouchableOpacity onPress={openNote} activeOpacity={0.7}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text numberOfLines={1} style={styles.cardSubtitle}>{subtitle}</Text>
        </View>
        {
          isStarred
          ?
          <View style={styles.fav}>
            <Icon name="star" color={theme.palette.primary} />
          </View>
          :
          <></>
        }
      </View>
    </TouchableOpacity>
  )
}