import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../../assets/users.png';
import CampoTexto from '../componentes/CampoTexto';
import Boton from '../componentes/Boton';
import CustomAlert from '../componentes/CustomAlert';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import{ API_URLS } from '../config/config';


const Login = () => {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

const [conexionDB, setConexionDB] = useState({
estado: "verificando",
mensaje: "Verificando conexión...",
datos: null
});

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
    if (alertTipo === 'exito') navigation.navigate('Inicio');
  };

  const entrarfb    = () => mostrarAlerta('Facebook', 'Función próximamente disponible', 'info');
  const entrarG     = () => mostrarAlerta('Google',   'Función próximamente disponible', 'rojo');
  const entrarapple = () => mostrarAlerta('Apple',    'Función próximamente disponible', 'gris');

  const verificaruser = () => {
    if (!usuario || !clave) {
      mostrarAlerta('Campos vacíos', 'Por favor ingresa usuario y clave', 'error');
      return;
    }
    if (usuario === 'admin' && clave === 'admin') {
      mostrarAlerta('¡Bienvenido!', 'Ingreso exitoso', 'exito');
    } else {
      mostrarAlerta('Acceso denegado', 'Usuario o contraseña incorrectos', 'error');
    }
  };


//metodo oara verificar conexion a la base de datos
const verificarConexionBD = async () => {
  setConexionDB({ estado: "verificando", mensaje: "Verificando conexión...", datos: null });

try {
const response = await fetch(API_URLS.CHECKBD, {
method: 'GET',
headers: {'Accept': 'application/json'},
});

const textoRespuesta = await response.text();
console.log( textoRespuesta);
if (!response.ok) {
  throw new Error(`Error http: ${response.status}`);
}
const data = JSON.parse(textoRespuesta);
if (data.conectado){
setConexionDB({ estado: "conectado", mensaje: "Conexión exitosa", datos: data });
//mostrarAlerta('¡Bienvenido!', 'Ingreso exitoso', 'exito');
mostrarAlerta("Conexión a la base de datos exitosa", "", 'exitos');

}

}catch (error) {
console.error("Error al verificar conexión:", error.message);
}
}

useEffect(() => {
verificarConexionBD();
}, []);

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

      {/* Ícono Crear Cuenta arriba a la derecha */}
      <TouchableOpacity
        style={styles.btnCrear}
        onPress={() => navigation.navigate('CrearCuenta')}>
        <View style={styles.iconoCrear}>
          <FontAwesome name="user" size={16} color="#339900" />
          <FontAwesome name="plus" size={10} color="#339900" style={styles.plus} />
        </View>
        <Text style={styles.txtCrear}>Crear{'\n'}Cuenta</Text>
      </TouchableOpacity>

      <Image source={Logo} style={styles.logo} />

      <CampoTexto placeholder="Ingrese Usuario" maxLength={10}
        secureTextEntry={false} value={usuario} setValor={setUsuario} />
      <CampoTexto placeholder="Ingrese Clave" maxLength={10}
        secureTextEntry={true} value={clave} setValor={setClave} />

      <Boton text="Entrar" ColorFondo='#0000ff' onPress={verificaruser} />

      {/* Íconos sociales */}
      <Text style={styles.oText}>— Entrar con —</Text>
      <View style={styles.socialRow}>
        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: '#e7eaf4' }]} onPress={entrarfb}>
          <FontAwesome name="facebook" size={28} color="#4765a9" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: '#fae9ea' }]} onPress={entrarG}>
          <FontAwesome name="google" size={28} color="#dd4d44" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: '#e8e3e3' }]} onPress={entrarapple}>
          <FontAwesome name="apple" size={28} color="#363636" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('NewPassword')}>
        <Text style={styles.olvidaste}>¿Olvidaste tu Contraseña?</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 50,
  },
  // Botón crear cuenta arriba derecha
  btnCrear: {
    position: 'absolute',
    top: 10,
    right: 12,
    backgroundColor: '#e8f5e9',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  iconoCrear: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  plus: {
    marginLeft: 1,
    marginTop: -2,
  },
  txtCrear: {
    color: '#339900',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 2,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  oText: {
    color: '#aaa',
    fontSize: 13,
    marginVertical: 10,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 15,
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
  olvidaste: {
    color: '#dd4d44',
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Login;