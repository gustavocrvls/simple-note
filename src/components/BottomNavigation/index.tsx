import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '../../global/styles/theme';
import { BottomNavigationButton } from '../BottomNavigationButton';

interface BottomNavigationProps {
  active: string;
}

export function BottomNavigation({ active }: BottomNavigationProps) {
  const navigation = useNavigation();

  function natigateTo(screen: string) {
    navigation.navigate(screen);
  }

  return (
    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

      <BottomNavigationButton
        to="Home"
        icon="home"
        label="Início"
        active={active === "Home"}
      />

      <TouchableOpacity activeOpacity={0.7} onPress={() => natigateTo('Note')}>
        <View style={{ alignItems: 'center', width: 80 }}>
          <View style={{ backgroundColor: theme.palette.primary, borderRadius: 12, padding: 2 }}>
            <Icon name="plus" size={40} color="#fff"></Icon>
          </View>
        </View>
      </TouchableOpacity>

      <BottomNavigationButton
        to="Favorites"
        icon="star"
        label="Favoritos"
        active={active === "Favorites"}
      />

    </View>
  )
}