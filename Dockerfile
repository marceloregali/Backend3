# Imagen base de Node.js
FROM node:20

# Establecer directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Expone el puerto en el que corre tu servidor
EXPOSE 8080

# Comando para correr la app
CMD ["node", "app.js"]
