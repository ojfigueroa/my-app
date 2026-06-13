//import React from 'react';
//import { View, Text, StyleSheet } from 'react-native';

//const Inicio = () => {
  //return (
    //<View style={styles.root}>
      //<Text>Pantalla de Inicio</Text>
    //</View>
  //);
//};

//const styles = StyleSheet.create({
  //root: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#eef2f4',
  //},
//});

//export default Inicio;
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [categoria, setCategoria] = useState('');
  const [error, setError] = useState('');

  const calcularIMC = () => {
    // Limpiar resultados anteriores
    setError('');
    setImc(null);
    setCategoria('');

    // Validación de campos vacíos
    if (!peso || !altura) {
      setError('Por favor ingresa el peso y la altura.');
      return;
    }

    const p = parseFloat(peso);
    const a = parseFloat(altura);

    // Validación de valores numéricos
    if (isNaN(p) || isNaN(a)) {
      setError('Ingresa valores numéricos válidos.');
      return;
    }

    // Validación de valores positivos
    if (p <= 0 || a <= 0) {
      setError('El peso y la altura deben ser mayores a 0.');
      return;
    }

    // Validación de rango razonable
    if (p > 300) {
      setError('El peso ingresado no es válido.');
      return;
    }

    if (a > 3 || a < 0.5) {
      setError('La altura debe estar entre 0.5 y 3 metros.');
      return;
    }

    // Cálculo del IMC
    const resultado = p / (a * a);

    // Determinar categoría
    let cat = '';
    if (resultado < 18.5) cat = 'Bajo peso';
    else if (resultado < 24.9) cat = 'Peso normal';
    else if (resultado < 29.9) cat = 'Sobrepeso';
    else cat = 'Obesidad';

    setImc(resultado.toFixed(2));
    setCategoria(cat);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>

        <Text style={styles.titulo}>Calculadora de IMC</Text>

        <Text style={styles.label}>Ingresa tu peso (kg):</Text>
        <TextInput
          style={styles.input}
          placeholder="Ejemplo: 70.5"
          keyboardType="decimal-pad"
          value={peso}
          onChangeText={setPeso}
        />

        <Text style={styles.label}>Ingresa tu altura (m):</Text>
        <TextInput
          style={styles.input}
          placeholder="Ejemplo: 1.75"
          keyboardType="decimal-pad"
          value={altura}
          onChangeText={setAltura}
        />

        <View style={styles.botonContainer}>
          <Button title="Calcular IMC" onPress={calcularIMC} color="#007AFF" />
        </View>

        <Text style={styles.resultadoValor}>
          IMC: {imc !== null ? imc : '--'}
        </Text>
        <Text style={styles.resultadoCategoria}>
          Categoría: {categoria !== '' ? categoria : '--'}
        </Text>

        <Text style={styles.mensajeError}>{error}</Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  formContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
    color: '#333333',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#555555',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 24,
  },
  botonContainer: {
    marginBottom: 32,
  },
  resultadoValor: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#007AFF',
  },
  resultadoCategoria: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 16,
    color: '#333333',
  },
  mensajeError: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FF0000',
    minHeight: 24,
  }
});