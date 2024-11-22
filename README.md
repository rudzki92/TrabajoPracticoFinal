# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# --------------------------------------------------------------------------------------------------


E-commerce App
Este proyecto es un e-commerce desarrollado como parte del curso del React. Incluye funcionalidades de registro, login, listado de productos y detalle de productos, con persistencia de datos en Firebase.

CARACTERISTICAS

Home:
Listado de 4 productos con nombre, precio, SKU y descripción.

Detalle de producto:
Muestra nombre, descripción, precio y SKU.
Incluye botones para "Añadir al Carrito" y "Comprar Ahora" con mensajes visuales de confirmación.

Registro:
Campos: Nombre, Apellido, Email y Contraseña.
Los datos se almacenan en Firestore.

Login:
Autenticación por email y contraseña con Firebase Authentication.

Persistencia de datos:
Se utiliza Firestore para almacenar productos y datos de usuarios.

Tecnologías Utilizadas

Frontend:
React.js
React Router DOM
Bootstrap 5


Backend/Database:
Firebase Firestore
Firebase Authentication

Requisitos de Instalación
Node.js

Repositorio:
# Clonar el repositorio
git clone https://github.com/rudzki92/TrabajoPracticoFinal

# Entrar en la carpeta del proyecto
cd TrabajoPracticoFinal


Instalar Dependencias:
npm install
npm install react-router-dom
npm install firebase

Ejecutar la Aplicación:
npm run dev

Funciones Implementadas

Registro
Permite registrar usuarios con Nombre, Apellido, Email y Contraseña.
Los datos se almacenan en Firestore.

Login
Verifica las credenciales ingresadas contra Firebase Authentication.
Redirige al Home en caso de éxito.
Tambien incluye un enlace para registrar usuarios.

Home
Al entrar al sitio, se mostrará un mensaje de bienvenida y una breve descripción de la tienda.

Productos
Lista 4 productos con su infomracion.
Haz clic en el nombre del producto para obtener el detalle de un producto.
Los productos se obtienen desde Firestore.

Detalle de Producto
Muestra información detallada de un producto seleccionado.
Incluye botones para "Añadir al Carrito" y "Comprar Ahora".
Muestra mensajes visuales al realizar acciones.