<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Marcado y rotulado de mercancías
    p(data-aos="fade-down") Es un proceso de gran importancia en la prestación de servicios postales, transporte de mercancías y mucho más en la distribución física internacional; el marcado y rotulado facilita la identificación de forma rápida de las piezas que conforman la carga, permite agilidad en el proceso de confrontación de las cantidades físicas con los registros en inventarios, además de la localización de los productos en bodegas.

    p(data-aos="fade-down") Para el proceso de marcado se tienen diferentes tipos, estos son:
    .row.mt-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5.mt-5.pt-5 Marcas informativas
              p.mb-5.mb-5 Son las que tienen relación con la información del producto.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img31.jpg')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-down")
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5.mt-5.pt-5 Marcas de manipuleo
              p.mb-5.mb-5 Son los símbolos o las orientaciones gráficas internacionales que permiten una correcta manipulación del producto o mercancías.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img32.jpg')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-left")
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5.mt-5.pt-5 Marca de expedición 
              p.mb-5.mb-5 Refiere los datos necesarios para la entrega de la mercancía o el embalaje al destinatario o en el lugar de destino.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img33.jpg')})`}")

    TabsA.color-primario.mt-5(data-aos="fade-left") 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Indebilidad")
        .row.justify-content-center.align-items-center      
          .col-lg-5
            h5 Indebilidad
            p.mt-3 Es decir que la tinta o pintura usada debe tener resistencia al agua y a las inclemencias del clima.
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img34_1.png', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="Localización")
        .row.justify-content-center.align-items-center      
          .col-lg-5
            h5 Localización
            p.mt-3 La marca debe permitir fácil identificación, así como ubicar las marcas nuevas y poder desechar las obsoletas que no generan lectura adecuada del avance en el recorrido de la mercancía, es recomendable ubicar las marcas en la parte superior de la mercancía.

          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img34.png', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="Suficiencia")
        .row.justify-content-center.align-items-center      
          .col-lg-5
            h5 Suficiencia
            p.mt-3 La suficiencia suministra información sobre recomendaciones técnicas del tipo de carga y medio de transporte.
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img35.png', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="Legibilidad")
        .row.justify-content-center.align-items-center      
          .col-lg-5
            h5 Legibilidad
            p.mt-3 Que la marca que se usa es completamente clara, legible y así debe conservarse, la localización.
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img36.png', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="Conformidad")
        .row.justify-content-center.align-items-center      
          .col-lg-5
            h5 Conformidad
            p.mt-3 La conformidad es la garantía de que el marcado se hace cumpliendo la normatividad, cuando son mercancías para exportar esta conformidad debe garantizar que se cumple la normativa tanto del país de origen como del país destino. 

          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img37.png', alt='')
                                            
    .cajon.color-acento-contenido.p-4.mt-5(data-aos="flip-down")
      p(data-aos="fade-down").mb-0 El etiquetado o rotulado ecológico en Colombia es un sello denominado -Sello Ambiental Colombiano-, creado por el Ministerio de Ambiente y Desarrollo Sostenible, en el plan estratégico de mercados verdes, este sello asegura que el producto que se comercializa es inocuo e inofensivo al medio ambiente en todo el proceso de producción, además de que cumple la normatividad obligatoria y normativas voluntarias, este sello permite cumplir con las demandas del mercado actual como son productos de calidad, económicos y que dan protección al medio ambiente y aportan a la salud del consumidor final.

    p(data-aos="fade-down").mt-5 La etiqueta es una parte fundamental del producto, ya que sirve para ser identificado, poder describirlo, diferenciarlo y ser un servicio al cliente de una forma rápida y precisa. A continuación, se hace una invitación a visitar el material complementario:

    .tarjeta.color-primario.p-3.mt-5(data-aos="zoom-in-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Si es de su interés ampliar la información puede ir al material complementario y consultar el video #[b “Etiquetado, marcado y rotulación”]
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=iYronFs13cE" target="_blank")
                span Ver más
                i.fas.fa-link    

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
