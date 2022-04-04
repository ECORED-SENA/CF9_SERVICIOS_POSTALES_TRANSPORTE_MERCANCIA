<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción  
  
    .row.justify-content-between.align-items-end
      .col-lg-8 
        p(data-aos="fade-down") En la actualidad las empresas de servicios postales y transporte de mercancías han  tomado gran importancia y relevancia en la dinámica comercial del país, el envío de objetos postales y transporte de mercancías han marcado un punto relevante en la comercialización y, las empresas que prestan el servicio de transporte de objetos postales y transporte de mercancías deben dar cumplimiento a la demanda en términos de oportunidad y calidad,  para ello establecen procesos de recepción de mercancías, objetos postales y disposición de la carga para el transporte. 

        p(data-aos="fade-down") Este proceso  demanda eficiencia, por tanto, deben hacer uso de los equipos y herramientas de cargue y descargue de mercancías, equipos adecuados para realizar la tarea en menos tiempo, con mayor seguridad, y se cumplen según la normativa, entre las cuales se registra la normativa del sistema de gestión de seguridad y salud en el trabajo frente a los riesgos que presentan el desarrollo de la actividad económica y las afecciones a la salud de los colaboradores.        
      .col-lg-4.imgs-flotantes.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img1.png', alt='')
        img.img-flotante(data-aos="zoom-in")(src='@/assets/curso/temas/sobre-flotante.svg', alt='Imagen decorativa') 

    p(data-aos="fade-down") Teniendo en cuenta que el proceso de logística contempla gran cantidad de subprocesos, entre los que se cuentan el cargue, descargue, manipulación y almacenaje de mercancías, esta actividad presenta otros tipos de  riesgos y puede ser que productos recibidos en custodia puedan sufrir alteraciones por malos procesos en su manipulación, almacenaje, traslados, entre otras situaciones, razón por la cual las empresas de servicios postales y transportes de mercancías deben implementar procesos de normas certificadas en calidad e implementar otras normas de beneficio a la organización y de gran impacto social como son las normas de sostenibilidad ambiental.  Para continuar el recorrido del mismo, visite el recurso didáctico que se presenta a continuación:
    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/sJEmDKjP990" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
