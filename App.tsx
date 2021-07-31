import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}