# Prueba React.

## Instrucciones.

Generar una tabla con React, SASS y Redux. Apartir del siguiente endpoint: [Condiciones Atmosfericas](https://api.datos.gob.mx/v1/condiciones-atmosfericas) - https://api.datos.gob.mx/v1/condiciones-atmosfericas.

-Al generar una consulta se deberar mostrar los registros de 10 en 10.

-Al darle click a un Id hacer una consulta por Id al endpoint mostrar todos los datos de la consulta como una pantalla de detalle.

- Generar el test unitario con JEST

## Correr este projecto.

- Colocarse dentro de la carpeta del proyecto.
- Ejecutar en terminal npm install.
- Correr el proyecto con npm run start.
- Presionar enlace de prueba tecnica o dirigirse a la direccion http://localhost:3000/table

## Dependencias usadas

- SASS
- React Router Dom
- Axios

## Informacion adicional

- No se implementa Redux o useContext por que el manejo del estado no se vuelve tan complejo entre componentes (se uso callbacks para manejar el estado) y por tiempo.

- No se implemento prueba unitaria con JEST (No tengo dominio sobre este tema).