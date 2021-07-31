import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

interface BottomNavigationButtonProps {
  to: string;
  icon: string;
  label: string;
  active?: boolean;
}

export function BottomNavigationButton({
  to,
  icon,
  label,
  active = false
}: BottomNavigationButtonProps) {
  const navigation = useNavigation();

  function natigateTo() {
    navigation.navigate(to);
  }

  return (
    <TouchableOpacity activeOpacity={0.4} onPress={natigateTo}>
      <View style={active ? {...styles.container, ...styles.activeContainer} : styles.container}>
        <Icon name={icon} size={20} color={ active ? theme.palette.primary : theme.palette.light.text} />
        <Text style={active ? {...styles.label, ...styles.activeLabel} : styles.label}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
