# Usa una imagen de Node.js LTS como base
FROM node:20 AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install -g npm@10.4.0
RUN npm install --legacy-peer-deps

# Copia el código fuente de la aplicación
COPY . .

# Construye la aplicación Angular
RUN npm run serve:ssr:sound-lab-2

# Expon el puerto 4000 (o el puerto que hayas configurado en tu servidor)
# EXPOSE 4000

# # Ejecuta el servidor de Angular Universal al iniciar el contenedor
# CMD ["npm", "run", "start"]
