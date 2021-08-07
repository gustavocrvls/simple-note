import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import { BottomNavigation } from '../../components/BottomNavigation';
import { NoteCard } from '../../components/NoteCard';
import { db } from '../../database/connection';
import { styles } from './styles';

type Note = {
  id: number;
  title: string;
  content: string;
  is_starred: boolean;
}

export function Favorites() {
  const [notes, setNotes] = useState<Note[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) return

    db.transaction((tx) => {
      tx.executeSql("select * from notes where is_starred = ?", [true], (_, { rows: { _array } }: any) => {
        setNotes(_array)
      });
    })
  }, [isFocused])

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, width: '100%', padding: 10 }}>
        <Text style={{ fontSize: 26, paddingVertical: 20 }}>
          Favoritas
        </Text>
        <FlatList
          data={notes}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <NoteCard id={String(item.id)} title={item.title} subtitle={item.content} isStarred={item.is_starred} />}
        />
      </View>
      <BottomNavigation active="Favorites" />
    </View>
  )
}