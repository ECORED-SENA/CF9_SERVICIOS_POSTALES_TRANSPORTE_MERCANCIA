<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 9
      h1 Listas de chequeo

    .row.justify-content-between.align-items-center
      .col-lg-8 
        p(data-aos="fade-down") También denominadas checklist son formatos establecidos por la organización para generar control de los procesos y procedimientos, en estas listas se registran las actividades que son repetitivas y que deben ser controladas, ayuda al cumplimiento de los objetivos y disminuye errores en el proceso, las listas de chequeo se verifican diariamente para evaluar el cumplimiento de los objetivos, generando control y ajustes oportunamente.    
        .cajon.color-acento-contenido.p-4(data-aos="flip-down")
          p(data-aos="fade-down") Todo los procesos o procedimientos de movilización de objetos postales y transporte de mercancías, ya sea que contenga unas características generales o especiales para el condicionamiento de transporte debe disponer de una lista de chequeo, las listas de chequeo registran información para verificar dos procesos o eventos, estos son: 
          ol.lista-ol.mt-4
            li 
              span.text-bold a. 
              p.mb-0 Evento de las condiciones de los objetos postales y mercancías.
            li 
              span.text-bold b. 
              p.mb-0 Evento de los procesos de movilización de los objetos postales.               
      .col-lg-4.imgs-flotantes.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img87.png', alt='')
        img.img-flotante(data-aos="zoom-in")(src='@/assets/curso/temas/sobre-flotante.svg', alt='Imagen decorativa')  

    p.mt-5(data-aos="fade-down") El propósito fundamental de las listas de chequeo es lograr el cumplimiento de los procedimientos establecidos para cada proceso.

    Separador 
    #t_9_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 9.1. Estructura lista de chequeo

    .row.justify-content-center.align-items-start.mt-5
      .col-lg-7
        h5(data-aos="fade-down") Las listas de chequeo o también listas de control son formas generadas para hacer seguimiento a actividades repetitivas, utilizadas para hacer verificaciones y comparaciones de actividades o procesos, de esta manera se asegura no olvidar ningún paso, proceso o procedimiento. 
      .col-lg-5
        p(data-aos="fade-down") El chequeo se aplica para verificar las condiciones de los objetos postales, para verificar el estado al momento de la movilización, tiene como propósito verificar en orden las características naturales del objeto postal o la mercancía.         

    p.mt-5(data-aos="fade-down") La lista de chequeo para empresas de servicios postales y transportes de mercancías consta de: 

    ul.lista-ul--color.mt-5
      li(data-aos="fade-down") 
        i.fas.fa-paper-plane
        p.mb-0 Identificación documental/digital del objeto postal o mercancía.
      li(data-aos="fade-down") 
        i.fas.fa-paper-plane
        p.mb-0 Condiciones de cantidad (si es más de una unidad).
      li(data-aos="fade-down") 
        i.fas.fa-paper-plane
        p.mb-0 Condiciones de calidad del objeto postal (condiciones de bienestar o integridad), se incluye el empaque y el embalaje.
      li(data-aos="fade-down") 
        i.fas.fa-paper-plane
        p.mb-0 Verificación/inspección de características naturales del objeto postal (peso, volumen).
      li(data-aos="fade-down") 
        i.fas.fa-paper-plane
        p.mb-0 Condiciones de cantidad (si es más de una unidad).
      li(data-aos="fade-down") 
        i.fas.fa-paper-plane
        p.mb-0 Condiciones de calidad del objeto postal (condiciones de bienestar o integridad), se incluye el empaque y el embalaje.
      li(data-aos="fade-down") 
        i.fas.fa-paper-plane
        p.mb-0 Verificación/inspección de características naturales del objeto postal (peso, volumen). 

    p.mt-5(data-aos="fade-down") La lista de chequeo para el proceso de movilización contiene:  

    ul.lista-ul--color.mt-5
      li(data-aos="fade-down") 
        i.fas.fa-paper-plane
        p.mb-0 Identificación documental/digital del objeto postal.
      li(data-aos="fade-down") 
        i.fas.fa-paper-plane
        p.mb-0 Verificación de condiciones del objeto postal.
      li(data-aos="fade-down") 
        i.fas.fa-paper-plane
        p.mb-0 Registro al sistema de información del ingreso del objeto postal para inicio de operaciones de movilización.
      li(data-aos="fade-down") 
        i.fas.fa-paper-plane
        p.mb-0 Traslado a zona de almacenamiento.
      li(data-aos="fade-down") 
        i.fas.fa-paper-plane
        p.mb-0 Cargue al vehículo de transporte de objetos postales.
      li(data-aos="fade-down") 
        i.fas.fa-paper-plane
        p.mb-0 Transporte del objeto postal al destino.
      li(data-aos="fade-down") 
        i.fas.fa-paper-plane
        p.mb-0 Descargue del objeto postal en destino.
      li(data-aos="fade-down") 
        i.fas.fa-paper-plane
        p.mb-0 Traslado a zona de almacenamiento o entrega final al cliente destino.
      li(data-aos="fade-down") 
        i.fas.fa-paper-plane
        p.mb-0 Registro al sistema de información de la entrega del objeto postal para identificar el final de operaciones de movilización.     

    Separador 
    #t_9_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 9.2. Reportes 
    p.mt-5(data-aos="fade-down") Los reportes o informes que se generan del proceso de operación de movilización de objetos postales y el transporte de las mercancías son: 

    .row.justify-content-evenly.align-items-stretch.mt-5
      .col-lg-4.tarjeta-color-primario.p-4(data-aos="fade-left")
        img.img-t.pt-4(data-aos="zoom-in")(src='@/assets/curso/temas/img87.svg', alt='')         
        p.mt-4 #[b Reporte de transacciones recibidas por rango de fechas:] este reporte permite establecer parámetros solicitados estableciendo una fecha inicial y una fecha final, genera reportes de procesos concluidos, es decir, entregas realizadas y cerradas.                             
      .col-lg-4.tarjeta-color-primario.p-4(data-aos="fade-left")
        img.img-t.pt-4(data-aos="zoom-in")(src='@/assets/curso/temas/img87.svg', alt='')         
        p.mt-4 #[b Reporte de transacciones recibidas y en proceso:] este permite generar información de los objetos postales en proceso de entrega y los recibidos que inician el proceso de clasificación y preparación para transporte y posterior entrega, se debe definir la hora de corte. 
      .col-lg-4.tarjeta-color-primario.p-4(data-aos="fade-right")
        img.img-t.pt-4(data-aos="zoom-in")(src='@/assets/curso/temas/img87.svg', alt='')         
        p.mt-4 #[b Reporte de transacciones terminadas por rango de fechas:] este informe que contiene el registro de los objetos postales que fueron entregados, con proceso concluido y con soportes de archivo tanto digital como físico.   

    p.mt-5(data-aos="fade-down") Los reportes o informes también se pueden generar teniendo como referentes otros parámetros como lo son:

    ol.lista-ol--cuadro.lista-ol--separador
      li(data-aos="fade-down") 
        .lista-ol--cuadro__vineta
          span 1
        p.mb-0 Reporte por No. de guía
      li(data-aos="fade-down") 
        .lista-ol--cuadro__vineta
          span 2
        p.mb-0 Reporte por cliente
      li(data-aos="fade-down") 
        .lista-ol--cuadro__vineta
          span 3
        p.mb-0 Reporte por origen
      li(data-aos="fade-down") 
        .lista-ol--cuadro__vineta
          span 4
        p.mb-0 Reporte por destino
      li(data-aos="fade-down") 
        .lista-ol--cuadro__vineta
          span 5
        p.mb-0 Reporte por peso
      li(data-aos="fade-down") 
        .lista-ol--cuadro__vineta
          span 6
        p.mb-0 Reporte por volumen     

    p.mt-5(data-aos="fade-down") Además de todos aquellos reportes que de forma individual y, dadas las condiciones específicas del operador de servicios postales, de la herramienta ofimática de la que dispone y de la necesidad del cliente que se puedan integrar.

</template>

<script>
export default {
  name: 'Tema9',
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
