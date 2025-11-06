# 🐾 Adoptme - Backend

![Node.js](https://img.shields.io/badge/Node.js-v20.18.0-brightgreen)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue)
![Tests](https://img.shields.io/badge/Tests-Passing-brightgreen)
![License](https://img.shields.io/badge/License-MIT-green)

Backend del proyecto **Adoptme**, una aplicación para adopción de mascotas.  
Construido con **Node.js**, **Express**, **Mongoose** y **MongoDB Atlas**, listo para ejecutarse con **Docker**.

---

## 🔹 Tecnologías

- Node.js v20.x  
- Express  
- Mongoose  
- MongoDB Atlas  
- Docker  
- Mocha & Supertest (para testing)

---

## 🚀 Instalación local

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/RecursosBackend-Adoptme.git
cd RecursosBackend-Adoptme
```
### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Crear archivo .env en la raíz

MONGO_URL=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/<nombreBD>?retryWrites=true&w=majority
PORT=8080


### 4️⃣ Correr la app en modo desarrollo

```bash
npm run dev
```
La app correrá en http://localhost:8080 por defecto.

---

## 🐳 Docker

### 🔧 Construir la imagen
```bash
docker build -t mrapela/app-proyectofinal-image .
```
▶️ Ejecutar el contenedor
Si el puerto 8080 está ocupado, podés mapearlo a otro (por ejemplo 3000):

```bash
docker run -d -p 3000:8080 --name app-proyectofinal-contenedor mrapela/app-proyectofinal-image
```
Luego accedé en tu navegador a:
### 👉 http://localhost:3000

## 📦 Usar imagen desde Docker Hub
```bash

docker pull mrapela/app-proyectofinal-image:latest
docker run -d -p 3000:8080 mrapela/app-proyectofinal-image
```

---
## 🧪 Tests funcionales
El proyecto incluye tests funcionales desarrollados con **Mocha**, **Chai** y **Supertest**.

- Se testean todos los endpoints del router `adoption.router.js`.
- Incluyen casos de **éxito** y **error**.
- Para ejecutarlos:

```bash
npm test
```
---

## 🗄️ MongoDB Atlas
- Crear un cluster en MongoDB Atlas.

- Configurar IP Whitelist (tu IP o 0.0.0.0/0 para testing).

- Crear un usuario con permisos de lectura/escritura.

- Copiar la conexión en tu archivo .env como MONGO_URL.

---

## ⚡ Scripts disponibles
```json

{
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js",
    "test": "mocha ./test/**/*.test.js --exit"
  }
}
```
npm start → producción

npm run dev → desarrollo con hot-reload

npm test → ejecutar tests

---

## ✅ Dockerfile recomendado
```dockerfile

FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY ./src ./src
EXPOSE 8080
CMD ["npm", "start"]
```
---
## 📌 Notas finales
Asegurate de que el puerto host esté libre antes de levantar el contenedor.

La app está lista para conectarse a MongoDB Atlas usando la variable MONGO_URL.

Para producción, se recomienda levantar la app dentro de Docker con npm start.

Tests unitarios y de integración configurados con Mocha + Supertest.

---

## 🔗 Enlaces útiles
🐙 Repositorio GitHub: [Aquí](https://github.com/Marinarapela/BackendIII.git)

🐋 Imagen Docker Hub: [Imágen](https://hub.docker.com/repository/docker/mrapela/app-proyectofinal-image/general)

## 📄 Licencia
Este proyecto está bajo la licencia MIT.  
© 2025 Marina Rapela.