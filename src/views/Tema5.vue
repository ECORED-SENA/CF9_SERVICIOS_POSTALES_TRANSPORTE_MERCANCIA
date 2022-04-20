<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Normativa de seguridad y salud en el trabajo

    .row.justify-content-between.align-items-center
      .col-lg-8 
        .color-fondo-text2.bg-color(data-aos="fade-down")
          .color-fondo-text2__texto 
            p La seguridad y salud en el trabajo es una disciplina que está orientada a la implementación de acciones de prevención de enfermedades y lesiones ocasionadas por las actividades laborales o las condiciones de trabajo, tiene como objetivo principal la protección, prevención de accidentes y enfermedades laborales, la normativa de seguridad y salud en el trabajo es muy amplia, debe ser de obligatorio cumplimiento para todas las organizaciones y para todos y cada uno de los colaboradores, en compromiso con su bienestar.      
               
      .col-lg-4.imgs-flotantes.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img58.png', alt='')
        img.img-flotante(data-aos="zoom-in")(src='@/assets/curso/temas/sobre-flotante.svg', alt='Imagen decorativa')  

    .row.justify-content-center.align-items-center.mt-5
      .col-10
        .cajon.color-acento-contenido.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 La Resolución 312 del 13 de febrero de 2019 define los estándares mínimos del Sistema de Gestión de  Seguridad y la Salud en el trabajo para las personas naturales y jurídicas, empleadores públicos y privados, contratantes de personal  bajo modalidad de contrato civil, comercial o administrativo,  a trabajadores dependientes e independientes, a organizaciones de economía solidaria, empresas de servicios temporales, estudiantes afiliados al Sistema de Seguridad  Social Integral,  a empresas temporales y demás organizaciones que tengan vinculados personal para el desarrollo de la actividad económica. Esta resolución define los estándares mínimos tanto para las empresas con 10 o menos trabajadores, así como para las empresas de más de 10 trabajadores (MinTrabajo, 2019). 

    p(data-aos="fade-down").mt-5 En el sector de servicios postales y transporte de mercancías (logística) se viene fortaleciendo cada día más uno de los factores que han favorecido el crecimiento, este ha sido las ventas <i>online</i>, generando el incremento de personal para dar cumplimiento a la actividad laboral y, por consiguiente, las organizaciones deben prestar mayor atención a los procesos de seguridad y salud en trabajo. 

    .tarjeta.color-primario.p-3.mt-5(data-aos="zoom-in-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Si es de su interés ampliar la información puede ir al material complementario y consultar el video #[b “Sistemas de gestión de la seguridad y salud en el trabajo”.]
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=5CF3HZdu6Bc" target="_blank")
                span Ver más
                i.fas.fa-link     

    h4(data-aos="slide-right").mt-5 Riesgos 
    p(data-aos="fade-down") El sector servicios postales y transporte de mercancías realizan actividades que presentan alto riesgo de lesiones, incidentes, accidentes y de no prestar atención a los riesgos, incluso, se pueden presentar enfermedades de origen profesional, actividades de manipulación, almacenaje, aprovisionamiento, transporte y distribución de las mercancías o de los productos; son actividades que pueden afectar la salud y el bienestar de los colaboradores.

    p(data-aos="fade-down") Dentro de los riesgos a los que están expuestos los trabajadores de las empresas de servicios postales y transporte de mercancías se encuentran los siguientes: 

    ImagenInfografica.color-secundario.mt-5.p-4
      template(v-slot:imagen)
        figure
          img.img-a.img-t(src='@/assets/curso/temas/img59.png', alt='')

      .tarjeta.color-acento-botones.p-3(x="50%" y="0%" numero="")
        .h5.mb-2 Riesgos Mecánicos
        p Está asociado a la operación de la banda transportadora, se pueden presentar golpes, fracturas, atrapamiento, generado por el mal uso del equipo o la falta de cuidado en el desarrollo de función.  

      .tarjeta.color-acento-botones.p-3(x="79%" y="30%" numero="")
        .h5.mb-2 Riesgos Ergonómicos
        p Son los dolores osteomusculares causados por la realización de movimientos repetitivos, se presentan al desarrollar actividades como: empacar, sellar, etiquetar, registro, también en el levantamiento de carga de forma manual y en el transporte de carga en vehículos.          

      .tarjeta.color-acento-botones.p-3(x="78.5%" y="61%" numero="")
        .h5.mb-2 Riesgos físicos
        p Generados por vibraciones de asientos mal ajustados o de superficies irregulares. Exposición a ruidos fuertes, fatiga por conducción prolongada y vibraciones del vehículo por mal estado de la carretera.      

      .tarjeta.color-acento-botones.p-3(x="50.3%" y="100%" numero="")
        .h5.mb-2 Riesgos Sociales
        p Los colabores están expuestos a vandalismo, actos terroristas y saqueo de mercancías.         

      .tarjeta.color-acento-botones.p-3(x="18%" y="30%" numero="")
        .h5.mb-2 Riesgos Locativos
        p Como son el almacenamiento inadecuado, poca señalización, rampas y escaleras defectuosas, andamios inseguros, carga mal distribuida o almacenada de forma insegura.      

      .tarjeta.color-acento-botones.p-3(x="18%" y="59.2%" numero="")
        .h5.mb-2 Riesgos Psicosociales
        p Son  aspectos relacionados con la organización en un ambiente de trabajo, su diseño y entorno social está involucrado en causar daños psíquicos, sociales o físicos en la salud de los trabajadores generado por el estrés de la carga laboral.   

    h4(data-aos="slide-right").mt-5 Elementos de protección 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img60.png', alt='')
      .col-lg-8 
        p(data-aos="fade-down") Los elementos de protección son los equipos diseñados y fabricados especialmente para proteger, están destinados para el uso de los trabajadores y les permite protección de los riesgos a los que están expuestos y que amenazan su seguridad o su salud en el trabajo. Los elementos de protección personal que se usan en las empresas de servicios postales y transportes de mercancías son:
        .cajon.color-primario.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0  Overoles, cascos con barboquejo, tapones de oídos, gafas, caretas, tapabocas, monogafas, delantales, braceras, guantes de nitrilo o de carnaza y bota plástica o bota con puntera metálica. 

    p(data-aos="fade-down").mt-5 Toda la empresa debe establecer el control y verificación del uso adecuado de los EPP (elementos de protección personal),  por parte de los colaboradores, así mismo, realizar jornadas de capacitación sobre el sistema de seguridad y salud en el trabajo, y el uso adecuado de los EPP (elementos de protección personal), a dichos EPP se les debe realizar revisión periódicamente para garantizar que los equipos que usan los colaboradores están en buenas condiciones y cumplen con la función para la cual está diseñado.

    p(data-aos="fade-down") Otros aspectos a contemplar en el sistema de seguridad y salud en el trabajo en las empresas de servicios postales y transporte de mercancías son:          

    .row.justify-content-between.align-items-center.mt-5
      .col-lg-8 
        ol.lista-ol--cuadro.lista-ol--separador
          li(data-aos="fade-down") 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 Disponer de extintores debidamente señalizados y que se tenga fácil acceso a ellos.
          li(data-aos="fade-down") 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 Establecer salida de emergencia, las cuales deben estar libres de obstáculos y señalizadas.
          li(data-aos="fade-down") 
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 Tener buena iluminación y ventilación.
          li(data-aos="fade-down") 
            .lista-ol--cuadro__vineta
              span 4
            p.mb-0 Establecer recorridos en una sola dirección para evitar colisiones.
          li(data-aos="fade-down") 
            .lista-ol--cuadro__vineta
              span 5
            p.mb-0 Revisar permanentemente la maquinaria. 
          li(data-aos="fade-down") 
            .lista-ol--cuadro__vineta
              span 6
            p.mb-0 Controlar la velocidad al manejar equipos de transporte de carga
          li(data-aos="fade-down") 
            .lista-ol--cuadro__vineta
              span 7
            p.mb-0 Generar espacios de amplia visibilidad. 
               
      .col-lg-4.imgs-flotantes.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img61.png', alt='')
        img.img-flotante(data-aos="zoom-in")(src='@/assets/curso/temas/sobre-flotante.svg', alt='Imagen decorativa')  

    .tarjeta.color-primario.p-3.mt-5(data-aos="zoom-in-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Si es de su interés ampliar la información puede ir al material complementario y consultar el video #[b “Elementos de Protección Personal – EPP”]
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=_de3QF5wEzI" target="_blank")
                span Ver más
                i.fas.fa-link

    h4(data-aos="slide-right").mt-5 Elementos contaminantes
    p(data-aos="fade-down") Las operaciones logísticas tienen un alto grado de incidencia en la generación de elementos contaminantes, en primera instancia se tiene la emisión de gases contaminantes, es decir, el CO2 o dióxido de carbono, el sector del transporte aporta un alto porcentaje del gas contaminante, esto ha generado una alerta y por consiguiente, nace la tendencia en el sector de las empresas de servicios postales y transporte de mercancías, tal como se puede consultar en el siguiente recurso: 
    TabsA.color-primario.mt-5(data-aos="fade-left") 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Gases contaminantes CO2")
        .row.justify-content-center.align-items-center  
          .col-lg-10
            h5 Gases contaminantes CO2
            p La emisión de gases contaminantes,  es decir, el CO2 o dióxido de carbono, esta tendencia es denominada logística verde y tiene por objeto reducir el impacto de la actividad económica de dichas empresas con el medio ambiente.

      .tarjeta.color-acento-botones--borde.p-4(titulo="Plástico y papel")
        .row.justify-content-center.align-items-center  
          .col-lg-10
            h5 Plástico y papel 
            p La emisión de gases contaminantes,  es decir, el CO2 o dióxido de carbono, esta tendencia es denominada logística verde y tiene por objeto reducir el impacto de la actividad económica de dichas empresas con el medio ambiente.

      .tarjeta.color-acento-botones--borde.p-4(titulo="Vehículos eléctricos")
        .row.justify-content-center.align-items-center  
          .col-lg-10
            h5 Vehículos eléctricos         
            p La logística verde genera beneficios como ahorro de recursos, al automatizar procesos, la utilización de vehículos eléctricos genera el no pago de peajes y no consumo de combustible fósil que genera el CO2, impactos positivos en la imagen social corporativa de la organización.    
</template>

<script>
export default {
  name: 'Tema5',
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
