import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export class CampoTexto extends Component {
  render() {
    const { placeholder } = this.props;
    const { maxLength } = this.props;
    const { secureTextEntry } = this.props;
    const { value } = this.props;
    const { setValor } = this.props;

    return (
      <View style={styles.container}>
        {/* Ícono según el tipo de campo */}
        <Text style={styles.icono}>
          {secureTextEntry ? '🔒' : 
           placeholder.toLowerCase().includes('correo') || 
           placeholder.toLowerCase().includes('email') ? '📧' : '👤'}
        </Text>

        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#a0aec0"
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={setValor}
          style={styles.input}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: '85%',
    borderColor: '#4169e1',
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 14,
    marginVertical: 8,
    height: 52,
    // Sombra
    shadowColor: '#4169e1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  icono: {
    fontSize: 18,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#1a202c',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default CampoTexto;