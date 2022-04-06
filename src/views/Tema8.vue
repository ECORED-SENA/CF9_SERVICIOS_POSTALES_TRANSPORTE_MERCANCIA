<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 8
      h1 Objetos postales según peso y volumen

    p(data-aos="fade-down") Los objetos postales tienen claramente definido la logística, tratamiento de movilización, disposición, almacenaje, cargue, transporte, descargue, disposición y entrega final de acuerdo con las características físicas del producto o mercancía, y estas características son el peso y volumen. 

    .row.justify-content-center.align-items-start.mt-5
      .col-lg-6
        h5(data-aos="fade-down") Los objetos postales según peso tienen definido los elementos y recursos necesarios para la operación y transporte desde un lugar de origen al lugar de destino, la entrega al destinatario y soportes para la trazabilidad. 
      .col-lg-6
        p(data-aos="fade-down") Todo objeto postal con un peso inferior a 25 Kilogramos y de acuerdo con la normativa de seguridad y salud en el trabajo se define como paqueteo, y este puede ser movilizado por el personal, sin requerir equipos o herramientas de cargue y descargue. 
    p(data-aos="fade-down").mt-5 El proceso de paqueteo se puede definir cronológicamente en el siguiente paso a paso:  
    .tarjeta.tarjeta--azul.p-4.mt-5.slider-color(data-aos="fade-right")
      SlyderA
        .row.justify-content-center.align-items-center
          .col-lg-2
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img85.svg', alt='')
          .col-lg-8
            ol.lista-ol
              li 
                span.text-bold 01. 
                p.mb-0 Solicitud del cliente (documental y/o digital).
              li 
                span.text-bold 02. 
                p.mb-0 Determinación sitio de recolección (si así se pacta) o sitio de entrega en instalaciones del operador de servicios postales.
              li 
                span.text-bold 03. 
                p.mb-0 Definición de sitio de almacenamiento.    

        .row.justify-content-center.align-items-center
          .col-lg-2
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img85.svg', alt='')
          .col-lg-8
            ol.lista-ol
              li 
                span.text-bold 04. 
                p.mb-0 Recepción, etiquetado/codificación del paquete.
              li 
                span.text-bold 05. 
                p.mb-0 Traslado a sitio de almacenamiento.
              li 
                span.text-bold 06. 
                p.mb-0 Cargue manual (realizado por personas) al vehículo de transporte.                  

        .row.justify-content-center.align-items-center
          .col-lg-2
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img85.svg', alt='')
          .col-lg-8
            ol.lista-ol
              li 
                span.text-bold 07. 
                p.mb-0 Movilización / transporte.
              li 
                span.text-bold 08. 
                p.mb-0 Descargue manual del vehículo de transporte. 
              li 
                span.text-bold 09. 
                p.mb-0 Entrega en el sitio de almacenamiento o en la puerta al cliente final destino. 

    p(data-aos="slide-right").mt-5 #[b Todo objeto postal superior en peso a 25 kilogramos y de acuerdo con la normatividad de Seguridad y salud en el trabajo está definido como carga, y debe ser movilizado utilizando equipos mecanizados especializados para este tipo de operaciones.]

    p(data-aos="fade-down") El proceso de carga se puede definir cronológicamente en el siguiente paso a paso: 

    .tarjeta.tarjeta--azul.p-4.mt-5.slider-color(data-aos="fade-right")
      SlyderA
        .row.justify-content-center.align-items-center
          .col-lg-2
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img86.svg', alt='')
          .col-lg-8
            ol.lista-ol
              li 
                span.text-bold 01. 
                p.mb-0 Solicitud del cliente (documental y/o digital).
              li 
                span.text-bold 02. 
                p.mb-0 Determinación del sitio de recolección (si así se pacta) o sitio de entrega en instalaciones del operador de servicios postales.
              li 
                span.text-bold 03. 
                p.mb-0 Definición del sitio de almacenamiento.    

        .row.justify-content-center.align-items-center
          .col-lg-2
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img86.svg', alt='')
          .col-lg-8
            ol.lista-ol
              li 
                span.text-bold 04. 
                p.mb-0 Recepción, etiquetado/codificación del paquete.
              li 
                span.text-bold 05. 
                p.mb-0 Traslado a sitio de almacenamiento.
              li 
                span.text-bold 06. 
                p.mb-0 Cargue al vehículo de transporte, utilizando equipo mecanizado. 

        .row.justify-content-center.align-items-center
          .col-lg-2
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img86.svg', alt='')
          .col-lg-8
            ol.lista-ol
              li 
                span.text-bold 07. 
                p.mb-0 Movilización / transporte.
              li 
                span.text-bold 08. 
                p.mb-0 Descargue al lugar de recepción utilizando equipos mecanizados
              li 
                span.text-bold 09. 
                p.mb-0 Entrega en el sitio de almacenamiento o en la puerta al cliente final destino. 

    p(data-aos="slide-right").mt-5 #[b El volumen en los objetos postales normalmente define el tipo de vehículo requerido para la operación de movilización desde el origen hasta el destino, según el volumen también se define la necesidad de equipos mecanizados especializados de movilización.]                   

</template>

<script>
export default {
  name: 'Tema8',
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
