<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Empaques y embalajes
    
    p(data-aos="fade-down") Son los materiales, métodos y procedimientos que sirven para preparar, disponer, acondicionar, presentar, manipular, conservar y transportar una mercancía, el embalaje es la envoltura con la cual se protege las mercancías y permite una adecuada manipulación, transporte y almacenamiento. A continuación, se presenta el recurso para que pueda profundizar al respecto:   

    TabsC.color-acento-contenido.mt-5(data-aos="fade-right")
      .py-3.py-md-4(titulo="Empaques de mercancía")
        .row.justify-content-center.align-items-center
          .col-lg-4.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img29.png', alt='')
          .col-lg-5
            h5 Empaques de mercancía
            p Una de las características del empaque es que brinda información sobre el producto. Los empaques son la exposición o presentación comercial del producto, este asegura que el producto no entre en contacto con el medio exterior, lo conserva limpio y en caso de ser un alimento debe consérvalo fresco, brinda la imagen del producto y es la presentación de este al cliente, cumple una función de <i>marketing</i>.

      .py-3.py-md-4(titulo="Embalaje de mercancia")
        .row.justify-content-center.align-items-center
          .col-lg-5
            h5 Embalaje de mercancía
            p Los embalajes contienen códigos de barras o etiquetas,  esto permite fácil ubicación en el almacenaje, además contiene información de tipo legal como correcta manipulación, conservaciones del producto, prohibiciones y es  la forma de proteger la mercancía durante el proceso de transporte. 
          .col-lg-4.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img30.png', alt='')                      

    .cajon.color-primario.p-4.mt-5(data-aos="flip-down")
      p(data-aos="fade-down").mb-0 La Norma ISO 780 orienta y brinda las instrucciones para el manejo de los envases, empaque y embalajes en cuanto a la simbología o lenguaje pictórico, con el objeto de orientar el manejo que se debe dar a la carga, así como las señales de advertencia; la Norma ISO 13274 es la que brinda las orientaciones para los empaques, embalajes y transporte de mercancías peligrosas; para las instrucciones de rotulado y marcación se debe seguir la orientación de la Norma ISO 7000. 

    p(data-aos="fade-down").mt-5 Los materiales que normalmente son utilizados para empaque y embalajes teniendo en cuenta el tipo de productos son cartón corrugado, plástico, cajas y huacales de madera, y material textil, este para contener productos a granel.    

    .tarjeta.color-primario.p-3.mt-5(data-aos="zoom-in-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Si es de su interés ampliar la información puede ir al material complementario y consultar el video #[b “Envase, empaque, embalaje”]
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=bk8o7KSwJho" target="_blank")
                span Ver más
                i.fas.fa-link    

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
