import { RouteProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, BackHandler, } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { db } from "../../database/connection";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Note: { id?: string };
  Favorite: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Note'>;

type Note = {
  id: number;
  title: string;
  content: string;
  is_starred: boolean;
}

export function Note({ route }: Props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
    is_starred: false
  } as Note);
  const { params } = route;
  const id = params?.id;
  const navigation = useNavigation();

  function deleteNote() {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM notes where id = ?",
        [id]
      );
    });
    navigation.goBack();
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (!id) {
          db.transaction((tx) => {
            if (note.title && note.content)
              tx.executeSql(
                "insert into notes (title, content, is_starred) values (?, ?, ?)",
                [note.title, note.content, note.is_starred]
              )
          })
        } else {
          db.transaction((tx) => {
            if (note.title && note.content)
              tx.executeSql(
                "update notes set title = ?, content = ?, is_starred = ? where id = ?",
                [note.title, note.content, note.is_starred, id]
              )
          })
        }

        return false
      }
    );

    return () => backHandler.remove();
  }, [note]);

  useEffect(() => {
    if (!id) return

    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM notes where id = ?",
        [id],
        (_, { rows: { _array } }: any) => {
          setNote(_array[0])
        }
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Icon name="left" size={24} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          {
            id
              ?
              <TouchableOpacity activeOpacity={0.6} onPress={deleteNote}>
                <Icon name="delete" size={24} style={{ marginRight: 10 }} />
              </TouchableOpacity>
              :
              <></>
          }
          <TouchableOpacity activeOpacity={0.6} onPress={() => setNote({ ...note, is_starred: !note.is_starred })}>
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