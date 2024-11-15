<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-down" data-aos-duration="800") A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 

    .row.justify-content-center.p-4(style="background-color:#F6F6F6;border-radius:20px;")
      .col-lg-10.mb-5
        figure(data-aos="zoom-in-up" data-aos-duration="900")
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis  sobre microcontroladores, que destaca los componentes (entrada/salida, memoria, CPU), extras (conversor A/D, timer y watchdog) y el lenguaje assembly. Presenta niveles de programación, elementos clave como etiquetas e instrucciones, y las etapas de creación del programa, incluyendo ensamblaje, simulación, quemado y pruebas. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
