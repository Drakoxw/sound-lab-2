export interface RoutesClient {
  PUBLIC: {
    HOME: string,
    LOGIN: string,
    CONTACT_US: string,
  },
  PRIVATE: {
    ITEMS: string,
    TAGS: string,
    ADMIN_IMAGES: string,
    DEVELOPER: string,
  }
}

const PATHS_PRIVATE = {
  ROOT: 'admin',
  ITEMS: 'items',
  TAGS: 'etiquetas',
  ADMIN_IMAGES: 'admin-imagenes',
  DEVELOPER: 'dev',
}

const PATHS_PUBLIC = {
  ROOT: '',
  HOME: 'inicio',
  LOGIN: 'login',
  CONTACT_US: 'contactanos',
}

// RUTAS EN EL ROUTING DEL MODULO
export const PATHS_MODULE_CLIENT = {
  PUBLIC: PATHS_PUBLIC,
  PRIVATE: PATHS_PRIVATE
};

// RUTAS COMPLETAS PARA EL ROUTE LINK
export const PATHS_FULL_CLIENT: RoutesClient = {
  PUBLIC: {
    HOME: `/${PATHS_PUBLIC.HOME}`,
    LOGIN: `/${PATHS_PUBLIC.LOGIN}`,
    CONTACT_US: `/${PATHS_PUBLIC.CONTACT_US}`,
  },
  PRIVATE: {
    ITEMS: `/${PATHS_PRIVATE.ROOT}/${PATHS_PRIVATE.ITEMS}`,
    TAGS: `/${PATHS_PRIVATE.ROOT}/${PATHS_PRIVATE.TAGS}`,
    ADMIN_IMAGES: `/${PATHS_PRIVATE.ROOT}/${PATHS_PRIVATE.ADMIN_IMAGES}`,
    DEVELOPER: `/${PATHS_PRIVATE.ROOT}/${PATHS_PRIVATE.DEVELOPER}`,
  }
};
