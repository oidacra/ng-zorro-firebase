# Descripción

Proyecto de Angular 10, utilizando Firestore.
Se tiene un módulo de películas el cual hace crud con firestore.

## Instalación

Se debe instalar las librerias del Angular `npm install`, crear el proyecto en el firebase console en la web o ejecutar `firebase init`.

# Importante
Se debe crear los token para utilizar el firebase, y agregarlos en enviroments/enviroment.ts y enviroments/enviroment.prod.ts
```
export const environment = {
  production: true,
  firebase: {
    apiKey: 'xxxxxxx',
    databaseURL: 'xxxxxxx',
    projectId: 'xxxxxxx',
  }
};
```




