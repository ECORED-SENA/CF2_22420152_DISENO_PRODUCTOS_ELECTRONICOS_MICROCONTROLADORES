<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Lenguaje de programación
    
    .row
      .col-lg(data-aos="fade-right")
        p Cada lenguaje de programación posee características propias en cuanto a gramática y sintaxis. A diferencia del lenguaje humano, los lenguajes de programación transmiten cuatro ideas fundamentales y requieren precisión, claridad y ausencia de ambigüedad. Existen dos niveles principales de lenguajes de programación:
        .p-3.mt-4(style="background-color:#F1D3F6;")
          p.fw-bold.mb-1 Lenguajes de bajo nivel
          p.mb-0 Son una representación simbólica del lenguaje máquina.
        .p-3(style="background-color:#D4F0E0;")
          p.fw-bold.mb-1 Lenguajes de alto nivel
          p.mb-0 Facilitan la programación mediante macroinstrucciones, que posteriormente se traducen al lenguaje máquina.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/1.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/4.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 #[em Lenguaje Assembly] (ASM)
    
    .row
      .col-lg(data-aos="fade-right")
        p Cada lenguaje tiene características propias en cuanto a su gramática y sintaxis. A diferencia del lenguaje humano que permite transmitir múltiples ideas a la vez, los lenguajes de programación no requieren que comuniquen gran variedad de pensamientos, es suficiente que permitan la transmisión de solo cuatro pensamientos básicos. Además, la comunicación a través de estos lenguajes tiene que ser precisa, clara y sin ambigüedades.
        .cont_decorativo.mb-4(data-aos="fade-right")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/tema1/4.svg")
            .col.ps-2(style="place-self:end;")
              h3.mb-0.mb-lg-2.pe-4 Directivas en lenguaje #[em Assembly]
        p Las directivas en #[em Assembly] son similares a las instrucciones pero no dependen del modelo específico del microcontrolador; representan una característica propia del lenguaje ASM y se utilizan para asignar significados o propósitos a través de variables o registros.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/2.svg")
    
    .cont_titulo_3.mt-5.mb-4.p-1.ps-3.pe-3(data-aos="fade-right")
      h4.mb-0 Directivas de control
    
    p(data-aos="fade-up") Las directivas de control en #[em Assembly] son comandos que gestionan aspectos específicos del programa, como la inclusión de archivos, la definición de constantes y variables, y la configuración de memoria y #[em bits].

    .cont_2_1.mt-4.pt-4.pb-4.pb-xl-5.pt-xl-5.mt-5
      .tarjeta.bg-white.p-4
        SlyderA(tipo="b")
          .row.pt-lg-4.col-xl-10.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 #DEFINE
              p.mb-0 Permite intercambiar un fragmento de texto por otro.
              p.mb-0 #[strong Sintaxis:] #define &lt;texto&gt; [&lt;otro texto&gt;]
              p.mb-0 #[strong Descripción:] Sustituye cada aparición de &lt;texto&gt; en el programa por &lt;otro texto&gt;.
              p.mb-0 #[strong Ejemplo:] #define encendido 1
              p.mb-0 #define apagado 0
            .col-lg-4
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/4.svg')
          .row.pt-lg-4.col-xl-10.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 #INCLUDE
              p.mb-0 Incluye un archivo adicional en el programa.
              p.mb-0 #[strong Sintaxis:] #include &lt;nombre_de_archivo&gt; o #include "nombre_de_archivo"
              p.mb-0 #[strong Descripción:] Copia el contenido del archivo en el lugar donde se incluye. &lt; &gt; para archivos de sistema, comillas " para archivos de usuario.
              p.mb-0 #[strong Ejemplo:] #include &lt;regs.h&gt;
              p.mb-0 #include "subprog.asm"
            .col-lg-4
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/4.svg')
          .row.pt-lg-4.col-xl-10.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 CONSTANT
              p.mb-0 Asigna un valor numérico constante.
              p.mb-0 #[strong Sintaxis:] constante &lt;nombre&gt; = &lt;valor&gt;
              p.mb-0 #[strong Ejemplo:] constant MAXIMO = 100
              p.mb-0 constant Longitud = 30
            .col-lg-4
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/4.svg')
          .row.pt-lg-4.col-xl-10.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 VARIABLE
              p.mb-0 Define un valor numérico variable.
              p.mb-0 #[strong Sintaxis:] variable &lt;nombre&gt; = &lt;valor&gt;
              p.mb-0 #[strong Ejemplo:] variable nivel = 20
              p.mb-0 variable tiempo = 13
            .col-lg-4
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/4.svg')
          .row.pt-lg-4.col-xl-10.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 SET
              p.mb-0 Define variables en ASM y permite redefinirlas.
              p.mb-0 #[strong Sintaxis:] &lt;nombre_variable&gt; set &lt;valor&gt;
              p.mb-0 #[strong Ejemplo:] nivel set 0
              p.mb-0 longitud set 12
              p.mb-0 nivel set 45
            .col-lg-4
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/4.svg')
          .row.pt-lg-4.col-xl-10.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 EQU
              p.mb-0 Define una constante.
              p.mb-0 #[strong Sintaxis:] &lt;nombre_constante&gt; equ &lt;valor&gt;
              p.mb-0 #[strong Ejemplo:] cinco equ 5
              p.mb-0 seis equ 6
              p.mb-0 siete equ 7
            .col-lg-4
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/4.svg')
          .row.pt-lg-4.col-xl-10.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 ORG
              p.mb-0 Establece la dirección de memoria donde se graba el programa.
              p.mb-0 #[strong Sintaxis:] &lt;etiqueta&gt; org &lt;valor&gt;
              p.mb-0 #[strong Ejemplo:] Inicio org 0x00
              p.mb-0 movlw 0xFF
              p.mb-0 movwf PORTB
            .col-lg-4
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/4.svg')
          .row.pt-lg-4.col-xl-10.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 END
              p.mb-0 Marca el final del programa.
              p.mb-0 #[strong Sintaxis:] end
              p.mb-0 #[strong Ejemplo:] movlw 0xFF
              p.mb-0 movwf PORTB
              p.mb-0 end
            .col-lg-4
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/4.svg')
          .row.pt-lg-4.col-xl-10.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 _CONFIG
              p.mb-0 Ajusta #[em bits] de configuración, como el oscilador.
              p.mb-0 #[strong Sintaxis:] _config &lt;termino&gt; o _config &lt;direccion&gt;, &lt;termino&gt;
              p.mb-0 #[strong Ejemplo:] _CONFIG _CP_OFF & _WDT_OFF & _PWRTE_ON & _XT_OSC
            .col-lg-4
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/4.svg')
          .row.pt-lg-4.col-xl-10.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 PROCESSOR
              p.mb-0 Define el modelo de microcontrolador.
              p.mb-0 #[strong Sintaxis:] Processor &lt;tipo_microcontrolador&gt;
              p.mb-0 #[strong Ejemplo:] processor 16F84
            .col-lg-4
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/4.svg')
          .row.pt-lg-4.col-xl-10.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 CBLOCK
              p.mb-0 Define un bloque de constantes nombradas.
              p.mb-0 #[strong Sintaxis:] Cblock [&lt;termino&gt;]
              p.mb-0 &lt;etiqueta&gt; [:&lt;incremento&gt;], &lt;etiqueta&gt; [:&lt;incremento&gt;] endc
              p.mb-0 #[strong Ejemplo:] Cblock 0x02
              p.mb-0 primero, segundo, tercero
              p.mb-0 Endc
            .col-lg-4
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/4.svg')
          .row.pt-lg-4.col-xl-10.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 DE
              p.mb-0 Define un #[em byte] en la memoria EEPROM.
              p.mb-0 #[strong Ejemplo:] org H'2100'
              p.mb-0 de "Version 1.0", 0
            .col-lg-4
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/4.svg')
          .row.pt-lg-4.col-xl-10.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 DT
              p.mb-0 Define una tabla de datos.
              p.mb-0 #[strong Ejemplo:] dt "Mensaje", 0
            .col-lg-4
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/4.svg')
    
    .cont_titulo_3.mt-5.mb-4.p-1.ps-3.pe-3(data-aos="fade-right")
      h4.mb-0 Directivas de configuración
    
    p(data-aos="fade-up") Las directivas de configuración en #[em Assembly] permiten ajustar parámetros esenciales del programa, como la configuración de #[em bits], el modelo de microcontrolador, y la definición de bloques de datos o condiciones de ejecución, optimizando el control y funcionalidad del código.

    .col-xl-10.m-auto.mt-5
      .row
        .col-lg(data-aos="fade-right")
          LineaTiempoD.color-secundario
            div.text-small(numero="1" titulo="_CONFIG") 
              p.mb-0 Ajusta #[em bits] de configuración, como el oscilador.
              p.mb-0 #[strong Sintaxis:] _config &lt;termino&gt; o _config &lt;direccion&gt;, &lt;termino&gt;
              p.mb-0 #[strong Ejemplo:] _CONFIG _CP_OFF & _WDT_OFF & _PWRTE_ON & _XT_OSC
            div.text-small(numero="2" titulo="PROCESSOR") 
              p.mb-0 Define el modelo de microcontrolador.
              p.mb-0 #[strong Sintaxis:] Processor &lt;tipo_microcontrolador&gt;
              p.mb-0 #[strong Ejemplo:] processor 16F84
            div.text-small(numero="3" titulo="CBLOCK") 
              p.mb-0 Define un bloque de constantes nombradas.
              p.mb-0 #[strong Sintaxis:] Cblock [ &lt;termino&gt;]  &lt;etiqueta&gt; [: &lt;incremento&gt;],  &lt;etiqueta&gt; [: &lt;incremento&gt;] endc
              p.mb-0 #[strong Ejemplo:] Cblock 0x02 primero, segundo, tercero Endc
            div.text-small(numero="4" titulo="DB") 
              p.mb-0 Define un #[em byte] de datos.
              p.mb-0 #[strong Ejemplo:] db 't', 0x0f, 'e', 's', 0x12
            div.text-small(numero="5" titulo="DE") 
              p.mb-0 Define un #[em byte] en la memoria EEPROM.
              p.mb-0 #[strong Ejemplo:] org H'2100' de "Version 1.0", 0
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema2/5.png")
      
      .row.mt-4
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/6.png")
        .col-lg(data-aos="fade-left")
          LineaTiempoD.color-secundario
            div.text-small(numero="6" titulo="DT") 
              p.mb-0 Define una tabla de datos.
              p.mb-0 #[strong Ejemplo:] dt "Mensaje", 0
            div.text-small(numero="7" titulo="IF, ELSE, ENDIF") 
              p.mb-0 Controlan la ejecución basada en condiciones.
              p.mb-0 #[strong Ejemplo:] If nivel = 100 goto CARGA else goto DESCARGA endif
            div.text-small(numero="8" titulo="WHILE, ENDW") 
              p.mb-0 Ejecuta secciones de código mientras se cumpla una condición.
              p.mb-0 #[strong Ejemplo:] While i < 10 i = i + 1 endw
            div.text-small(numero="9" titulo="IFDEF, IFNDEF") 
              p.mb-0 Ejecuta el código si una definición existe (IFDEF) o no (IFNDEF).
              p.mb-0 #[strong Ejemplo:] #define prueba Ifdef prueba ... endif
            div.text-small(numero="10" titulo="Operadores Matemáticos") 
              p.mb-0 Incluyen +, -, *, /, % y operadores #[em bit] a #[em bit] como &, `
    
    .cont_titulo_3.mt-5.mb-4.p-1.ps-3.pe-3(data-aos="fade-right")
      h4.mb-0 Instrucciones de condición
    
    p(data-aos="fade-up") Las instrucciones de condición en #[em Assembly] permiten controlar el flujo de ejecución del programa según se cumplan o no ciertas condiciones, proporcionando flexibilidad en la toma de decisiones dentro del código.

    .cont_2_2.mt-5
      .row.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in" data-aos-duration="850")
          .cont_2_3.h-100.p-4
            h5 IF, ELSE, ENDIF
            p.mt-4.mb-0 Controlan la ejecución basada en condiciones.
            p.mb-0.fw-bold Ejemplo
            p If nivel = 100 #[br] goto CARGA #[br] else #[br] goto DESCARGA #[br]endif
        .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in" data-aos-duration="850")
          .cont_2_3.h-100.p-4
            h5 WHILE, ENDW
            p.mt-4.mb-0 Ejecuta secciones de código mientras se cumpla una condición.
            p.mb-0.fw-bold Ejemplo
            p While i < 10 #[br] i = i + 1 #[br] endw
        .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in" data-aos-duration="850")
          .cont_2_3.h-100.p-4
            h5 IFDEF, IFNDEF
            p.mt-4.mb-0 Ejecuta el código si una definición existe (IFDEF) o no (IFNDEF).
            p.mb-0.fw-bold Ejemplo
            p #define prueba #[br] Ifdef prueba #[br] ... #[br] endif
      
      .cont_titulo_3.mt-5.mb-4.p-1.ps-3.pe-3(data-aos="fade-right")
        h4.mb-0 Operadores matemáticos
    
      p(data-aos="fade-up") Los operadores matemáticos en #[em Assembly] permiten realizar cálculos aritméticos y lógicos en el programa, proporcionando una variedad de operaciones como suma, multiplicación, desplazamientos de #[em bits] y comparaciones, esenciales para manipular y evaluar datos de manera precisa en el código.

      .col-xl-10.m-auto.mt-5
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Tabla 1.
          span 
        .tabla-a.color-acento-contenido(data-aos="zoom-in-up")
          table
            thead
              tr.text-center(style="background-color:#EBF4FF;")
                th(style="border:0;") Símbolo
                th(style="border:0;") Descripción
                th(style="border:0;") Ejemplo
            tbody.bg-white
              tr
                td.fw-bold $
                td Estado actual del contador del programa
                td goto $ + 3
              tr
                td.fw-bold (
                td Corchete izquierdo
                td 1 + (d * 4)
              tr
                td.fw-bold )
                td Corchete derecho
                td (Length + 1) * 256
              tr
                td.fw-bold !
                td Complemento lógico
                td if ! (a = b)
              tr
                td.fw-bold ~ 
                td Complemento 
                td flags = ~flags 
              tr
                td.fw-bold -
                td Negación (segundo complemento) 
                td -1 * Length 
              tr
                td.fw-bold high 
                td Devuelve el #[em byte] más alto 
                td movlw high CTR_Table 
              tr
                td.fw-bold low 
                td Devuelve el #[em byte] más inferior 
                td movlw low CTR_Table 
              tr
                td.fw-bold *
                td Multiplicador 
                td a = b * c 
              tr
                td.fw-bold /
                td Divisor 
                td a = b / c 
              tr
                td.fw-bold %
                td Divisor por módulo 
                td entry_len = tot_len % 15 
              tr
                td.fw-bold +
                td Sumando 
                td tot_len =entry_len * 3 + 1 
              tr
                td.fw-bold -
                td Restando 
                td entry_len = (tot - 1) / 8 
              tr
                td.fw-bold <<
                td Moviendo a la izquierda 
                td val = flags << 1 
              tr
                td.fw-bold >>
                td Moviendo a la derecha 
                td val = flags >> 1 
              tr
                td.fw-bold >=
                td Mayor que o igual 
                td if entry_idx >= num_entries 
              tr
                td.fw-bold >
                td Mayor que 
                td if entry_idx > num_entries 
              tr
                td.fw-bold <
                td Menor que 
                td if entry_idx < num_entries 
              tr
                td.fw-bold <=
                td Menor que, o igual 
                td if entry_idx <= num_entries 
              tr
                td.fw-bold ==
                td igual
                td if entry_idx == num_entries 
              tr
                td.fw-bold !=
                td No igual
                td if entry_idx != num_entries 
              tr
                td.fw-bold &
                td Operación AND en los #[em bits] 
                td flags = flags & ERROR_BIT 
              tr
                td.fw-bold ^ 
                td Exclusivo OR en los #[em bits] 
                td flags = flags ^ ERROR_BIT 
              tr
                td.fw-bold ` 
                td ` 
                td Lógica OR sobre #[em bits] 
              tr
                td.fw-bold &&
                td Lógica OR sobre #[em bits] (if) 
                td if (len ==512) && (b ==c) 
              tr
                td.fw-bold =
                td Igual
                td entry_index = 0 
              tr
                td.fw-bold +=
                td Añadir y asignar 
                td entry_index +=1 
              tr
                td.fw-bold -=
                td Restar y asignar 
                td entry_index -=1 
              tr
                td.fw-bold *=
                td Multiplicar y asignar 
                td entry_index *= entry_length 
              tr
                td.fw-bold /=
                td Dividir y asignar 
                td entry_index /= entry_length 
              tr
                td.fw-bold %=
                td Divide el módulo y asignar 
                td entry_index %=1 
              tr
                td.fw-bold <<= 
                td Mueve a la izquierda y asigna 
                td flags << = 3 
              tr
                td.fw-bold >>= 
                td Mueve a la derecha y asigna 
                td flags >> = 3 
              tr
                td.fw-bold &= 
                td Lógica AND y asigna 
                td flags &= ERROR_FLAG 
              tr
                td.fw-bold ` 
                td =&#96; 
                td Lógica OR y asigna 
              tr
                td.fw-bold ^= 
                td Exclusivo OR y asigna 
                td flags ^= ERROR_FLAG 
              tr
                td.fw-bold ++
                td Incrementa por uno 
                td 1++
    
    p.mt-5(data-aos="fade-up") Ejemplo de lenguaje #[em Assembly]: "Hola Mundo" en x86 bajo DOS: 
    .col-xl-10.m-auto.mt-4
      .row.justify-content-center
        .col-lg-auto.col-md-9(data-aos="fade-up" data-aos-duration="900")
          figure
            img(src="@/assets/curso/tema2/8.svg")
        .col-lg.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema2/9.png")

    p.mt-5(data-aos="fade-up") Este ejemplo imprime "Hola Mundo" en DOS usando lenguaje #[em Assembly].
          



</template>

<script>
export default {
  name: 'Tema2',
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
