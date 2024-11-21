<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Estructura básica de los microcontroladores
    
    p(data-aos="fade-up") Los microcontroladores están constituidos, fundamentalmente, por los siguientes componentes:

    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Figura 1.
        span Microcontroladores 
      .cont_1_1.p-4
        .col-xl-8.m-auto.col-lg-10
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema1/2.svg" alt="Imagen de un microcontrolador con componentes clave identificados. En el centro, se encuentra la CPU y una línea de control. A los lados, se destacan la memoria con posiciones de almacenamiento, un registro conversor A/D, y el registro de entrada y salida de datos. En la parte inferior, aparecen el contador Timer y el contador Watchdog, esenciales para el tiempo y el reinicio del sistema.")
    

    .row.mt-5
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/3.png")
      .col-lg(data-aos="fade-left")
        LineaTiempoD.color-secundario
          div.text-small(numero="1" titulo="Unidad de <em>input – output</em> (E/S)") 
            p.mb-0 Recibe y envía señales de información en las unidades funcionales de un sistema de procesamiento de datos, permitiendo la comunicación con el entorno externo.
          div.text-small(numero="2" titulo="Unidad de memoria") 
            p.mb-0 Almacena datos de manera organizada, similar a un armario con cajones, facilitando el acceso sin confusiones.
          div.text-small(numero="3" titulo="Unidad de procesamiento central (CPU)") 
            p.mb-0 Ejecuta operaciones como multiplicaciones, divisiones y restas, y transfiere datos entre registros de memoria.
          div.text-small(numero="4" titulo="Bus de datos") 
            p.mb-0 Transporta datos entre los bloques del microcontrolador; incluye el bus de dirección para la memoria y el bus de datos para la conexión entre bloques internos.
          div.text-small(numero="5" titulo="Conversor A/D") 
            p.mb-0 Convierte señales periféricas en un formato binario (ceros y unos) para que el microcontrolador pueda interpretarlas.
          div.text-small(numero="6" titulo="Contador <em>TIMER</em>") 
            p.mb-0 Genera intervalos de tiempo para que el microcontrolador ejecute tareas a intervalos específicos.
          div.text-small(numero="7" titulo="Contador <em>WATCHDOG</em>") 
            p.mb-0 Reinicia el sistema en caso de interrupciones, garantizando la continuidad del funcionamiento.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/4.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Analogía con una planta procesadora
    
    p(data-aos="fade-up") La estructura de un microcontrolador puede asimilarse a una planta procesadora de papas fritas:

    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Figura 2.
        span Empresa papas fritas 
      .cont_1_1.p-4
        .col-xl-10.m-auto
          figure(data-aos="zoom-in-up")
            img.d-none.d-lg-block(src="@/assets/curso/tema1/5.png" alt="La imagen compara un microcontrolador con una planta de papas fritas: el área de carga (1) representa los puertos de entrada/salida, el almacenamiento (2) es la memoria, el procesamiento (3) simboliza la CPU y el empaquetado (4) corresponde a la salida de datos.")
            img.d-lg-none(src="@/assets/curso/tema1/6.png" alt="La imagen compara un microcontrolador con una planta de papas fritas: el área de carga (1) representa los puertos de entrada/salida, el almacenamiento (2) es la memoria, el procesamiento (3) simboliza la CPU y el empaquetado (4) corresponde a la salida de datos.")
    
    .row.mt-5
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in" data-aos-duration="900")
        .h-100.cont_1_2.p-4
          figure
            img(src="@/assets/curso/tema1/7.svg")
          p.fw-bold Unidad de #[em input – output] (E/S)
          p Similar a la zona de carga y descarga, donde se realiza el despacho y recepción de productos en la planta.
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in" data-aos-duration="900")
        .h-100.cont_1_2.p-4
          figure
            img(src="@/assets/curso/tema1/8.svg")
          p.fw-bold Unidad de memoria
          p Equivalente a la zona de almacenamiento o bodega, con áreas organizadas para el almacenamiento de productos e insumos.
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in" data-aos-duration="900")
        .h-100.cont_1_2.p-4
          figure
            img(src="@/assets/curso/tema1/9.svg")
          p.fw-bold Unidad de procesamiento central (CPU)
          p Corresponde a las zonas de proceso, donde se realizan las transformaciones del producto, desde el lavado hasta el empaque.
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in" data-aos-duration="900")
        .h-100.cont_1_2.p-4
          figure
            img(src="@/assets/curso/tema1/10.svg")
          p.fw-bold Bus de datos
          p Representa las zonas de transporte, los caminos internos por los que se movilizan insumos y productos dentro de la planta.


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
