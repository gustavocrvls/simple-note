import React from 'react';
import { Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '../../global/styles/theme';

interface BottomNavigationProps {
  active: string;
}

export function BottomNavigation({ active }: BottomNavigationProps) {
  return (
    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

      <TouchableOpacity>
        <View style={{ padding: 10, alignItems: 'center', width: 80, borderTopColor: theme.palette.primary, borderTopWidth: 2 }}>
          <Icon name="home" size={20} color={theme.palette.primary}></Icon>
          <Text style={{ color: theme.palette.primary }}>Início</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}>
        <View style={{ alignItems: 'center', width: 80 }}>
          <View style={{ backgroundColor: theme.palette.primary, borderRadius: 12, padding: 2 }}>
            <Icon name="plus" size={40} color="#fff"></Icon>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}>
        <View style={{ padding: 10, alignItems: 'center', width: 80 }}>
          <Icon name="star" size={20}></Icon>
          <Text>Favoritas</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}