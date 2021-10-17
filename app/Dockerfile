FROM node

# Definir puertos y host por defecto para la aplicación y la BD
ARG app_port=3000
ARG db_host=mysql_db
ARG db_port=3306

# Variales de entorno para el servidor
ENV APP_PORT=${app_port}
ENV DB_HOST=${db_host}}
ENV DB_PORT=${db_port}}

# Agregar dependencias para su instalación
COPY ["package.json", "package-lock.json", "/usr/src/"]

# Directorio de trabajo para el contenedor
WORKDIR /usr/src

# Instalar dependencias de node con npm
RUN npm install

# Funcionalidades principales de la aplicación
COPY ["app.js", "/usr/src/"]
COPY ["./config/db.config.js", "/usr/src/config/"]
COPY ["./db/model.js", "/usr/src/db/"]
COPY ["./routes/developers.js", "/usr/src/routes/"]

#exponer el puerto, en este caso 3000
EXPOSE ${app_port}

#comando
CMD ["node", "app.js"]