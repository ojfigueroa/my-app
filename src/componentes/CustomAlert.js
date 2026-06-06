import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Platform } from 'react-native';

export default function CustomAlert({ 
  visible, 
  title, 
  message, 
  onConfirm, 
  onCancel, 
  confirmText = "Aceptar", 
  cancelText = "Cancelar", 
  showCancel = false,
  tipo = "error"  // "error", "exito", "info"
}) {
  if (!visible) return null;

  const buttonsStyle = [
    styles.buttons, 
    { justifyContent: showCancel ? 'space-between' : 'center' }
  ];

  // Color e ícono según el tipo
  const config = {
    error:  { icono: '❌', color: '#ef4444', fondo: '#fef2f2' },
    rojo:   { icono: '🔴', color: '#ef4444', fondo: '#fef2f2' },
    exito:  { icono: '✅', color: '#22c55e', fondo: '#f0fdf4' },
    exitos: { icono: '✅', color: '#22c55e', fondo: '#f0fdf4' },
    info:   { icono: 'ℹ️', color: '#3b82f6', fondo: '#eff6ff' },
    gris:   { icono: '⚠️', color: '#64748b', fondo: '#f1f5f9' },
  };

  const { icono, color, fondo } = config[tipo] || config.error;

  return (
    <Modal transparent animationType="fade" statusBarTranslucent>
      <View style={styles.overlay}>
        <View style={[styles.card, { borderTopColor: color, borderTopWidth: 5 }]}>
          
          {/* Ícono */}
          <View style={[styles.iconoContainer, { backgroundColor: fondo }]}>
            <Text style={styles.icono}>{icono}</Text>
          </View>

          {/* Título */}
          <Text style={[styles.title, { color }]}>{title}</Text>

          {/* Mensaje */}
          <Text style={styles.message}>{message}</Text>
          
          {/* Botones */}
          <View style={buttonsStyle}>
            {showCancel && (
              <TouchableOpacity onPress={onCancel} style={[styles.btn, styles.btnCancel]}>
                <Text style={styles.btnTextCancel}>{cancelText}</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity 
              onPress={onConfirm} 
              style={[styles.btn, { backgroundColor: color }]}
            >
              <Text style={styles.btnText}>{confirmText}</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '88%',
    maxWidth: 360,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    ...Platform.select({
      ios:     { shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 10, shadowOffset: { width: 0, height: 5 } },
      android: { elevation: 10 },
      web:     { boxShadow: '0 8px 24px rgba(0,0,0,0.2)' },
    }),
  },
  iconoContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  icono: {
    fontSize: 36,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  message: {
    fontSize: 15,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  btn: {
    flex: 1,
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnCancel: {
    backgroundColor: '#f1f5f9',
    borderColor: '#cbd5e1',
    borderWidth: 1,
  },
  btnText: { 
    color: '#fff', 
    fontSize: 15, 
    fontWeight: '700' 
  },
  btnTextCancel: { 
    color: '#475569', 
    fontSize: 15, 
    fontWeight: '500' 
  },
});