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

export function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists notes (id integer primary key not null, title text, content text, is_starred boolean);"
      );
    });

    db.transaction((tx) => {
      tx.executeSql("insert into notes (title, content, is_starred) values (?, ?, ?)", ['Teste', 'teste teste', false])

      tx.executeSql("select * from notes", [], (_, { rows: { _array } }: any) => {
        setNotes(_array)
      }
      );
    })
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, width: '100%', padding: 10 }}>
        <Text style={{ fontSize: 26, paddingVertical: 20 }}>
          Minhas Notas
        </Text>
        <FlatList
          data={notes}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <NoteCard title={item.title} subtitle={item.content} />}
        />
      </View>
      <BottomNavigation active="Home" />
    </View>
  )
}