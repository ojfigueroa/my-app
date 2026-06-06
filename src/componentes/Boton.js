import React, { Component } from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'

export class Boton extends Component {
  render() {
    const {text, ColorFondo, ColorFrente, onPress} = this.props;
    return (
      <Pressable style = {[styles.container,
      ColorFondo && {backgroundColor:ColorFondo}
      ]}
      onPress={onPress}
      >
            <Text style={[styles.text,
                ColorFrente && {color:ColorFrente}
            ]}>{text}</Text>
      </Pressable>
    )
  }
}


const styles = StyleSheet.create({
    container: {
      width: '40%',
      padding: 9,
      marginVertical: 3,
      alignItems: 'center',
      borderRadius: 25,
      color: 'white',
    },
    text: {
      fontSize: 14,
      color: 'white',
      fontWeight: 'bold',
    },
  
});
export default Boton
