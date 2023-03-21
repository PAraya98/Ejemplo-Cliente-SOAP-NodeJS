# Ejemplo de cliente SOAP con NodeJS
Dos ejemplos de consumo de un Web Service basado en SOAP ([Calculator de dneonline](http://www.dneonline.com/calculator.asmx?WSDL)) utilizando NodeJS en conjunto a las librerías:

* [soap](https://www.npmjs.com/package/soap): Cliente y servidor SOAP. En este caso se utiliza el cliente, el cual requiere del [WSDL](https://www.w3.org/TR/wsdl/) para obtener los métodos a utilizar del servicio web. 
* [easy-soap-request](https://www.npmjs.com/package/easy-soap-request): Permite llamar a métodos SOAP de un servicio web de forma sencilla a través de solicitudes XML.

# Ejecución del programa
Se requiere de la instalación de las librerías necesarias mediante `npm install` y ejecutar el script mediante `npm start`.
```
npm install && npm start
```
