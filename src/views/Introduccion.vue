<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-lg(data-aos="fade-right" data-aos-duration="800")
        p El desarrollo de programas para microcontroladores es un proceso fundamental en la ingeniería electrónica y la programación de sistemas embebidos. Los microcontroladores son dispositivos que integran componentes de procesamiento, almacenamiento y comunicación en una sola unidad, lo que permite automatizar tareas en dispositivos y sistemas cotidianos. La creación de un programa funcional para estos sistemas requiere precisión y una comprensión detallada de su arquitectura.
        .p-4.p-md-3.mt-4(style="background-color:#E9F7EF;")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/intro1.svg")
            .col-md(style="place-self:center;")
              p.mb-0 El proceso de programación de un microcontrolador implica varias etapas, comenzando con la redacción de instrucciones en un lenguaje de programación específico. Posteriormente, el código fuente se compila y enlaza para traducirlo a un formato comprensible por el #[em hardware]. Esta fase convierte las instrucciones en lenguaje máquina, permitiendo que el microcontrolador las interprete de manera adecuada y eficiente.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left" data-aos-duration="1000")
        figure
          img(src="@/assets/curso/intro2.png")

    .row.mt-4(data-aos="fade-up" data-aos-duration="900")
      .col-lg-auto.d-none.d-lg-block(style="place-self:center;")
        figure
          img(src="@/assets/curso/intro3.png")
      .col-lg(style="place-self:center;")
        p.mb-0 Una vez compilado, el programa se somete a simulación y pruebas antes de ser "quemado" en la memoria del microcontrolador. La simulación ayuda a predecir el comportamiento del programa sin el uso físico del dispositivo, mientras que el quemado transfiere el #[em firmware] directamente al #[em hardware]. Finalmente, se realizan pruebas tanto en #[em hardware] como en #[em software] para garantizar un funcionamiento óptimo y una integración precisa del microcontrolador en su entorno operativo.
    
    figure.mt-4.d-none.d-lg-block(data-aos="fade-up" data-aos-duration="900")
      img(src="@/assets/curso/intro4.png")

      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
