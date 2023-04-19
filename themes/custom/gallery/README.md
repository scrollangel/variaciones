# Gallery Theme

Este es un tema diseñado exclusivamente para la visualización correcta de la página web de la revista variaciones.

La versión de Drupal recomendada es la versión `9.5.X`

## Instalación

Para poder instalar este tema es necesario mover estos archivos en la ruta `/themes/custom` desde la raíz del proyecto
en el cuál se quiera instalar

## Uso

Al ser un tema creado para un producto en particular la recomendación es utilizar las plantillas con cuidado ya que
modificar un archivo puede alterar la visualización de ese tipo de estructuras en diferentes partes de la página. Es
relevante realizar pruebas en cuánto a la administración directamente desde Drupal del contenido para garantizar que
este se comporta de la manera esperada.

## Estructura

- /assets: Almacena los recursos estáticos que se usan de manera forzada en la página. Es decir que estos no serán
  modificados desde ningún punto del panel de administración.
- /css: Almacena los estilos correspondientes a las diferentes plantillas generadas
- /js: Contiene un único script para agregar funcionalidades básicas a la página y algunas modificaciones del DOM que sean requeridas.
- /templates: Contiene los archivos de plantilla. Pueden ser tan generales o especificos según sea el caso

## Recursos recomendados
- https://www.drupal.org/docs/develop/theming-drupal
