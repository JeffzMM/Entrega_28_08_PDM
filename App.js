import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import NavContato from './navigation/NavContato';


export default function App() {
  return (
    <NavContato/>
  );
}

const styles = StyleSheet.create({
  telaPrincipal: {
    backgroundColor: '#fff',
    padding: 50
  },
  itemListaView: {
    backgroundColor: '#ddd',
    borderWidth: 3,
    marginBottom: 10,
  }
});
