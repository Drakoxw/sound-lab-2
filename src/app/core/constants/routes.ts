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
export const PATHS_FULL_CLIENT = {
  PUBLIC: {
    HOME: {
      path: `/${PATHS_PUBLIC.HOME}`,
      title: 'Inicio',
    },
    LOGIN: {
      path: `/${PATHS_PUBLIC.LOGIN}`,
      title: 'Login',
    },
    CONTACT_US: {
      path: `/${PATHS_PUBLIC.CONTACT_US}`,
      title: 'Contactanos'
    },
  },
  PRIVATE: {
    ITEMS: {
      path: `/${PATHS_PRIVATE.ROOT}/${PATHS_PRIVATE.ITEMS}`,
      title: 'Crear Items'
    },
    TAGS: {
      path: `/${PATHS_PRIVATE.ROOT}/${PATHS_PRIVATE.TAGS}`,
      title: 'Crear Etiquetas'
    },
    ADMIN_IMAGES: {
      path: `/${PATHS_PRIVATE.ROOT}/${PATHS_PRIVATE.ADMIN_IMAGES}`,
      title: 'Admin Imagenes'
    },
    DEVELOPER: {
      path: `/${PATHS_PRIVATE.ROOT}/${PATHS_PRIVATE.DEVELOPER}`,
      title: 'Developer'
    },
  }
};
