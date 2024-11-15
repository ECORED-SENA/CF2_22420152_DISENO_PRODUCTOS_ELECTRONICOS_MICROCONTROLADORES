<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Introducción a los microcontroladores y lenguaje Assembly ',
      titulo: 'Cuestionario',
      introduccion:
        'Comprender los componentes fundamentales de un microcontrolador, su funcionamiento y el uso básico del lenguaje Assembly para el desarrollo de programas, mediante el análisis de sus etapas, elementos y funciones esenciales en sistemas electrónicos. ',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es la principal función de un microcontrolador? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar tareas en sistemas electrónicos. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Guardar información de manera temporal. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realizar cálculos complejos. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conectar dispositivos externos. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué componente de un microcontrolador es responsable del procesamiento de datos? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Entrada/Salida. ', esCorrecta: false },
            { id: 'b', texto: 'CPU.', esCorrecta: true },
            { id: 'c', texto: 'Memoria. ', esCorrecta: false },
            { id: 'd', texto: 'Bus de datos. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es el propósito de la memoria en un microcontrolador? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Procesar datos. ', esCorrecta: false },
            { id: 'b', texto: 'Almacenar datos. ', esCorrecta: true },
            { id: 'c', texto: 'Controlar el voltaje. ', esCorrecta: false },
            {
              id: 'd',
              texto: 'Ejecutar instrucciones de ensamblaje. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué hace el conversor A/D en un microcontrolador? ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transmite datos de un dispositivo a otro. ',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Traduce señales externas. ', esCorrecta: true },
            {
              id: 'c',
              texto: 'Controla el flujo de corriente. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Almacena datos de entrada. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué nivel de programación es más fácil de usar y ofrece menos control? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Bajo.', esCorrecta: false },
            { id: 'b', texto: 'Alto.', esCorrecta: true },
            { id: 'c', texto: 'Medio.', esCorrecta: false },
            { id: 'd', texto: 'Avanzado.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué elemento del lenguaje assembly identifica secciones específicas? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Etiquetas. ', esCorrecta: true },
            { id: 'b', texto: 'Comentarios. ', esCorrecta: false },
            { id: 'c', texto: 'Directivas. ', esCorrecta: false },
            { id: 'd', texto: 'Instrucciones. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de las siguientes etapas se refiere a la carga del programa en el microcontrolador? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ensamblaje. ', esCorrecta: false },
            { id: 'b', texto: 'Simulación. ', esCorrecta: false },
            { id: 'c', texto: 'Quemado. ', esCorrecta: true },
            { id: 'd', texto: 'Pruebas. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué componente del microcontrolador maneja el transporte de información? ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Memoria. ', esCorrecta: false },
            { id: 'b', texto: 'Bus de datos. ', esCorrecta: true },
            { id: 'c', texto: 'CPU.', esCorrecta: false },
            { id: 'd', texto: 'Conversor A/D. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El lenguaje assembly es el único lenguaje que puede ser utilizado en microcontroladores. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'La etapa de quemado es la primera en la creación de un programa en un microcontrolador. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Un microcontrolador puede incluir tanto entrada/salida como memoria y CPU. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Las directivas en Assembly son usadas para controlar la configuración del programa. ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El conversor A/D permite que el microcontrolador interprete señales analógicas. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La función del <em>watchdog</em> es traducir señales externas. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Los comentarios en Assembly son usados para ejecutar acciones específicas. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
