//export const API_BASE_URL = "http://localhost/movil2";// base de datos localhost
//export const API_BASE_URL = "http://localhost/movil2"; //base de datos nube
//export const API_BASE_URL = "http://localhost/movil2"; //base de datos en casa
export const API_BASE_URL = "http://192.168.1.9/movil2"; //base de datos en mi celular

export const API_URLS = {
  CHECKBD: `${API_BASE_URL}/api/auth/checkbd.php`,
  LOGIN: `${API_BASE_URL}/api/auth/login.php`,
  REGISTRAR_BITACORA: `${API_BASE_URL}/core/logger.php`,
  REGISTRAR_DISPOSITIVO: `${API_BASE_URL}/core/dispositivo.php`
  };
  
  