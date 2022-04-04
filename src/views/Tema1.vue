<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Mercancías y objetos postales
   
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se define como mercancía cualquier objeto factible de ser comercializado o sobre el cual se pueda realizar una transacción económica en un mercado, tiene como característica principal que está dirigido a satisfacer las necesidades del consumidor.
        br
        br
        | Una mercancía es un producto o un bien que se puede obtener realizando una erogación de dinero como medio de intercambio que permite identificar una demanda. 

    p(data-aos="fade-down").mt-5 Las mercancías conservan unas características entre las que se enumeran: 

    .row.justify-content-evenly.align-items-stretch.mt-5
      .col-lg-3.color-yellow.p-3(data-aos="fade-left")
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img3.svg', alt='')
        p.mt-3(data-aos="fade-down") La elaboración involucra costos que son generados por distintos conceptos entre los que se cuenta materias primas, distribuciones, mano de obra, entre otros.
      .col-lg-3.color-yellow1.p-3(data-aos="flip-down")
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img4.svg', alt='')
        p.mt-3(data-aos="fade-down") El proceso de fabricación busca generar rentabilidad por la comercialización.
      .col-lg-3.color-yellow.p-3(data-aos="fade-right")
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img5.svg', alt='')
        p.mt-3(data-aos="fade-down") Involucra gran cantidad de personas desde el proceso de fabricación hasta llegar al consumidor.

    p(data-aos="fade-down").mt-5 Las mercancías tienen un valor, históricamente se han planteado muchas teorías sobre lo que determina el valor de las mercancías, para el caso se va a tomar la siguiente teoría:
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img6.png', alt='')

      .col-lg-5
        .color-fondo-text.bg-color(data-aos="fade-down")
          .color-fondo-text__texto              
            i.fas.fa-quote-left.quo
            h3.mb-0.px-5 Del trabajo necesario para producir las mercancías depende el valor de estas, allí se considera el trabajo como factor clave.
              p.text-end.mt-4 Karl Marx 
                i.fas.fa-quote-right.quo.quo-r.ps-3  

    .row.justify-content-between.align-items-center.mt-5
      .col-lg-8 
        p(data-aos="fade-down") Se une el concepto de competencia de tal manera que quien dedique menos horas a la producción de un producto y que del proceso se obtenga un producto de calidad obtendrá mayores beneficios económicos (Westreicher, 2020). 

        p(data-aos="fade-down") #[b Son considerados objetos postales las cartas, las tarjetas postales, las facturas, los impresos, los envíos publicitarios, los cecogramas, así como los pequeños paquetes que no superen los 2 kilogramos de peso y todos los demás objetos que circulen por las redes postales del servicio de mensajería y correos.]

        p(data-aos="fade-down") El sistema encargado de transportar documentos y paquetes de tamaño pequeño y mediano denominados encomiendas alrededor del mundo se denomina servicio postal, los envíos realizados a través de este sistema son denominados correo o correspondencia.       
               
      .col-lg-4.imgs-flotantes.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img7.png', alt='')
        img.img-flotante(data-aos="zoom-in")(src='@/assets/curso/temas/sobre-flotante.svg', alt='Imagen decorativa')    

    .cajon.color-primario.p-4.mt-5
      h5 En Colombia el operador postal oficial es 4-72, es la entidad jurídica habilitada por el Ministerio de Tecnologías de la Información y las Comunicaciones para ofrecer los servicios postales a través de la red postal; los operadores postales se clasifican en:
      ul.lista-ul--color
        li 
          i.fas.fa-paper-plane
          p Operador Postal Oficial (OPO), Operador designado, Concesionario de correo.                      

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
