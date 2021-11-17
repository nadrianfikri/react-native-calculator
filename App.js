import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Content from './src/components/Content';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Content style={styles.item} />
      <TouchableOpacity onPress={() => alert('haloo:')}>
        <Text>tombol</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
  },
});
