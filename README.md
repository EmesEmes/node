# Node.js

Node.js es un entorno de ejecución de JavaScript construido sobre el motor V8 de Chrome. Permite ejecutar código JavaScript en el servidor, lo que lo hace ideal para construir aplicaciones web escalables y de alto rendimiento. Aquí tienes algunos puntos clave sobre Node.js:

1. JavaScript en el servidor: Tradicionalmente, JavaScript se ejecutaba en el navegador, pero Node.js permite usarlo en el servidor, lo que facilita el desarrollo de aplicaciones full-stack con un solo lenguaje.

2. Asíncrono y no bloqueante: Node.js usa un modelo de E/S (entrada/salida) asíncrono y no bloqueante, lo que significa que puede manejar múltiples operaciones simultáneamente sin esperar a que una se complete antes de empezar otra. Esto lo hace muy eficiente para aplicaciones que requieren mucha E/S, como servidores web.

3. Basado en eventos: Node.js utiliza un modelo de bucle de eventos (event loop) para manejar operaciones asíncronas, lo que lo hace ligero y eficiente en términos de recursos.

4. NPM (Node Package Manager): Node.js incluye NPM, el gestor de paquetes más grande del mundo, que permite a los desarrolladores instalar y gestionar librerías y dependencias de manera fácil.

5. Escalabilidad: Gracias a su arquitectura no bloqueante, Node.js es altamente escalable y puede manejar un gran número de conexiones simultáneas, lo que lo hace ideal para aplicaciones en tiempo real como chats, juegos en línea y streaming.

6. Comunidad activa: Node.js tiene una comunidad muy activa y un ecosistema rico en librerías y frameworks, como Express.js para construir servidores web, o Socket.io para aplicaciones en tiempo real.

## Entorno de ejecucion

Un entorno de ejecución (en inglés, runtime environment) es un conjunto de herramientas y recursos que permiten ejecutar y gestionar un programa o aplicación. Proporciona todo lo necesario para que el código escrito en un lenguaje de programación específico funcione correctamente, incluyendo la gestión de memoria, el acceso a bibliotecas, la interacción con el sistema operativo y otros servicios esenciales.

En el caso de Node.js, el entorno de ejecución incluye:

1. Motor de JavaScript: Node.js utiliza el motor V8 de Google Chrome, que es responsable de compilar y ejecutar código JavaScript a nivel de máquina (código nativo). Esto permite que JavaScript, que tradicionalmente se ejecutaba en el navegador, pueda correr en un servidor.

2. APIs y módulos: Node.js proporciona una serie de APIs y módulos integrados para realizar tareas comunes en el servidor, como manejar operaciones de red (HTTP, TCP, etc.), acceder al sistema de archivos, gestionar procesos, y más.

3. Modelo de E/S asíncrono: Node.js implementa un modelo de entrada/salida (E/S) no bloqueante y basado en eventos, lo que permite manejar múltiples operaciones simultáneamente sin bloquear el hilo principal.

4. Gestión de dependencias: A través de NPM (Node Package Manager), Node.js permite instalar y gestionar bibliotecas y paquetes de terceros, lo que facilita el desarrollo de aplicaciones complejas.


Node.js está compuesto por varias partes clave que trabajan juntas para proporcionar un entorno de ejecución eficiente y escalable para JavaScript en el servidor. Estas son las principales componentes de Node.js:

### 1. Motor V8 de Google
Qué es: V8 es el motor de JavaScript desarrollado por Google, utilizado en Chrome y otros navegadores basados en Chromium.

* Función: Compila código JavaScript en código máquina nativo para que se ejecute de manera rápida y eficiente.

* Características:

  * Optimiza el rendimiento del código JavaScript.

  * Implementa las últimas características de ECMAScript (el estándar de JavaScript).

  * Gestiona la memoria y la ejecución del código.

### 2. Libuv
* Qué es: Libuv es una biblioteca multiplataforma escrita en C que proporciona soporte para operaciones de E/S (entrada/salida) asíncronas.

* Función: Es el núcleo del sistema de eventos de Node.js. Maneja operaciones como:

  * Operaciones de red (sockets, HTTP, etc.).

  * Operaciones de sistema de archivos (lectura/escritura de archivos).

  * Temporizadores (setTimeout, setInterval).

  * Procesos secundarios (child processes).

* Características:

  * Implementa el bucle de eventos (event loop), que permite a Node.js manejar múltiples operaciones de manera no bloqueante.

  * Es compatible con múltiples sistemas operativos (Windows, Linux, macOS, etc.).

### 3. Librerías de Node.js (Core Modules)
* Qué es: Node.js incluye un conjunto de módulos integrados que proporcionan funcionalidades esenciales para el desarrollo de aplicaciones.

* Ejemplos:

  * http: Para crear servidores HTTP.

  * fs: Para interactuar con el sistema de archivos.

  * path: Para manejar rutas de archivos y directorios.

  * events: Para manejar eventos personalizados.

  * stream: Para trabajar con flujos de datos.

* Función: Estos módulos permiten a los desarrolladores realizar tareas comunes sin necesidad de instalar dependencias externas.

### 4. Node.js Bindings
* Qué es: Son las conexiones entre el código JavaScript y las bibliotecas escritas en C/C++ (como Libuv y V8).

* Función: Permiten que Node.js utilice funcionalidades de bajo nivel proporcionadas por estas bibliotecas.

### 5. Node.js API (Application Programming Interface)
* Qué es: Es la interfaz que expone Node.js para que los desarrolladores puedan interactuar con sus funcionalidades.

* Función: Proporciona métodos y objetos para trabajar con redes, archivos, procesos, y más.

### 6. NPM (Node Package Manager)
* Qué es: Es el gestor de paquetes de Node.js, que permite instalar, gestionar y compartir bibliotecas y dependencias.

* Función:

  * Facilita la instalación de paquetes de terceros.

  * Permite publicar y compartir módulos con la comunidad.

* Características:

  * Es el repositorio de paquetes más grande del mundo.

  * Incluye herramientas para gestionar dependencias y scripts de construcción.

### 7. Event Loop (Bucle de Eventos)
* Qué es: Es el núcleo del modelo de programación asíncrono de Node.js.

* Función: Gestiona las operaciones asíncronas y las colas de eventos, permitiendo que Node.js maneje múltiples tareas simultáneamente sin bloquear el hilo principal.

* Fases del Event Loop:

  * Timers (setTimeout, setInterval).

  * I/O callbacks (operaciones de red y sistema de archivos).

  * Poll (espera de nuevos eventos).

  * Check (setImmediate).

  * Close callbacks (cierre de conexiones).

### 8. Thread Pool (Grupo de Hilos)
* Qué es: Aunque Node.js es single-threaded (un solo hilo para el event loop), utiliza un grupo de hilos para manejar operaciones bloqueantes o intensivas en CPU.

* Función: Algunas operaciones, como ciertas tareas del sistema de archivos o compresión, se delegan a este grupo de hilos para no bloquear el event loop.

## Código Bloqueante y No Bloqueante

Los términos código bloqueante (blocking) y código no bloqueante (non-blocking) se refieren a cómo se manejan las operaciones de entrada/salida (E/S) y otras tareas que pueden tardar tiempo en completarse. Aquí te explico ambos conceptos:

### Código Bloqueante (Blocking Code)

* Qué es: Es un tipo de código que detiene la ejecución del programa hasta que se completa una operación. Mientras la operación está en curso, el hilo principal (o el proceso) queda "bloqueado" y no puede realizar ninguna otra tarea.

* Características:

  * Sincrónico: Las operaciones se ejecutan una tras otra, en orden.

  * Ineficiente: Si la operación tarda mucho (por ejemplo, leer un archivo grande o hacer una solicitud a una base de datos), el programa no puede hacer nada más durante ese tiempo.

  * Comportamiento predecible: Es más fácil de entender y depurar, ya que las operaciones se completan en el orden en que se escriben.

* Ejemplo en Node.js

```javascript
const fs = require('fs');

// Lectura bloqueante de un archivo
const data = fs.readFileSync('archivo.txt', 'utf8');
console.log(data);
console.log('Este mensaje se muestra después de leer el archivo.');
```
> En este caso, el programa se detiene hasta que el archivo se lee por completo, y solo entonces continúa con el siguiente console.log.

### Código No Bloqueante (Non-Blocking Code)

* Qué es: Es un tipo de código que no detiene la ejecución del programa mientras se completa una operación. En lugar de esperar, el programa continúa ejecutando otras tareas y maneja el resultado de la operación más tarde, generalmente a través de callbacks, promesas o async/await.

* Características:

  * Asíncrono: Las operaciones se ejecutan en segundo plano, y el programa puede seguir realizando otras tareas.

  * Eficiente: Ideal para operaciones que pueden tardar tiempo, como solicitudes de red, acceso a bases de datos o lectura/escritura de archivos.

  * Complejo: Puede ser más difícil de entender y depurar debido a su naturaleza asíncrona.

* Ejemplo en Node.js:
```javascript
const fs = require('fs');

// Lectura no bloqueante de un archivo
fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log('Este mensaje se muestra antes de leer el archivo.');
```
> Aquí, el programa no espera a que se lea el archivo. En su lugar, continúa ejecutando el siguiente console.log, y cuando el archivo se lee, se ejecuta el callback.

### ¿Por qué es importante el código no bloqueante en Node.js?
Node.js está diseñado para ser asíncrono y no bloqueante porque utiliza un modelo de E/S basado en eventos y un bucle de eventos (event loop). Esto permite que Node.js maneje muchas operaciones simultáneamente sin bloquear el hilo principal, lo que lo hace ideal para aplicaciones que requieren alta concurrencia, como servidores web, aplicaciones en tiempo real y APIs.

* En resumen:

Código bloqueante: Detiene la ejecución hasta que se completa una operación.

Código no bloqueante: Permite que el programa continúe ejecutándose mientras se completa una operación en segundo plano.

## Call Stack

El call stack (pila de llamadas) es una estructura de datos fundamental en la ejecución de programas, especialmente en lenguajes como JavaScript. Es utilizado por el motor de JavaScript (como V8 en Node.js o en los navegadores) para rastrear las funciones que están siendo ejecutadas y en qué orden deben ser procesadas.

### ¿Qué es el Call Stack?
El call stack es una pila (estructura de datos de tipo LIFO: Last In, First Out, "último en entrar, primero en salir") que registra las llamadas a funciones en un programa. Cada vez que una función es invocada, se añade a la parte superior de la pila, y cuando la función termina de ejecutarse, se elimina de la pila.

### Cómo funciona el Call Stack
1. Llamada a una función: Cuando se llama a una función, esta se coloca en la parte superior del call stack.

2. Ejecución: La función en la parte superior del call stack es la que se está ejecutando en ese momento.

3. Finalización: Cuando la función termina de ejecutarse, se elimina del call stack.

4. Regreso: El control vuelve a la función anterior en la pila (si la hay), y así sucesivamente hasta que el call stack esté vacío.

### Características del Call Stack
1. LIFO (Last In, First Out): La última función añadida es la primera en ser ejecutada y eliminada.

2. Tamaño limitado: El call stack tiene un límite de tamaño. Si se excede (por ejemplo, con recursión infinita), se produce un error de desbordamiento (stack overflow).

3. Sincronía: En JavaScript, el call stack maneja operaciones síncronas. Las operaciones asíncronas (como setTimeout o promesas) se manejan fuera del call stack, utilizando estructuras como la cola de callbacks (callback queue) y el bucle de eventos (event loop).

### Call Stack y Asincronía
En JavaScript, las operaciones asíncronas no bloquean el call stack. En su lugar, se manejan a través del event loop. Aquí hay un ejemplo:

```javascript
console.log("Inicio");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("Fin");
```

Flujo:

1. console.log("Inicio") se añade al call stack, se ejecuta y se elimina.

2. setTimeout se añade al call stack, pero como es asíncrono, se envía a la cola de callbacks y se elimina del call stack.

3. console.log("Fin") se añade al call stack, se ejecuta y se elimina.

4. Cuando el call stack está vacío, el event loop toma la función del setTimeout de la cola de callbacks y la añade al call stack para su ejecución.

## Event Loop

El event loop (bucle de eventos) es un mecanismo fundamental en Node.js que permite manejar operaciones asíncronas y no bloqueantes. Es el núcleo de la arquitectura de Node.js y es responsable de gestionar las tareas, eventos y callbacks de manera eficiente.

### ¿Qué es el Event Loop?
El event loop es un bucle infinito que verifica constantemente si hay tareas pendientes para ejecutar. Su función principal es:

1. Manejar operaciones asíncronas: Como llamadas a APIs, lectura/escritura de archivos, solicitudes de red, etc.

2. Ejecutar callbacks: Cuando una operación asíncrona se completa, su callback se coloca en una cola para ser ejecutado.

3. Mantener el flujo del programa: Asegura que el programa no se bloquee mientras espera que se completen operaciones lentas.

### ¿Cómo funciona el Event Loop en Node.js?
El event loop sigue un ciclo de fases, cada una de las cuales tiene una cola de tareas específica. Aquí están las fases principales:

1. Fase de Timers
* Qué hace: Ejecuta los callbacks de setTimeout y setInterval que han expirado.

* Cómo funciona:

  * El event loop verifica si algún temporizador ha alcanzado su tiempo límite.

  * Si es así, ejecuta el callback asociado.

2. Fase de I/O Callbacks (Operaciones de Entrada/Salida)
* Qué hace: Ejecuta callbacks de operaciones de E/S completadas, como lectura/escritura de archivos, solicitudes de red, etc.

* Cómo funciona:

  * Cuando una operación de E/S se completa, su callback se coloca en esta cola.

  * El event loop ejecuta estos callbacks en esta fase.

3. Fase de Poll
* Qué hace: Recupera nuevos eventos de E/S y ejecuta sus callbacks.

* Cómo funciona:

  * Si hay callbacks en la cola de poll, los ejecuta.

  * Si no hay callbacks, el event loop espera a que lleguen nuevos eventos.

  * También verifica si hay temporizadores (setTimeout, setInterval) que deban ejecutarse.

4. Fase de Check (setImmediate)
* Qué hace: Ejecuta callbacks registrados con setImmediate.

* Cómo funciona:

  * setImmediate es similar a setTimeout(fn, 0), pero tiene prioridad en esta fase.

  * Los callbacks de setImmediate se ejecutan inmediatamente después de la fase de poll.

5. Fase de Close Callbacks
* Qué hace: Ejecuta callbacks de eventos de cierre, como socket.on('close', ...).

* Cómo funciona:

  * Cuando un socket o una conexión se cierra, su callback se coloca en esta cola.

  * El event loop ejecuta estos callbacks en esta fase.

### Colas Adicionales
Además de las fases del event loop, existen dos colas importantes:

1. Cola de Microtareas (Microtask Queue):

  * Contiene callbacks de promesas (Promise.then, Promise.catch) y process.nextTick.

  * Tiene prioridad sobre las otras colas. Se ejecuta después de cada fase del event loop.

2. Cola de Macrotareas (Macrotask Queue):

  * Contiene callbacks de setTimeout, setInterval, setImmediate, y operaciones de E/S.

  * Se ejecuta en las fases correspondientes del event loop.


### Flujo del Event Loop
1. El event loop comienza en la fase de timers.

2. Luego pasa a la fase de I/O callbacks.

3. Después a la fase de poll.

4. Luego a la fase de check.

5. Finalmente a la fase de close callbacks.

6. Después de cada fase, el event loop verifica la cola de microtareas y ejecuta sus callbacks antes de pasar a la siguiente fase.

> Cuando se completa una tarea asíncrona en libuv, ¿En qué momento decide Node.js ejecutar la función callback asociada en el call stack? Los callbacks son ejecutados sólo cuando el callstack está vacio.

> ¿Node espera a que el call stack este vacía antes de ejecutar un callback o interrumpe el flujo normal de ejecución para ejecutar el callback? El flujo normal de ejecución no se interrumpirá para ejecutar un callback.

> ¿Qué pasa con otros métodos asíncronos como setTimeout y setInterval, que también retrasan la ejecución de un calback? Los callbacks de setTimeout y setIntervals tienen prioridad, pero no interrumpen el flujo normal.

> Si dos tareas asícronas como setTimeout y readFile se completan al mismo tiempo, ¿Cómo decide Node que callback ejecutar primero en el claa stack? ¿Uno tiene prioridad sobre otro? Los callback de temporizador (Timers) se ejecutan antes que las devoluciones de llamada de E/S (I/O), incluso si ambas están listas exactamente al mismo tiempo.