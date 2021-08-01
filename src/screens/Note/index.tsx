import React, { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, BackHandler, Alert } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { db } from "../../database/connection";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Note = {
  id: number;
  title: string;
  content: string;
  is_starred: boolean;
}

export function Note() {
  const [note, setNote] = useState({ title: '', content: '', is_starred: false} as Note);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        db.transaction((tx) => {
          if (note.title && note.content)
          tx.executeSql(
            "insert into notes (title, content, is_starred) values (?, ?, ?)",
            [note.title, note.content, note.is_starred]
          )
        })

        return false
      }
    );

    return () => backHandler.remove();
  }, [note]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Icon name="left" size={24} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="delete" size={24} style={{ marginRight: 10 }} />
          <TouchableOpacity activeOpacity={0.6} onPress={() => setNote({...note, is_starred: !note.is_starred})}>
            {
              note.is_starred
                ?
                <Icon name="star" color={theme.palette.primary} size={24} />
                :
                <Icon name="staro" color={theme.palette.light.title} size={24} />
            }
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        style={styles.title}
        placeholder="Título..."
        value={note.title}
        onChangeText={text => setNote({ ...note, title: text })}
      />
      <TextInput
        style={styles.text}
        placeholder="comece escrevendo alguma coisa :)"
        value={note.content}
        onChangeText={text => setNote({ ...note, content: text })}
        multiline
      />
    </View>
  )
}