DOCUMENTACIÓN PROYECTO REACT: 

Integrantes: Eloy Gonzalés, Corina Heras

INTRODUCCIÓN: 
Este proyecto es una billetera virtual diseñada para ofrecer a sus usuarios un control sencillo y eficiente de sus ingresos y egresos a lo largo del tiempo. La aplicación permite regitrar, actualizar, y gestionar transacciones según las necesidades del usuario.

El sistema cuenta con una interfaz minimalista y fácil de usar, compuesta por dos pantallas principales: 

1. Home = Muestra un resumen de las transacciones realizadas si es que las hay, y su balance actual

2. Formulario de registro: Permite agregar, editar y actualizar los eventos financieros del usuario. 

La plataforma está pensada para brindar una experiencia intuitiva, asegurando que los usuarios puedan visualizar sus movimientos financieros de manera clara y organizada, ayudándolos a mejorar la administración de su dinero.



EJECUCÍON: 
1. Creación del Proyecto en ReactJS
para la ejecucíon de nuestro proyecto de manera local se siguieron los siguientes pasos, comenzando por la creacion de nuestro proyecto en ReactJS con el siguiente comando en la terminal:

```js
npm create vite@latest
# 1. Escriba el nombre del proyecto
# 2. Seleccione la opción React
# 3. Seleccione la opción TypeScript

# Ingresar al directorio del proyecto
cd nombre_proyecto

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo 
npm run dev

# Instalar dep para poder usar alias en tsconfig.json y vite.config.ts
npm i @types/node -D

```

2. Clonar el Repositorio

Se creó un repositorio público en GitHub y compartimos el enlace para que otros puedan acceder al código. Luego, se clonó el proyecto en nuestra máquina local con el siguiente comando: 

```js
git clone https://github.com/EloyG3186/Walletfy_Project.git
cd Walletfy_Project
```

DESPLIEGUE:

El despliegue de la aplicación se realizó con la ayuda de github Pages ,usando git Deploy, pero antes fue necesario realizar algunas modificaciones en el proyecto para garantizar su correcto funcionamiento en producción. A continuación, se detallan los pasos que fueron necesarios para el despliegue de el proyecto usando React con TypeScript. 

1. Preparación del Proyecto 
Antes de desplegarlo, se realizaron algunos ajustes en el código y configuración en nuestro:  
```js
vite.config.js
```

modificar la opción base. 

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://dcortesnet.github.io/Reactjs-deploy-githubpages', // Link page
})
```








# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
