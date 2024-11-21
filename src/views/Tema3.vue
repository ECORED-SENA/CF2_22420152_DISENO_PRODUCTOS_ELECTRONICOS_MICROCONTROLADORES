<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Estructura del proceso de creación de un programa para microcontroladores
    
    .row
      .col-lg.pe-lg-0(data-aos="fade-right" data-aos-duration="800")
        .p-4.p-lg-3.h-100.d-flex.align-content-center(style="background-color:#F1D3F6;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/1.svg")
            .col-md(style="place-self:center;")
              p.mb-0 En esta fase, se redactan las instrucciones del programa. El programa, escrito en un lenguaje de programación comprensible para el ser humano (frecuentemente utilizando lenguajes formales descritos por gramáticas independientes del contexto), no es ejecutado inmediatamente en una computadora.
      .col-lg-auto.d-none.d-lg-block.ps-lg-0(data-aos="fade-left" data-aos-duration="950")
        figure
          img(src="@/assets/curso/tema3/2.png")
    
    p.mt-4(data-aos="fade-up") La opción más común es compilar el programa, aunque también puede ejecutarse mediante un intérprete. El código fuente debe someterse a un proceso de transformación para convertirse en lenguaje máquina, interpretable por el procesador, conocido como compilación. La creación de un programa ejecutable (como un archivo .exe en Microsoft Windows) generalmente implica dos pasos:

    .col-xl-10.m-auto.mt-5
      .row.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="fade-right")
          .h-100.p-4.cont_3_1
            p.fw-bold Compilación
            p.mb-0 Traduce el código fuente a un código de bajo nivel (normalmente código objeto, sin llegar directamente al lenguaje máquina).
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="fade-left")
          .h-100.p-4.cont_3_1
            p.fw-bold Enlazado
            p.mb-0 Combina el código de bajo nivel generado de todos los archivos compilados y agrega el código de funciones de las bibliotecas del compilador, permitiendo así la comunicación con el sistema operativo y la traducción del código objeto a código máquina.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/4.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Simulación del programa
    
    .row
      .col-lg(data-aos="fade-right")
        .p-4.p-lg-3(style="background-color:#F8E9FA;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/5.svg")
            .col-md(style="place-self:center;")
              p.mb-0 Para probar el programa sin emplear físicamente un recurso electrónico, se pueden utilizar herramientas tecnológicas, ya sean de #[em software] o #[em hardware], que permitan verificar si la aplicación funciona correctamente; estas herramientas se denominan #[strong simuladores].
        p.mt-4 Un simulador es un #[strong software] capaz de reproducir virtualmente el comportamiento real de un microcontrolador a partir del código .asm creado. Existen diferentes simuladores en el mercado que permiten desarrollar diseños complejos para programar microcontroladores, como los siguientes:
        .row.mt-4
          .col-md.mb-4.mb-md-0
            .h-100.p-4(style="background-color:#D7E9FF;")
              p.fw-bold Proteus
              p.mb-0 Permite la simulación de circuitos electrónicos con microcontroladores y es el simulador más popular para microcontrola dores PIC.
          .col-md.mb-4.mb-md-0
            .h-100.p-4(style="background-color:#D7E9FF;")
              p.fw-bold GPSIM
              p.mb-0 Un simulador gratuito con un entorno gráfico sencillo.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/6.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/4.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Quemado del programa
    
    p(data-aos="fade-up") Una vez simulado el programa y verificado su funcionamiento, se genera el archivo .asm con las instrucciones, conocido como #[strong #[em firmware]] o #[strong programación en firme]. Este #[em firmware] se descarga o #[strong quema] en la memoria del microcontrolador en un proceso denominado quemado.

    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/7.svg")
      .col-lg(data-aos="fade-left")
        .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#D4F0E0;")
          p.mb-0 El #[strong firmware] funciona como un bloque de instrucciones con las órdenes específicas de lo que se quiere ejecutar (por ejemplo, la activación de una alarma sonora). Este bloque establece la lógica de bajo nivel que controla los circuitos electrónicos del dispositivo. Funcionalmente, el #[strong firmware] es el intermediario entre las órdenes externas que recibe el dispositivo y su electrónica, permitiendo la correcta ejecución de estas órdenes.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/4.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Pruebas del programa
    
    .row
      .col-lg(data-aos="fade-right")
        p Las pruebas permiten verificar si el código .asm funciona correctamente y si el microcontrolador está en buen estado. Para ello, es recomendable seguir un procedimiento básico que incluya tanto el #[em hardware] como el #[em software] del microcontrolador.
        figure.mt-4.d-none.d-lg-block
          img(src="@/assets/curso/tema3/8.png")
      .col-lg-auto.m-auto.col-md-8(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/9.svg")
    
    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
