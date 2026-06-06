import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../../assets/users.png';
import CampoTexto from '../componentes/CampoTexto';
import Boton from '../componentes/Boton';
import CustomAlert from '../componentes/CustomAlert';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const NewPassword = () => {
  const navigation = useNavigation();

  const [claveAnterior, setClaveAnterior] = useState('');
  const [nuevaClave, setNuevaClave] = useState('');

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitulo, setAlertTitulo] = useState('');
  const [alertMensaje, setAlertMensaje] = useState('');
  const [alertTipo, setAlertTipo] = useState('error');

  const mostrarAlerta = (titulo, mensaje, tipo = 'error') => {
    setAlertTitulo(titulo);
    setAlertMensaje(mensaje);
    setAlertTipo(tipo);
    setAlertVisible(true);
  };

  const handleAlertConfirm = () => {
    setAlertVisible(false);
    if (alertTipo === 'exito') navigation.navigate('Login');
  };

  const entrarfb    = () => mostrarAlerta('Facebook', 'Función próximamente disponible', 'info');
  const entrarG     = () => mostrarAlerta('Google',   'Función próximamente disponible', 'rojo');
  const entrarapple = () => mostrarAlerta('Apple',    'Función próximamente disponible', 'gris');

  const guardar = () => {
    if (!claveAnterior || !nuevaClave) {
      mostrarAlerta('Campos vacíos', 'Por favor completa todos los campos', 'error');
      return;
    }
    if (nuevaClave.length < 4) {
      mostrarAlerta('Clave muy corta', 'Mínimo 4 caracteres', 'naranja');
      return;
    }
    mostrarAlerta('¡Éxito!', 'Contraseña actualizada correctamente', 'exito');
  };

  return (
    <View style={styles.root}>

      <CustomAlert
        visible={alertVisible}
        title={alertTitulo}
        message={alertMensaje}
        tipo={alertTipo}
        confirmText="Aceptar"
        onConfirm={handleAlertConfirm}
      />

      {/* Botón INGRESAR arriba a la derecha */}
      <TouchableOpacity
        style={styles.btnIngresar}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.txtIngresar}>¿Tienes cuenta?{'\n'}INGRESAR</Text>
      </TouchableOpacity>

      <Image source={Logo} style={styles.logo} />
      <Text style={styles.titulo}>Cambio de Clave</Text>

      <CampoTexto placeholder="Clave Anterior" maxLength={20}
        secureTextEntry={true} value={claveAnterior} setValor={setClaveAnterior} />
      <CampoTexto placeholder="Nueva Clave" maxLength={20}
        secureTextEntry={true} value={nuevaClave} setValor={setNuevaClave} />

      <Boton text="Guardar" ColorFondo='#0000ff' onPress={guardar} />

      {/* Íconos sociales en fila */}
      <Text style={styles.oText}>— Entrar con —</Text>

      <View style={styles.socialRow}>

        <TouchableOpacity
          style={[styles.socialBtn, { backgroundColor: '#e7eaf4' }]}
          onPress={entrarfb}>
          <FontAwesome name="facebook" size={28} color="#4765a9" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.socialBtn, { backgroundColor: '#fae9ea' }]}
          onPress={entrarG}>
          <FontAwesome name="google" size={28} color="#dd4d44" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.socialBtn, { backgroundColor: '#e8e3e3' }]}
          onPress={entrarapple}>
          <FontAwesome name="apple" size={28} color="#363636" />
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 50,
  },
  btnIngresar: {
    position: 'absolute',
    top: 10,
    right: 12,
    backgroundColor: '#e8e8e8',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  txtIngresar: {
    color: '#808080',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 6,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'darkblue',
    marginBottom: 10,
  },
  oText: {
    color: '#aaa',
    fontSize: 13,
    marginVertical: 8,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 10,
  },
  socialBtn: {
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default NewPassword;