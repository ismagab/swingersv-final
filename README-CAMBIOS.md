# SwingerSV — Guía de esta actualización

Este paquete incluye todos los cambios solicitados sobre el sitio original.
Sigue esta guía en orden para dejarlo funcionando.

## Resumen de lo que se hizo

1. **Backend de administración** (`/admin`) con login, para editar:
   - **Eventos**: las 3 próximas fiestas (nombre, fecha, hora, ubicación, cupos/cover, imagen, visible/destacado).
   - **Reyes**: la sección "Los Reyes" completa, incluyendo agregar o eliminar reinados.
2. **Base de datos: Neon** (Postgres serverless) en vez de Supabase — Supabase pausa proyectos gratuitos tras 7 días sin uso, y como actualizarás el sitio ~1 vez al mes, Neon es la opción correcta: su capa gratuita nunca se borra ni se pausa (solo el cómputo se "duerme" tras 5 minutos sin actividad y despierta en milisegundos con la siguiente consulta).
3. **Popup de la próxima fiesta**: aparece una vez por visitante/día, con la info tomada directamente de los eventos administrados en `/admin` (no requiere configuración aparte).
4. **Popup para visitantes extranjeros**: detecta por IP si el visitante no está en El Salvador y muestra un aviso de bienvenida con botón a WhatsApp (una vez por día). El texto está en `components/site-popups.tsx` (constante `FOREIGN_POPUP_TEXT`) por si quieres ajustarlo.
5. **Formulario de parejas**: los campos "Persona 1 / Persona 2" ahora son "Esposo / Esposa" (nombre y WhatsApp), se agregó un select de **departamento de El Salvador**, y se bloquea el envío si el WhatsApp del esposo y la esposa son el mismo número (validado en el navegador y también en el servidor).
6. **SEO**: se corrigió un JSON-LD duplicado/inconsistente (dos bloques "Organization" con URLs distintas), y los eventos que alimentan el schema de Google ahora vienen de la base de datos real en vez de estar fijos en el código.
7. **Se quitó todo rastro de Vercel**: se eliminó la dependencia `@vercel/analytics` y su mención en la política de privacidad.
8. **Animación al hacer scroll**: cada sección aparece con una transición suave (opacidad + desplazamiento) la primera vez que entra en pantalla, respetando "reducir movimiento" si el usuario lo tiene activado en su sistema. Se redujo el espaciado vertical entre secciones en escritorio para que no se sienta tan separado.
9. **Footer**: se agregó el crédito "Sitio web creado por Vortex" enlazando a `www.vortexsv.com`.

> **Nota sobre el logo de Vortex**: no pude descargar el archivo del logo real de vortexsv.com desde mi entorno (sin acceso a ese dominio), así que el crédito del footer usa por ahora un texto estilizado ("Vortex" en color morado). Si me envías el archivo del logo (PNG/SVG) y los colores exactos de marca, lo integro en un segundo.

---

## 1. Crear el proyecto en Neon

1. Entra a **https://neon.com** y crea una cuenta gratis (no pide tarjeta).
2. Crea un nuevo proyecto (elige una región cercana, ej. AWS US East).
3. Abre el **SQL Editor** de Neon y pega el contenido completo del archivo `neon-schema.sql` incluido en este paquete. Ejecútalo — esto crea las tablas `events` y `kings`, y las llena con los datos actuales del sitio (los mismos 3 eventos y 4 reyes que ya tenías) para que no pierdas nada.
4. Ve a la sección **Connection string** de tu proyecto en Neon y copia la cadena de conexión. Usa la variante **"Pooled connection"** (mejor rendimiento en funciones serverless).

## 2. Variables de entorno

Copia `.env.example` a `.env.local` y completa:

```
DATABASE_URL=postgresql://usuario:password@ep-xxxxx-pooler.region.aws.neon.tech/neondb?sslmode=require
ADMIN_USER=conejitagab1987
ADMIN_PASSWORD=Wedesterdemind@1
```

**Importante:** nunca subas `.env.local` a GitHub.

## 3. Instalar y probar en local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` para el sitio, y `http://localhost:3000/admin` para el panel (te pedirá el usuario/contraseña de arriba).

## 4. Desplegar

En Vercel (u otra plataforma), agrega las mismas 3 variables de entorno en la configuración del proyecto (Settings → Environment Variables) y despliega normalmente.

Los cambios que hagas desde `/admin` se reflejan en el sitio en vivo en un máximo de 60 segundos (no hace falta redeploy).

## 5. Usar el panel admin

- **Eventos**: edita nombre, fecha, hora, ubicación, cupos/cover, imagen y si está visible/destacado. Si en el futuro necesitas más de 3 eventos, agrega una fila nueva directamente en el SQL Editor de Neon (`insert into events (...) values (...)`) — el sitio la tomará automáticamente.
- **Reyes**: edita cualquier reinado, o usa "Agregar reinado" para uno nuevo (ej. tras la próxima elección de Rey y Reina) y el ícono de basura para eliminar uno antiguo.

## 6. Si algo no aparece todavía

Mientras `DATABASE_URL` no esté configurado (por ejemplo, en una vista previa sin variables de entorno), el sitio sigue funcionando normalmente mostrando los datos actuales como respaldo — no se cae ni muestra errores.
