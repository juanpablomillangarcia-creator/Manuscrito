# Tintero — Taller de escritura compartido

Aplicación de escritura de libros con IA para escribir a dos (o más) en tiempo real.

## Cómo desplegarlo (una sola vez, unos 10 minutos)

### 1. Súbelo a GitHub
1. Crea una cuenta en github.com si no la tienes.
2. Crea un repositorio nuevo (por ejemplo `tintero`), privado o público.
3. Sube estos archivos tal cual: `server.js`, `package.json` y la carpeta `public/`.
   - Lo más fácil sin instalar nada: en tu repositorio, botón **"Add file → Upload files"**, arrastra los archivos y confirma. Para la carpeta `public`, créala con "Add file → Create new file" escribiendo `public/index.html` y pegando el contenido.

### 2. Despliégalo en Render
1. Crea una cuenta en render.com (puedes entrar con tu GitHub).
2. **New → Web Service** → conecta tu repositorio `tintero`.
3. Configuración:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Instance Type:** Free
4. Dale a **Deploy**. En un par de minutos tendrás una dirección tipo `https://tintero-xxxx.onrender.com`.

### 3. A escribir juntos
1. Abrid esa dirección cada uno en su casa.
2. La primera vez pide un **código de taller**: inventad uno y escribid EXACTAMENTE el mismo los dos (ej.: `hermanos-bosque-2026`). Ese código es vuestra sala privada.
3. Cada uno pone su **nombre**: así todo lo que toque el otro aparecerá con la etiqueta ámbar **"Nuevo · [nombre]"** hasta que pulses "He leído lo nuevo".
4. Todo se sincroniza solo cada pocos segundos: escenas, ideas, biblia, trama, corcho...
5. Para la IA, cada navegador pide una clave de API de Anthropic (console.anthropic.com); podéis usar la misma los dos.

## Cosas importantes
- **Plan gratuito de Render:** el servidor se duerme tras 15 min sin uso (la primera visita tarda ~1 min en despertarlo) y su disco se borra al redesplegar. No hay pánico: cada navegador guarda una copia local y **resiembra el servidor automáticamente** al conectarse. Aun así, haced copias con "Exportar .txt" de vez en cuando, o descargad todo desde `https://TU-DIRECCION/api/copia/VUESTRO-CODIGO`.
- Si escribís los dos exactamente a la vez sobre lo mismo, gana el último en guardar. Lo natural: repartíos escenas o avisaos por chat.
- Para tener datos a prueba de todo, en Render se puede añadir un "Persistent Disk" (de pago, ~1 €/mes).
