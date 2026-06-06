import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Inicio = () => {
  return (
    <View style={styles.root}>
      <Text>Pantalla de Inicio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eef2f4',
  },
});

export default Inicio;