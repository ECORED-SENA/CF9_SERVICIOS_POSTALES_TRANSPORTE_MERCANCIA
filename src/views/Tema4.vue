<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Procedimientos, volumen, peso y medio de transporte 

    p(data-aos="fade-down") Las características de las mercancías son el parámetro para definir el medio de transporte que se debe disponer para movilizarlas, los tipos de vehículos que se usan son:

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center.align-items-center.pb-2(titulo="Camiones rígidos")
        .col-lg-4
          img.img-a.img-t.my-3(src='@/assets/curso/temas/img38.png', alt='')
        .col-lg-8
          p Es el vehículo que tiene integrada la cabina y la estructura de carga, comparten un mismo chasis, tienen una longitud de 12 metros con capacidad de carga de hasta 32 toneladas, generalmente usados para procesos de distribución y reparto de mercancías. 

      .row.justify-content-center.align-items-center.pb-2(titulo="Camiones articulados")
        .col-lg-4
          img.img-a.img-t.my-3(src='@/assets/curso/temas/img39.png', alt='')
        .col-lg-8
          p Tienen dos unidades o bloques separados, la cabina y el remolque, las partes están por unidad por una estructura articulada, la cabeza es la parte tractora que arrastra el remolque donde se transporta la mercancía. En el mercado existen varios tipos de camiones articulados, estos son: tren de carretera y tráiler.

      .row.justify-content-center.align-items-center.pb-2(titulo="Camión de plataforma abierta")
        .col-lg-4
          img.img-a.img-t.my-3(src='@/assets/curso/temas/img40.png', alt='')
        .col-lg-8
          p Como su nombre lo indica el semirremolque no tiene cobertura, usados principalmente para transportar elementos de construcción.

      .row.justify-content-center.align-items-center.pb-2(titulo="Camión de lona")
        .col-lg-4
          img.img-a.img-t.my-3(src='@/assets/curso/temas/img41.png', alt='')
        .col-lg-8
          p Con los que tienen disponible una lona para protección de la carga, son usados para transportar diferentes tipos de mercancías como productos de consumo, madera, metales livianos, entre otros.

      .row.justify-content-center.align-items-center.pb-2(titulo="Camión frigorífico")
        .col-lg-4
          img.img-a.img-t.my-3(src='@/assets/curso/temas/img42.png', alt='')
        .col-lg-8
          p Usados para transportar productos que requieren manejo de temperatura como alimentos y medicamentos, dicho camión está equipado para sostener temperatura interna de hasta -20ºC, esta temperatura se ajusta según la mercancía o producto que transporte.

      .row.justify-content-center.align-items-center.pb-2(titulo="Camión cisterna")
        .col-lg-4
          img.img-a.img-t.my-3(src='@/assets/curso/temas/img43.png', alt='')
        .col-lg-8
          p Conocido también como camión de gas o camión de combustible, es usado para transportar cargas líquidas, gases o químicos por las carreteras de forma segura.

      .row.justify-content-center.align-items-center.pb-2(titulo="Camión contenedor")
        .col-lg-4
          img.img-a.img-t.my-3(src='@/assets/curso/temas/img44.png', alt='')
        .col-lg-8
          p Son semirremolques adaptados para transportar materiales o mercancías de forma multimodal, es decir, haciendo uso de diferentes medios de transporte, esto es que hacen proceso de trasbordo de mercancías.                                                           
    .cajon.color-acento-contenido.p-4.mt-5(data-aos="flip-down")
      .row.justify-content-center.align-items-center
        .col-auto
          img.img-a.img-t.my-3(src='@/assets/curso/temas/img45.svg', alt='')
        .col-lg-10
          p(data-aos="fade-down").mb-0 En Colombia el peso y las dimensiones de los camiones están reguladas mediante la Resolución No. 004100 de 2004, la cual tiene por objeto la reglamentación de los vehículos automotores de carga terrestre y los requisitos en cuanto dimensiones y peso (Invías, 2004). 

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 1. 
      span Clasificación de los medios de transporte
    .row.justify-content-center.align-items-center.mt-3
      .col-lg-4.my-2
        img.img-a.img-t(src='@/assets/curso/temas/img46.svg', alt='')
      .col-lg-4.my-2
        p.p-color.p-4.mb-0 Los medios de transporte en cuanto a vehículos de carga se clasifican con base en la disposición de los ejes, para la clasificación se utiliza la norma técnica nacional e internacional y se usan letras, ver figura 1. 

    p(data-aos="fade-down").mt-5 Los vehículos para circular en el territorio colombiano deben cumplir con unos pesos máximos de transporte así: un vehículo de dos ejes tiene una capacidad de carga de máximo 5,5 toneladas, permiten llevar mercancías de poco volumen o definidas como paqueteo, son mercancías normalmente manipulables dentro del rango de la seguridad y salud en el trabajo, se transporta una cantidad importante de mercancías en un vehículo pequeño y genera bajo costo de operación.

    .tabla-a.color-acento-contenido.mt-5 
      table
        thead
          tr
            th Configuración
            th Esquema del vehículo
            th Descripción
        tbody
          tr
            td(data-aos="fade-down").text-center #[b C2]
            td(data-aos="slide-left") 
              img.img-a.img-t(src='@/assets/curso/temas/img47.svg', alt='')
            td(data-aos="fade-down") Camión rígido de dos ejes. Camión sencillo

          tr
            td(data-aos="fade-down").text-center #[b C3]
            td(data-aos="slide-left") 
              img.img-a.img-t(src='@/assets/curso/temas/img48.svg', alt='')
            td(data-aos="fade-down") Camión rígido de tres ejes.

          tr
            td(data-aos="fade-down").text-center #[b C3 Tándem direccional]
            td(data-aos="slide-left") 
              img.img-a.img-t(src='@/assets/curso/temas/img49.svg', alt='')
            td(data-aos="fade-down") Camión rígido de tres ejes.

          tr
            td(data-aos="fade-down").text-center #[b C4]
            td(data-aos="slide-left") 
              img.img-a.img-t(src='@/assets/curso/temas/img50.svg', alt='')
            td(data-aos="fade-down") Camión rígido de cuatro ejes.

          tr
            td(data-aos="fade-down").text-center #[b C2S1]
            td(data-aos="slide-left") 
              img.img-a.img-t(src='@/assets/curso/temas/img51.svg', alt='')
            td(data-aos="fade-down") Tractocamión de dos ejes con semirremolque de un eje.

          tr
            td(data-aos="fade-down").text-center #[b C2S2]
            td(data-aos="slide-left") 
              img.img-a.img-t(src='@/assets/curso/temas/img52.svg', alt='')
            td(data-aos="fade-down") Tractocamión  de dos ejes con semirremolque de dos ejes.

          tr
            td(data-aos="fade-down").text-center #[b C3S1]
            td(data-aos="slide-left") 
              img.img-a.img-t(src='@/assets/curso/temas/img53.svg', alt='')
            td(data-aos="fade-down") Tractocamión de tres ejes con semirremolque de un eje.

          tr
            td(data-aos="fade-down").text-center #[b C3S2]
            td(data-aos="slide-left") 
              img.img-a.img-t(src='@/assets/curso/temas/img54.svg', alt='')
            td(data-aos="fade-down") Tractocamión  de tres ejes con semirremolque de dos eje.

          tr
            td(data-aos="fade-down").text-center #[b C3S3]
            td(data-aos="slide-left") 
              img.img-a.img-t(src='@/assets/curso/temas/img55.svg', alt='')
            td(data-aos="fade-down") Tractocamión  de tres ejes con semirremolque de tres ejes.

    .row.justify-content-center.align-items-center.mt-5
      .col-auto
        img.img-a.img-t.my-3(data-aos="slide-right")(src='@/assets/curso/temas/img56.svg', alt='')
      .col-lg-9
        p(data-aos="fade-down").mb-0 Los vehículos con capacidad de carga de hasta 8 toneladas son catalogados como vehículos sencillos, en ellos se transportan mercancías de volúmenes variados entre paqueteo y carga, también son mercancías manipulables manualmente y para algunos casos se requieren equipos especializados de movilización y cargue de mercancías; el costo de operación es medio. 
    .row.justify-content-center.align-items-center.mt-3
      .col-10
        hr
    .row.justify-content-center.align-items-center.mt-3
      .col-auto
        img.img-a.img-t.my-3(data-aos="slide-right")(src='@/assets/curso/temas/img56.svg', alt='')
      .col-lg-9
        p(data-aos="fade-down").mb-0 Vehículos con capacidad de carga de hasta 18 toneladas o también denominados dobletroques, en estos se transportan mercancías de volumen variado de carga principalmente, en ocasiones y según la demanda se incluye paqueteo, admite volúmenes grandes siendo principalmente su objeto llevar peso.
    .row.justify-content-center.align-items-center.mt-3
      .col-10
        hr
    .row.justify-content-center.align-items-center.mt-3
      .col-auto
        img.img-a.img-t.my-3(data-aos="slide-right")(src='@/assets/curso/temas/img56.svg', alt='')
      .col-lg-9
        p(data-aos="fade-down").mb-0 Vehículos con capacidad de volumen en plancha de 12 metros o patinetas destinados al transporte de mercancías de volumen principalmente. Son vehículos amplios en su espacio de carga, tienen como limitante de peso hasta 22 toneladas, se debe tener en cuenta el diseño del vehículo.
    .row.justify-content-center.align-items-center.mt-3
      .col-10
        hr
    .row.justify-content-center.align-items-center.mt-3
      .col-auto
        img.img-a.img-t.my-3(data-aos="slide-right")(src='@/assets/curso/temas/img56.svg', alt='')
      .col-lg-9
        p(data-aos="fade-down").mb-0 Vehículos con capacidad de carga de hasta 34 toneladas, denominados tractomulas, transportan mercancías de peso generalmente, estos son los vehículos con las máximas capacidades de carga permitidas por la legislación de tránsito y transporte en Colombia. 

    .tarjeta.color-primario.p-3.mt-5(data-aos="zoom-in-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Si es de su interés ampliar la información puede ir al material complementario y consulte el video  #[b “Clasificación de los vehículos de carga pesada en Colombia”].
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=YVQvunHhets" target="_blank")
                span Ver más
                i.fas.fa-link

    .row.justify-content-center.align-items-center.mt-5
      .col-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img57.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Referente al volumen y peso o peso volumétrico es la medida que se utiliza en el sector transporte y, hay que tener en cuenta que el tamaño de los envíos expresa densidad, esto sirve para calcular el volumen y calcular el peso real del envío, el peso volumétrico es la principal variable para establecer tarifas, como se trató en el numeral 1.2 peso y volumen la fórmula para definir el peso volumétrico es: 
            br 
            br
            p.colorp-yellow.p-3 Largo x Ancho x Alto = Factor de peso volumétrico.
            br
            br

    p(data-aos="fade-down").mt-5 Las empresas de servicios postales y transporte de mercancías disponen de básculas estandarizadas que están programadas para tomar las medidas del envío y el peso, hacer el comparativo, calcular la mayor medida y definir el parámetro para establecer la tarifa.             
</template>

<script>
export default {
  name: 'Tema4',
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
