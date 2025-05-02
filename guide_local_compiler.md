# Guía Funcional para Construir y Ejecutar **live-cmaf-transcoder**

Esta guía detalla todos los pasos necesarios para construir y ejecutar correctamente el proyecto **live-cmaf-transcoder** desde cero. Incluye la generación del frontend, el copiado de los archivos al backend y la compilación con Cargo.

---

## **Requisitos Previos**

### **1. Instalación de Dependencias**
Asegúrate de tener las siguientes herramientas y dependencias instaladas en tu sistema basado en Ubuntu:

- **Node.js y npm**:
  ```bash
  sudo apt update
  sudo apt install -y nodejs npm
  ```
- **Yarn (opcional)**:
  ```bash
  npm install -g yarn
  ```
- **Rust y Cargo** (para construir el backend):
  ```bash
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  source $HOME/.cargo/env
  ```
- **Git**:
  ```bash
  sudo apt install -y git
  ```
- **Docker y Docker Compose**:
  Instala Docker y Docker Compose siguiendo las instrucciones oficiales:
  ```bash
  sudo apt install -y docker.io docker-compose
  ```

- **Dependencias del Sistema**:
  ```bash
  sudo apt install -y build-essential
  ```

---

## **Pasos para Construir y Ejecutar**

### **1. Clonar el Repositorio**
Clona el repositorio del proyecto:
```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
```

---

### **2. Generación del Frontend**

#### **2.1 Configura la Variable de Entorno**
Antes de iniciar la construcción del frontend, configura la variable `NUXT_PUBLIC_API_BASE`:
```bash
export NUXT_PUBLIC_API_BASE="."
```

#### **2.2 Instala las Dependencias del Frontend**
Navega al directorio del frontend y ejecuta:
```bash
cd frontend
# Usando npm
npm install

# O usando Yarn
yarn install
```

#### **2.3 Genera el Binario del Frontend**
Construye el frontend para producción:
```bash
# Usando npm
npm run build

# O usando Yarn
yarn build
```

El binario generado estará disponible en el directorio `frontend/dist`.

---

### **3. Copia el Frontend al Backend**
Para integrar el frontend con el backend, copia los archivos del frontend generado al directorio del backend:
```bash
cp -r dist/* ../backend/static/
```

> **Nota:** Asegúrate de que el backend tenga un directorio `static` configurado para servir los archivos del frontend.

---

### **4. Compilación del Backend**

#### **4.1 Navega al Directorio del Backend**
```bash
cd ../backend
```

#### **4.2 Compila el Backend con Cargo**
Compila el backend en modo `release`:
```bash
cargo build --release
```

El binario generado estará disponible en:
```bash
./target/release/live-cmaf-transcoder
```

---

### **5. Configuración y Ejecución**

#### **5.1 Variables de Entorno**
Asegúrate de configurar las variables de entorno necesarias para el backend. Por ejemplo:
```bash
export REDIS_URL="redis://localhost:6379"
export SERVER_NAME="http://localhost:8080"
```

#### **5.2 Ejecución del Backend**
Ejecuta el binario del backend:
```bash
./target/release/live-cmaf-transcoder
```

---

### **6. Despliegue con Docker**

#### **6.1 Construcción de Imágenes Docker**
Construye las imágenes Docker necesarias:
```bash
docker compose build
```

#### **6.2 Levanta los Servicios**
Levanta los servicios definidos en el archivo `docker-compose.yaml`:
```bash
docker compose up -d
```

---

## **Pruebas y Verificación**

- Accede a la interfaz del frontend para comprobar que todo funciona correctamente.
- Verifica los logs del backend para asegurarte de que no hay errores:
  ```bash
  docker logs <nombre-contenedor-backend>
  ```

---

## **Notas Adicionales**

- **Limpieza de Dependencias**: Si encuentras problemas, intenta eliminar dependencias y reinstalarlas:
  ```bash
  rm -rf node_modules
  npm install
  ```

- **Depuración**: Revisa las configuraciones en los archivos `nuxt.config.js`, `Cargo.toml` y `docker-compose.yaml` si algo no funciona como se espera.

---

Con esta guía, deberías tener todo lo necesario para construir y ejecutar **live-cmaf-transcoder** correctamente. Si tienes dudas o problemas, revisa los logs o consulta con el equipo de desarrollo.
