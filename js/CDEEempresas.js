var x = document.querySelectorAll('#item');
x[3].style.color = '#0f9466';
for (let i = 0; i < x.length; i++) {
    x[i].addEventListener('click', ()=>{
        for (let j = 0; j < x.length; j++) {
            x[j].style.color = '#8ea4a5'
        }
        x[i].style.color = '#0f9466';
    })
}

var empresas = [
    {
        id : "AlitasFactory",
        titulo: "Alitas Factory",
        des: "José David Maldonado, egresado del programa de Ingeniería de Sistemas en el año 2011, junto con su novia Alejandra Benitez, crearon su empresa Alitas Factory un restaurante para la Familia y los amigos que buscan un lugar agradable donde puedan compartir y sentirse como en casa, que brinda un ambiente descomplicado y unico donde todos son bienvenidos a disfrutar de platos de gran sabor a precios justos y grandes porciones, son pet friendly.",
        src: "demos/nonprofit/images/empresas/AlitasFactoryOwner.png"
    },
    {
        id : "JuanSangria",
        titulo: "Juan Sangria",
        des: "Juan David Soler, egresado del programa de Administración de Empresas y Contaduría Pública y Finanzas Internacionales en el año 2010, además egresado de la Maestría en Creación de Empresas en el año 2019. Claudia Calero, egresada del programa de Ingeniería Industrial en el año 2014. Juntos conformaron su empresa JUAN SANGRIA, dedicada a la elaboración de bebidas derivadas del vino, con frutas tropicales. <strong>Contacto: info@intradex.co.</strong>",
        src: "demos/nonprofit/images/empresas/JuanSangriaOwner.png"
    },
    {
        id: "OfiHotels",
        titulo: "Ofi Hotels",
        des: "Juan Carlos Gálvez, egresado del programa de Administración de Empresas y Contaduría Pública y Finanzas Internacionales en el año 2011. Ofi Hotels & Suites ofrece estadías diseñadas para todo tipo de personas; familias de vacaciones, joven aventurero, ejecutivo o emprendedor nómada, pareja romántica, grupo de amigos. Cuenta con espacios Only Sleep, co-working, Family Time, Aventura en la ciudad y new friends. Además, está diseñado para ayudar a planificar reuniones y eventos éxitosos. Cuenta con sedes en Cali, Buenaventura, Cartagena y Villavicencio. <strong>Contacto: info@ofihotel.net.</strong>",
        src: "demos/nonprofit/images/empresas/OfiHotelsOwner.png"
    },
    {
        id: "Giappy",
        titulo: "Giappy",
        des: "Pedro Pablo Mora, egresado del programa de Ingeniería Telemática en el año 2010. Su empresa Giappy Digital es una agencia digital que desde el 2009 acompaña a las empresas a usar internet para la generación de clientes potenciales. Ha trabajado satisfactoriamente en 10 sectores de la economía repartidos en más de 300 proyectos. <strong>Contacto: pedropablo@giappy.com.<strong>",
        src: "demos/nonprofit/images/empresas/GiappyDigitalOwner.png"
    },
    {
        id: "Etimarcas",
        titulo: "Etimarcas",
        des: "Carolina Aguirre Vargas, egresada del programa de Ingeniería Industrial en el año 2003. Su empresa ETIMARCAS especialista en la implementación de soluciones integrales de identificación de productos y captura de datos, con más de quince años en el mercado nacional y sedes en Cali y Medellín. <strong>Contacto: mercadeo@etimarcas.com</strong>",
        src: "demos/nonprofit/images/empresas/EtimarcasOwner.png"
    },
    {
        id: "Reinvent",
        titulo: "REINV3NT",
        des: "Carolina Aguirre Vargas, egresada del programa de Ingeniería Industrial en el año 2003. Su empresa REINV3NT una agencia de publicidad que ayuda a reinventar marcas desde adentro hacia afuera. Trabaja para fortalecer las marcas que mejoran la vida de la gente. <strong>Contacto: mercadeo@etimarcas.com</strong>",
        src: "demos/nonprofit/images/empresas/EtimarcasOwner.png"
    },
    {
        id: "ElRanchoDeJonas",
        titulo: "Organización</br>El Rancho de Jonas",
        des: "María Andrea, Julián y Marco Antonio Cardona, egresados del programa de Administración de Empresa en los años 1997, 1994 y 1989. Han seguido el legado de su padre, Jonás Cardona y ofrecen a través de la Organización el Racho de Jonás diferentes servicios gastronómicos y entretenimiento de crecimiento constante. Su infraestructura, personal constante, continua implementación de innovación ligada a los principios de liderazgo, calidad y servicio al cliente los han identificado entre su competencia en todo momento. <strong>Contacto: PBX: (+57 2) 513 4444.</strong>",
        src: "demos/nonprofit/images/empresas/ElRanchoDeJonasOwner.png"
    },
    {
        id: "SabaConsoulting",
        titulo: "Saba Consoulting",
        des: "Luís Fernando Salazar Arambula, egresado de la Maestría en Administración de Empresas en el año 2012 y Especialista en Finanzas en el año 1997. Su empresa Saba Consulting SAS, con más de 15 años de experiencia, se dedica a la Mentoría Financiera para personas naturales (optimización del presupuesto, manejo de endeudamiento, estrategias de inversión, blindaje, del patrimonio, creación de empresas). Cuenta con más de 15.000 personas entrenadas y clientes en Latino América, Estados Unidos y Europa. <strong>Contacto: ceo@sabaresearch.com</strong>",
        src: "demos/nonprofit/images/empresas/SabaConsoultingOwner.png"
    },
    {
        id: "Tres33",
        titulo: "TresTreintayTres",
        des: "Jairo Mauricio Muñoz Martinez, egresado del programa de Administración de Empresas en el año 2012 y de la Maestría en Administración de Empresas en el año 2017. Su empresa TresTreintayTres desarrolla proyectos en comunicación estratégica que puedan aportar al desarrollo de los 3 ejes de la sostenibilidad, ya sea social, ambiental o económico, a través de comunicación visual, experiencias de marca y consultoría estratégica. </strong>Contacto: info@3-33estudio.com.co</strong>",
        src: "demos/nonprofit/images/empresas/Tres33Owner.png"
    },
    {
        id: "Angular",
        titulo: "Angular",
        des: "Diego Barbosa T, como Diseñador de Medios Interactivos, consolidó su empresa Angular Diseño más Interacción, una empresa especializada en el desarrollo de soluciones tecnológicas escalables, de alto impacto e innovadoras. Enamorándose de los problemas, implementando metodologías de diseño y protocolos de desarrollo, logran encontrar las soluciones ideales para sus clientes. Su enfoque va desde ideas de negocio, hasta pequeñas empresas y grandes organizaciones. <strong>Contacto: diego@weareangular.com</strong>",
        src: "demos/nonprofit/images/empresas/AngularOwner.png"
    },
    {
        id: "Primart",
        titulo: "Primart",
        des: "Juliana, egresada del programa Diseño Industrial en el año 2015. CEO de Primart Studios, agencia de publicidad que ofrece productos audiovisuales con las últimas técnicas de composición digital. <strong>Mayor información: juliana@primartstudios.com</strong>",
        src: "demos/nonprofit/images/empresas/PriMartOwner.png"
    }
];

var logos = document.querySelectorAll('#logo');
var rImg = document.querySelector('#rImg');
var rTitulo = document.querySelector('#rTitulo');
var rDes = document.querySelector('#rDes');

for (let i = 0; i < logos.length; i++) {
    logos[i].addEventListener('click', ()=>{
        for (let j = 0; j < empresas.length; j++) {
            const emp = empresas[j];
            if(emp.id === logos[i].getAttribute('data-emp')){
                rImg.src = emp.src;
                rDes.innerHTML = emp.des;
                rTitulo.innerHTML = emp.titulo;
                return;
            }
        }
    })
}

var verTodos = document.querySelector('.verTodos');

var contParent = document.querySelector(".desEmpresas");
verTodos.addEventListener('click', ()=>{
    document.querySelector('#ocu').style.display = 'none';
    contParent.innerHTML = '';
    if(verTodos.innerHTML === '<u>Ver todos</u>'){
        verTodos.innerHTML = '<u>Ver uno</u>';
        for (let i = 0; i < empresas.length; i++) {
            const emp = empresas[i];
    
            var cont = document.createElement("div");
            cont.className = "desEmp";
            cont.id = i+'';
        
            var image = document.createElement("img");
            image.src = emp.src;
            cont.appendChild(image);
        
            var d = document.createElement("div");
            var h2 = document.createElement("h2");
            h2.innerHTML = emp.titulo;
            d.appendChild(h2);
            var p = document.createElement("p");
            p.innerHTML = emp.des;
            d.appendChild(p);
            cont.appendChild(d);
        
            contParent.appendChild(cont);
        }
    }else if(verTodos.innerHTML === '<u>Ver uno</u>'){
        verTodos.innerHTML = '<u>Ver todos</u>';
        document.querySelector('#ocu').style.display = 'flex';
    }
});