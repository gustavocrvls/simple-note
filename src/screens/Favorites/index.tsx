import React from 'react';
import { Text, View } from "react-native";
import { BottomNavigation } from '../../components/BottomNavigation';
import { NoteCard } from '../../components/NoteCard';
import { styles } from './styles';

export function Favorites() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, width: '100%', padding: 10 }}>
        <Text style={{ fontSize: 26 }}>
          Favoritas
        </Text>
        <NoteCard
          title="Nota de Teste"
          subtitle="tetststsasfjsadfksdajfkasdjkfjkafklsdjfasdjfsdjfdsjfsdjfjkdsfkjsdfjksdkfj"
        />
      </View>
      <BottomNavigation active="Favorites" />
    </View>
  )
}