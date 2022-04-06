<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 6
      h1 Equipos y herramientas de cargue y descargue

    .row.justify-content-center.align-items-center
      .col-lg-4.imgs-flotantes.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img62.png', alt='')
        img.img-flotante(data-aos="zoom-in")(src='@/assets/curso/temas/sobre-flotante2.svg', alt='Imagen decorativa') 
      .col-lg-7
        p(data-aos="fade-down").mb-0 Los equipos o herramientas de cargue y descargue de mercancías son de gran importancia en la operación habitual de las empresas de servicios postales y transporte de mercancías, estos elementos permiten una adecuada manipulación de la carga, dan eficiencia, seguridad  y garantizan la óptima manipulación de la carga, estos equipos y herramientas se usan según el tipo de  mercancía o producto que se va a manipular, también se tiene en cuenta el peso, el espacio y lugar donde se manipulan los objetos postales o mercancías; importante tener en cuenta que solo pueden ser operados por personal calificado y certificado. Dentro de los equipos y herramientas se tiene:

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img63.jpg', alt='')

      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img64.jpg', alt='')

      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img65.jpg', alt='')

      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img66.jpg', alt='')

    .row.justify-content-center.align-items-center.mt-3
      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img67.jpg', alt='')

      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img68.jpg', alt='')

      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img69.jpg', alt='')

      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img70.jpg', alt='')
</template>

<script>
export default {
  name: 'Tema6',
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
