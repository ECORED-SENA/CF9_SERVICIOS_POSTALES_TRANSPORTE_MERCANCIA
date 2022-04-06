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
      .col-lg-3.color-yellow.p-3.my-3(data-aos="fade-left")
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img3.svg', alt='')
        p.mt-3(data-aos="fade-down") La elaboración involucra costos que son generados por distintos conceptos entre los que se cuenta materias primas, distribuciones, mano de obra, entre otros.
      .col-lg-3.color-yellow1.p-3.my-3(data-aos="flip-down")
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img4.svg', alt='')
        p.mt-3(data-aos="fade-down") El proceso de fabricación busca generar rentabilidad por la comercialización.
      .col-lg-3.color-yellow.p-3.my-3(data-aos="fade-right")
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

    .cajon.color-primario.p-4.mt-5(data-aos="flip-down")
      h5(data-aos="fade-down") En Colombia el operador postal oficial es 4-72, es la entidad jurídica habilitada por el Ministerio de Tecnologías de la Información y las Comunicaciones para ofrecer los servicios postales a través de la red postal; los operadores postales se clasifican en:
      ul.lista-ul--color.mt-4
        li(data-aos="fade-down") 
          i.fas.fa-paper-plane
          p Operador Postal Oficial (OPO), Operador designado, Concesionario de correo.
        li(data-aos="fade-down") 
          i.fas.fa-paper-plane
          p Operador de servicios postales de pago. 
        li(data-aos="fade-down") 
          i.fas.fa-paper-plane
          p.mb-0 Operador de mensajería expresa. 

    .row.justify-content-between.align-items-stretch.mt-5
      .col-lg-3.tarjeta--boton.color-primario.p-4(data-aos="fade-left")
        img.img-t.pt-4(data-aos="zoom-in")(src='@/assets/curso/temas/img8.svg', alt='')         
        p.mt-4 Ser persona jurídica nacional o extranjera, establecida legalmente en Colombia y el objeto social principal debe ser la prestación de servicios postales.                                
      .col-lg-3.tarjeta--boton.color-primario.p-4(data-aos="fade-left")
        img.img-t.pt-4(data-aos="zoom-in")(src='@/assets/curso/temas/img8.svg', alt='')         
        p.mt-4 Demostrar un capital mínimo de 1000 salarios smlv. 
      .col-lg-3.tarjeta--boton.color-primario.p-4(data-aos="fade-right")
        img.img-t.pt-4(data-aos="zoom-in")(src='@/assets/curso/temas/img8.svg', alt='')         
        p.mt-4 Precisar las características del servicio a prestar en el espacio geográfico donde desarrollará la actividad económica.  
      .col-lg-3.tarjeta--boton.color-primario.p-4(data-aos="fade-right")
        img.img-t.pt-4(data-aos="zoom-in")(src='@/assets/curso/temas/img8.svg', alt='')         
        p.mt-4 Cancelar el valor de la habilitación, esto previo a la expedición de la habilitación. 

    p(data-aos="fade-down").mt-5 La habilitación tiene una vigencia de 10 años, sin prórrogas automáticas, transcurrido este tiempo se debe solicitar nuevamente la acreditación tres meses antes del vencimiento y realizar nuevamente el respectivo pago por la acreditación. 

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Clasificación de la carga y simbología
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img9.png', alt='')
      .col-lg-8
        p(data-aos="fade-down") La carga es el conjunto de mercancías o bienes, estas van protegidas por un embalaje apropiado, que garantiza la protección y la adecuada manipulación y movilización, para gestionar la carga se debe tener en cuenta los tipos de carga que se va a movilizar, existen varios tipos de carga, estos son:
        ul.lista-ul--color.mt-4
          li(data-aos="fade-down") 
            i.fas.fa-paper-plane
            p.mb-0 Carga general.
          li(data-aos="fade-down") 
            i.fas.fa-paper-plane
            p.mb-0 Carga a granel.
          li(data-aos="fade-down") 
            i.fas.fa-paper-plane
            p.mb-0 Carga especial.
          li(data-aos="fade-down") 
            i.fas.fa-paper-plane
            p.mb-0 Carga contenedorizada.  

    p(data-aos="fade-down").mt-5 A continuación, se detalla cada uno de los tipos de cargas:          

    TabsB.color-acento-contenido.mt-5(data-aos="fade-right")
      .py-4.py-md-5(titulo="Carga general" :icono="require('@/assets/curso/temas/img10.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-8
            h5 Carga general
            p Es todo tipo de carga que se transporta en conjunto, puede ser en cantidades pequeñas, o en unidades independientes, en este tipo de carga se puede contar fácilmente y se manipulan como unidades.  La carga general tiene unas subdivisiones como: carga con embalaje, carga suelta, carga peeslingada, carga paletizada, carga unitarizada.
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img13.png', alt='')


      .py-4.py-md-5(titulo="Carga a granel" :icono="require('@/assets/curso/temas/img11.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-8
            h5 Carga a granel
            p Es el tipo de carga que se transporta en abundancia y sin embalaje, la carga a granel puede ser gaseosa como el gas propano, líquida como la gasolina, el diésel, el petróleo o sólida como abonos, fertilizantes y granos comestibles.
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img14.png', alt='')
        
      .py-4.py-md-5(titulo="Carga especial" :icono="require('@/assets/curso/temas/img12.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-8
            h5 Carga especial
            p Es un tipo de carga diferente, requiere de una manipulación cuidadosa, esto por las condiciones como peligrosidad, peso, grado de conservación, alto valor, esta carga demanda un trato especial, son consideradas cargas especiales, la carga pesada como maquinaria, carga refrigerada como productos alimenticios o medicinas y carga peligrosa como las sustancias ácidas o químicas. 
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img15.png', alt='')

    p(data-aos="fade-down").mt-5 La simbología de la carga son los gráficos que orientan y transmiten las especificaciones de seguridad para el manejo de las mercancías. 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-6
        img.img-a.img-t(data-aos="fade-left")(src='@/assets/curso/temas/img16.svg', alt='')

      .col-lg-6
        img.img-a.img-t(data-aos="fade-right")(src='@/assets/curso/temas/img17.svg', alt='')

    p(data-aos="fade-down").mt-5 Es estandarizada a nivel internacional y son una serie de imágenes o pictogramas que se usan para que las empresas de servicios postales, transporte de mercancías y las empresas de servicios logísticas y transportistas conozcan cómo proceder en el manejo de las mismas; dentro de la simbología se encuentran unas instrucciones básicas y otras específicas. 

    p(data-aos="fade-down").mt-5 El siguiente video ilustra de forma gráfica la simbología de las cargas. 

    .tarjeta.color-primario.p-3.mt-5(data-aos="zoom-in-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Si es de su interés ampliar la información puede ir al material complementario y consultar el  video #[b “Etiquetas de la carga”]
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=vsI79mXP3vc" target="_blank")
                span Ver más
                i.fas.fa-link

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Peso y volumen 
    p(data-aos="fade-down") Son medidas que se utilizan en la planificación y optimización de rutas de transporte, en la actualidad las empresas de servicios postales y transporte de mercancías hacen uso de diferentes herramientas de software para realizar dicha planeación y optimización del transporte, esto les permite mejorar tiempos de viaje, costos y se generan entregas más eficientes.

    p(data-aos="fade-down") Las cargas tienen una clasificación según el peso así: 

    .row.justify-content-between.align-items-stretch.mt-5
      .col-lg-4.card-yellow.p-4(data-aos="fade-left")
        img.img-t.pt-4(data-aos="zoom-in")(src='@/assets/curso/temas/img18.svg', alt='')
        h5.mt-4 Carga media         
        p Son las que oscilan entre cinco y veinticinco kilogramos.                              
      .col-lg-4.card-purple.p-4(data-aos="fade-down")
        img.img-t.pt-4(data-aos="zoom-in")(src='@/assets/curso/temas/img18.svg', alt='')
        h5.mt-4 Carga ligera
        p Son las que tienen un peso hasta de cinco kilogramos.
      .col-lg-4.card-yellow.p-4(data-aos="fade-right")
        img.img-t.pt-4(data-aos="zoom-in")(src='@/assets/curso/temas/img18.svg', alt='')
        h5.mt-4 Cargas pesadas  
        p Son las que pesan más de 25 kilogramos y hasta una tonelada. 

    .row.justify-content-between.align-items-center.mt-5
      .col-lg-8 
        p(data-aos="fade-down") #[b En un envío el peso volumétrico es una medida en la que se tiene en cuenta el tamaño de los bultos, esta medida evidencia la densidad de las mercancías y se usa para hacer comparativos entre el volumen y el peso real del envío.]

        p(data-aos="fade-down") En el sector de los servicios postales y transporte de mercancías el peso volumétrico es importante para establecer la tarifa del servicio, el costo del envío se determina por el peso o por la dimensión, al momento del cálculo se toma como parámetro el resultado más alto entre el volumen y el peso, el peso volumétrico se calcula de la siguiente manera:     
               
      .col-lg-4.imgs-flotantes.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img7.png', alt='')
        img.img-flotante(data-aos="zoom-in")(src='@/assets/curso/temas/sobre-flotante.svg', alt='Imagen decorativa')  

    .cajon.color-primario.p-4.mt-5(data-aos="flip-down")
      h5(data-aos="fade-down") Peso volumétrico= largo x ancho x alto/5.000= peso volumétrico

      p(data-aos="fade-down") #[b Ejemplo:] se debe calcular el envío de una mercancía que tenga las siguientes dimensiones largo 50, ancho 20, alto 25 m., ¿cuál es el peso volumétrico?
      .row.justify-content-start.align-items-center
        .col-lg-5
          p(data-aos="fade-down").bg-red.p-3 Peso volumétrico= 50x20x25/5000=25000/5000=5 

      p(data-aos="fade-down").mb-0 El peso volumétrico del envío es de 5 kilogramos. Es importante tener en cuenta que el valor de 5000, por el cual se divide es un factor de conversión internacional, es decir, que es fijo.

    .tarjeta.color-primario.p-3.mt-5(data-aos="zoom-in-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Si es de su interés ampliar la información puede ir al material complementario  y consultar el video #[b “Cálculo de peso volumétrico para paquetes”.]
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=K7lefxdO_io" target="_blank")
                span Ver más
                i.fas.fa-link

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Zonas de cargue y descargue                 
    p(data-aos="fade-down") Las empresas de servicios postales y transportes de mercancías tienen habilitadas zonas que se denominan de cargue y descargue, allí se cargan y se descargan las mercancías, se manipulan y se disponen para cargar a los vehículos para el transporte y direccionamiento que se deba dar o para trasladar a otra zona de mercancías, de estibas o almacenamiento. Esta zona debe estar habilitada con las normas de seguridad pertinentes para dar seguridad, protección y manipulación adecuada a las mercancías y elementos postales.

    .row.justify-content-start.align-items-center.mt-5
      .col-lg-4.imgs-flotantes.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img20.png', alt='')
        img.img-flotante(data-aos="zoom-in")(src='@/assets/curso/temas/sobre-flotante2.svg', alt='Imagen decorativa') 
      .col-lg-7
        .color-fondo-text1.bg-color(data-aos="fade-down")
          .color-fondo-text1__texto        
            p Al momento de llegar los vehículos a la zona de descarga se disponen los equipos necesarios para realizar el proceso de descarga, los equipos se deben ajustar al vehículo que se va a descargar, una vez descargada la mercancía o los elementos postales se disponen en la zona para el proceso de recepción, en esta zona se debe analizar y revisar el estado de los envíos y las mercancías, desde allí se traslada a la zona asignada para continuar con el proceso de entrega hasta llegar al cliente o destinatario.

    .tarjeta.color-primario.p-3.mt-5(data-aos="zoom-in-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Si es de su interés ampliar la información puede ir al material complementario y consultar el video #[b “Cargue y descargue de mercancías”]
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=8gXpOwyg7AU" target="_blank")
                span Ver más
                i.fas.fa-link

    .row.mt-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjeta.tarjeta-slide.derecha.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img21_1.svg', alt='')
              p.mt-4 Equipos de transporte de carga y elevación de carga, carros de arrastre, canecas, tambores y bidones, equipos manipuladores de tambores, equipo manipulador de cajas, de láminas y paneles.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img21.jpg')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-down")
        .tarjeta.tarjeta-slide.derecha.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img22_1.svg', alt='')
              p.mt-4 Plataformas elevadoras, cintas transportadoras, carretillas, maderas de estibas, cintas transportadoras.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img22.jpg')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-left")
        .tarjeta.tarjeta-slide.derecha.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img23_1.svg', alt='')
              p.mt-4 Estibadores manuales, mecánicos, eléctricos y montacargas. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img23.jpg')})`}")

    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4 Documentación según características de la mercancía  

    .row.justify-content-between.align-items-center.mt-5
      .col-lg-8 
        p(data-aos="fade-down") Los documentos de transporte son la certificación de la prestación del servicio o certificación del contrato, ya sea prestado por vía terrestre, aérea, marítima, fluvial o cualquiera de las posibles combinaciones de los medios de transporte para cumplir la entrega, también es el soporte de recibo y entrega de las mercancías al destinatario; cuando el documento de transporte es emitido por el transportador, este se denomina documento de transporte directo, el documento emitido  por un agente de carga internacional y que sea carga consolidada se denomina master, cuando el documento es emitido por una empresa de servicios postales y transporte de mercancías se denomina contrato de transporte, y acredita que el transportador recibió la mercancía en custodia.

        p(data-aos="fade-down") a documentación necesaria para el ingreso y egreso de las mercancías a la zona de cargue y descargue respectivamente, como mínimo debe ser la siguiente:
      .col-lg-4.imgs-flotantes.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img24.png', alt='')
        img.img-flotante(data-aos="zoom-in")(src='@/assets/curso/temas/sobre-flotante.svg', alt='Imagen decorativa')  

    .row.justify-content-center.align-items-stretch.mt-5
      .col-lg-6.color1.p-5(data-aos="fade-left")
        img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img25.svg', alt='')
        h5.mt-4 Zonas de cargue
          ol.lista-ol.mt-4
            li 
              span.text-bold a. 
              p.mb-0 Remisión de origen (orden de ingreso).
            li 
              span.text-bold b. 
              p.mb-0 Identificación de las características de la mercancía: peso, volumen y naturaleza.
            li 
              span.text-bold c. 
              p.mb-0 Registro de Ingreso identificando además posición en zona de cargue. 
            li 
              span.text-bold d. 
              p.mb-0 Inspección y calificación del estado de las mercancías.
            li 
              span.text-bold e. 
              p.mb-0 Registro de novedades en caso de presentarse.
      .col-lg-6.color2.p-5(data-aos="fade-right")
        img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img26.svg', alt='')
        h5.mt-4 Zonas de descargue
          ol.lista-ol.mt-4
            li 
              span.text-bold a. 
              p.mb-0 Remisión para destino (orden de salida).
            li 
              span.text-bold b. 
              p.mb-0 Identificación de las características de la mercancía: peso, volumen y naturaleza.
            li 
              span.text-bold c. 
              p.mb-0 Registro de salida, identificando además posición en zona de descargue.
            li 
              span.text-bold d. 
              p.mb-0 Inspección y calificación del estado de las mercancías.
            li 
              span.text-bold e. 
              p.mb-0 Registro de novedades en caso de presentarse.

    p(data-aos="fade-down").mt-5 La empresa que presta el servicio debe disponer de las herramientas ofimáticas para realizar el proceso de digitalización de la información, ya que en los diferentes estadios los documentos deben estar digitales o digitalizados.

    p(data-aos="fade-down") En Colombia es normal que se instalen puestos de control por las carreteras, estos puestos de control instalados por las autoridades viales y cuando se trata de transporte de carga pueden exigir la documentación necesaria para transportar la carga que se traslade, es por ello que los conductores deben presentar documentos como:

    .tarjeta.tarjeta--azul.px-4.py-5.mt-5.bg-blue(data-aos="fade-right")
      SlyderA
        .row.justify-content-center.align-items-center
          .col-lg-6
            h5 Tarjeta de registro nacional de transporte de carga
            p La cual es emitida por el Ministerio de Transporte y es la certificación con la que el conductor del vehículo presta dicho servicio, esta expira cuando el vehículo cambia de dueño y contiene la siguiente información: 
            ol.lista-ol
              li 
                span.text-bold a. 
                p.mb-0 Nombre de la empresa que presta el servicio.
              li 
                span.text-bold b. 
                p.mb-0 Identificación de remitentes, propietarios y destinatarios de las mercancías.
              li 
                span.text-bold c. 
                p.mb-0 Identificación del conductor, propietario del vehículo y los datos del vehículo.
              li 
                span.text-bold d. 
                p.mb-0 Descripción de las mercancías, se debe incluir el peso y volumen de la misma.
              li 
                span.text-bold e. 
                p.mb-0 Lugar de origen y lugar de destino con direcciones.
              li 
                span.text-bold f. 
                p.mb-0 Valores de los fletes. 
              li 
                span.text-bold g. 
                p.mb-0 Descripción de los seguros.          
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img27.png', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-6
            h5 Remesa terrestre de carga
            p Documento en el cual el cliente deja certificación del recibo de la mercancía: en este se pueden dejar observaciones del estado en que se recibió la mercancía, ya sea que se reporten daños o faltantes, se debe tener especial cuidado ya que debe tener las firmas respectivas.
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img28.png', alt='')

    .tarjeta.color-primario.p-3.mt-5(data-aos="zoom-in-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Si es de su interés ampliar la información puede ir al material complementario y consultar el video #[b “Mercancías peligrosas”.]
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=3YgFdAOl4jM" target="_blank")
                span Ver más
                i.fas.fa-link

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
