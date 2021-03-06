import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from "../screens/Home";
import { Favorites } from '../screens/Favorites';
import { Note } from '../screens/Note';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: 'transparent'
          }
        }}
      >
        <Screen
          name="Home"
          component={Home}
        />
        <Screen
          name="Favorites"
          component={Favorites}
        />
        <Screen
          name="Note"
          component={Note}
        />
      </Navigator>
    </NavigationContainer>
  );
}
