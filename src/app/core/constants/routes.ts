export interface RoutesClient {
  root: '';
  home: string;
  contactUs: string;
  developer: string;
  login: string;
  admin: string;
}

export const MODULES = {
  PUBLIC: '',
  USER: 'user',
};

// RUTAS EN EL ROUTING DEL MODULO
export const PATHS_MODULE_CLIENT: RoutesClient = {
  root: '',
  home: 'inicio',
  contactUs: 'contactanos',
  developer: 'desarrollador',
  login: 'login',
  admin: 'admin'
};

// RUTAS COMPLETAS PARA EL ROUTE LINK
export const PATHS_FULL_CLIENT: RoutesClient = {
  root: '',
  home: `${MODULES.PUBLIC}/${PATHS_MODULE_CLIENT.home}`,
  contactUs: `${MODULES.PUBLIC}/${PATHS_MODULE_CLIENT.contactUs}`,
  login: `${MODULES.PUBLIC}/${PATHS_MODULE_CLIENT.login}`,
  developer: `${MODULES.USER}/${PATHS_MODULE_CLIENT.developer}`,
  admin: `${MODULES.USER}/${PATHS_MODULE_CLIENT.admin}`
};
