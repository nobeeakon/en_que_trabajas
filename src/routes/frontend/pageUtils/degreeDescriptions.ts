import type { DegreeLevel } from '../../../db/types';

type DescriptionType = {
    text: string[];
    sourceUrl?: string;
};

export const getDegreeDescription = ({
    degreeLevel,
    normalizedDegreeName,
}: {
    degreeLevel: DegreeLevel;
    normalizedDegreeName: string;
}): DescriptionType | undefined => {
    const description =
        descriptionsByNormalizedName[degreeLevel]?.[normalizedDegreeName];
    return !description ? undefined : description;
};

const descriptionsByNormalizedName: Record<
    DegreeLevel,
    Record<string, DescriptionType>
> = {
    lic: {
        actuaria: {
            text: [
                'Los actuarios son profesionistas que estudian, plantean, formulan y aplican modelos de contenido matemático con el fin de proveer información para la planeación, previsión y toma de decisiones, y para resolver problemas económicos y sociales que involucran riesgos. Intervienen en prácticamente todos los campos del quehacer humano interactuando con los profesionales que ahí se desempeñen.',
                'Llevan a cabo una labor sumamente diversa y relacionada principalmente con: seguros y planes de beneficio, demografía, finanzas, computación, administración, estadística, investigación de operaciones, economía, docencia e investigación.',
            ],
            sourceUrl: 'https://oferta.unam.mx/actuaria.html',
        },
        administracion: {
            text: ["En Administración se forman profesionistas con visión estratégica, ética y de compromiso social expertos en promover el logro eficiente de objetivos de organizaciones públicas, privadas y sociales en sus diferentes niveles jerárquicos, a través del análisis y la comprensión de sus funciones sustantivas desde una perspectiva integral."],
            sourceUrl: 'https://oferta.unam.mx/administracion.html',
        },
        administracionagropecuaria: {
            text: [],
            sourceUrl: '',
        },
        administraciondearchivosygestiondocumental: {
            text: [],
            sourceUrl: '',
        },
        antropologia: {
            text: [],
            sourceUrl: '',
        },
        arquitectura: {
            text: [],
            sourceUrl: '',
        },
        arquitecturadepaisaje: {
            text: [],
            sourceUrl: '',
        },
        arteydiseno: {
            text: [],
            sourceUrl: '',
        },
        artesvisuales: {
            text: ["En esta carrera se forman los profesionales comprometidos, con una visión humanística-social de las artes visuales, que adquieren una formación teórico-conceptual y la incorporan para llevar a cabo un profundo ejercicio de búsqueda de los distintos procesos y recursos involucrados en la disciplina, para aplicarlos directamente en su obra personal y en proyectos colectivos que transformen y beneficien la vida pública de su entorno y de la sociedad."],
            sourceUrl: 'https://oferta.unam.mx/artes-visuales.html',
        },
        bibliotecologiayestudiosdelainformacion: {
            text: [],
            sourceUrl: '',
        },
        biologia: {
            text: [
                'La carrera de Biología estudia los seres vivos de manera integral, desde el nivel molecular hasta como integrante de los ecosistemas, a fin de conocer su estructura, función, diversidad, origen, evolución, e interrelaciones.',
                'Su marco conceptual se basa en la teoría de la evolución y los conocimientos fundamentales del origen, la evolución y las funciones de los seres vivos.',
                'Asimismo se enfoca al estudio de los procesos hereditarios, la diversidad de los seres vivos, el desarrollo de los organismos, y las relaciones entre éstos y su medio.',
            ],
            sourceUrl: 'https://oferta.unam.mx/biologia.html',
        },
        bioquimicadiagnostica: {
            text: [],
            sourceUrl: '',
        },
        canto: {
            text: [],
            sourceUrl: '',
        },
        cienciadelanutricionhumana: {
            text: [
                'Esta carrera tiene como objetivo formar licenciados en Ciencia de la Nutrición Humana competentes, capaces de integrar y aplicar el conocimiento científico, clínico y social, con base en los diagnósticos clínico-nutricional y nutricional-comunitario respectivamente, mediante la evaluación del estado de nutrición, vigilancia alimentaria-nutricional, orientación y educación alimentaria, así como la investigación, desde un enfoque interdisciplinario, a fin de atender los problemas de salud relacionados con la alimentación en los niveles individual y colectivo, con valores y principios éticos, que les permitan ser agentes de cambio y contribuir al mejoramiento de la salud local, nacional e internacional.',
            ],
            sourceUrl: 'https://oferta.unam.mx/ciencia-nutricion-humana.html',
        },
        cienciadematerialessustentables: {
            text: [],
            sourceUrl: '',
        },
        cienciaforense: {
            text: [],
            sourceUrl: '',
        },
        cienciasagroforestales: {
            text: [],
            sourceUrl: '',
        },
        cienciasagrogenomicas: {
            text: [],
            sourceUrl: '',
        },
        cienciasambientales: {
            text: [],
            sourceUrl: '',
        },
        cienciasdedatos: {
            text: [],
            sourceUrl: '',
        },
        cienciasdelacomputacion: {
            text: ["sta carrera forma al profesional con conocimientos teóricos sólidos en la disciplina y con habilidades de programación; capaz de desarrollar soluciones computacionales de frontera.", ],
            sourceUrl: 'https://oferta.unam.mx/ciencias-de-la-computacion.html',
        },
        cienciasdelacomunicacion: {
            text: ["Con un enfoque creativo, responsable y crítico, en Ciencias de la Comunicación se analiza y difunde la problemática social mediante mensajes y contenidos informativos, escritos y audiovisuales y se estudian los orígenes, la estructura, el desarrollo y los cambios en los procesos de la comunicación humana, tanto interpersonales como grupales, organizacionales, colectivos o masivos."],
            sourceUrl: 'https://oferta.unam.mx/ciencias-de-la-comunicacion.html',
        },
        cienciasdelatierra: {
            text: [],
            sourceUrl: '',
        },
        cienciasgenomicas: {
            text: [],
            sourceUrl: '',
        },
        cienciaspoliticasyadministracionpublica: {
            text: [],
            sourceUrl: '',
        },
        cirujanodentista: {
            text: [ "La licenciatura de Cirujano Dentista forma profesionistas capaces de resolver las necesidades de salud bucodental de la población, mediante un criterio clínico integral."],
            sourceUrl: 'https://oferta.unam.mx/cirujano-dentista.html',
        },
        composicion: {
            text: [],
            sourceUrl: '',
        },
        comunicacion: {
            text: [],
            sourceUrl: '',
        },
        comunicacionyperiodismo: {
            text: [],
            sourceUrl: '',
        },
        contaduria: {
            text: ["El licenciado en Contaduría satisface las necesidades de las organizaciones y los individuos relacionadas con la toma de decisiones sobre su patrimonio, expresado en valores financieros, en la que se determinan medidas sobre el dinero en sus distintas formas de expresión, a fin de incrementar el patrimonio, pagar contribuciones, y llevar un registro de dichas operaciones financieras. Posee además una perspectiva del contexto de las organizaciones con fines económicos o sociales."],
            sourceUrl: 'https://oferta.unam.mx/contaduria.html',
        },
        derecho: {
            text: [],
            sourceUrl: '',
        },
        desarrollocomunitarioparaelenvejecimiento: {
            text: [],
            sourceUrl: '',
        },
        desarrolloterritorial: {
            text: [],
            sourceUrl: '',
        },
        desarrolloygestioninterculturales: {
            text: [],
            sourceUrl: '',
        },
        disenografico: {
            text: [],
            sourceUrl: '',
        },
        disenoindustrial: {
            text: [],
            sourceUrl: '',
        },
        disenoycomunicacionvisual: {
            text: [],
            sourceUrl: '',
        },
        ecologia: {
            text: [],
            sourceUrl: '',
        },
        economia: {
            text: [],
            sourceUrl: '',
        },
        economiaindustrial: {
            text: [],
            sourceUrl: '',
        },
        educacionmusical: {
            text: [],
            sourceUrl: '',
        },
        enfermeria: {
            text: [],
            sourceUrl: '',
        },
        enfermeriayobstetricia: {
            text: [],
            sourceUrl: '',
        },
        ensenanzadealemanespanolfrancesinglesoitalianocomolenguaextranjera: {
            text: [],
            sourceUrl: '',
        },
        ensenanzadeingles: {
            text: [],
            sourceUrl: '',
        },
        estudioslatinoamericanos: {
            text: [],
            sourceUrl: '',
        },
        estudiossocialesygestionlocal: {
            text: [],
            sourceUrl: '',
        },
        etnomusicologia: {
            text: [],
            sourceUrl: '',
        },
        farmacia: {
            text: [],
            sourceUrl: '',
        },
        filosofia: {
            text: [],
            sourceUrl: '',
        },
        fisica: {
            text: [],
            sourceUrl: '',
        },
        fisicabiomedica: {
            text: [],
            sourceUrl: '',
        },
        fisioterapia: {
            text: ["El profesional de la fisioterapia actúa en todos los niveles de atención a la salud, respeta los principios éticos, morales y culturales del individuo y de la comunidad con el objetivo de preservar, desarrollar y restaurar la integridad del movimiento corporal y adaptar al paciente su condición física y al entorno."],
            sourceUrl: 'https://oferta.unam.mx/fisioterapia.html',
        },
        geociencias: {
            text: [],
            sourceUrl: '',
        },
        geografia: {
            text: [],
            sourceUrl: '',
        },
        geografiaaplicada: {
            text: [],
            sourceUrl: '',
        },
        geohistoria: {
            text: [],
            sourceUrl: '',
        },
        historia: {
            text: [],
            sourceUrl: '',
        },
        historiadelarte: {
            text: [],
            sourceUrl: '',
        },
        informatica: {
            text: [
                'La licenciatura en Informática forma expertos que aplican y desarrollan tecnologías de información apropiadas para la administración eficiente de las organizaciones, integrando las Tecnologías de Información y Comunicación en sus procesos operativos, valorando nuevos modelos de negocio basados en la innovación tecnológica, con un compromiso social y una visión global.',
                'Asimismo es el profesionista responsable de la creación de las estrategias para la implementación y la administración de Tecnologías de Información en la empresa, así como del mantenimiento de servicios tecnológicos y sistemas de tratamiento de la información de manera integral y eficiente.',
            ],
            sourceUrl: 'https://oferta.unam.mx/informatica.html',
        },
        ingenieriaaeroespacial: {
            text: [
                'El ingeniero aeroespacial es el profesional que integra los conocimientos de la física y las matemáticas con las ciencias de ingeniería en las áreas aeronáutica y espacial, a fin de dar solución a los problemas que le plantea el ejercicio profesional para el diseño, desarrollo, construcción, prueba y operación de vehículos que operan en la atmósfera terrestre o en el espacio exterior. En el sector aeronáutico, puede desempeñar actividades relacionadas con el diseño y manufactura de aeronaves, aviónica, pruebas de certificación, sistemas de navegación, uso de materiales y naves no tripuladas. En el sector espacial su campo de acción abarca el diseño de misiones espaciales, pruebas de certificación, desarrollo de subsistemas satelitales, sistemas de lanzamiento y comunicaciones espaciales.',
            ],
            sourceUrl: 'https://oferta.unam.mx/ingenieria-aeroespacial.html',
        },
        ingenieriaagricola: {
            text: [
                'Ingeniería Agrícola es una profesión con un alto nivel académico y práctico encaminado a solucionar problemas en la producción, manejo y comercialización de cultivos agrícolas, cuya orientación integral en las ciencias básicas, agrícolas, socioeconómicas y en la investigación permite a sus egresados desempeñarse con iniciativa y actitud de servicio.',
            ],
            sourceUrl: 'https://oferta.unam.mx/ingenieria-agricola.html',
        },
        ingenieriaambiental: {
            text: [
                'El ingeniero ambiental participa en la planeación, diseño, ejecución de programas y de instalaciones para el control de la contaminación del agua, el aire y el suelo; así como en el manejo y tratamiento de residuos de todo tipo. Asimismo opera y administra obras de protección al ambiente, buscando el uso óptimo de los recursos naturales y energéticos, y la seguridad de operadores y pobladores.',
            ],
            sourceUrl: 'https://oferta.unam.mx/ingenieria-ambiental.html',
        },
        ingenieriacivil: {
            text: [
                'El ingeniero civil obtiene conocimientos generales de matemáticas, física y química, computación, informática, administración y evaluación de proyectos que lo capacitan para participar en la planeación, organización, construcción, operación y conservación de obras civiles de infraestructura y desarrollo urbano que el país requiere en las áreas de construcción, estructuras, ingeniería sanitaria y ambiental, e ingeniería de sistemas, planeación y transporte.',
                'Es el profesional que gracias a su formación multidisciplinaria entiende el comportamiento de estructuras y obras en construcción; prevé los impactos sociales, ecológicos y económicos que pueden ocasionar; y planea un uso más conveniente de recursos naturales y humanos de grandes áreas, por lo que su tarea es de gran importancia y responsabilidad para las poblaciones urbanas y rurales que conforman nuestro país.',
            ],
            sourceUrl: 'https://oferta.unam.mx/ingenieria-civil.html',
        },
        ingenieriademinasymetalurgia: {
            text: [
                'Esta carrera forma profesionales capaces de proyectar, dirigir y administrar la explotación racional, el beneficio y la comercialización de los minerales económicos existentes en la naturaleza y aprovecharlos de manera óptima en beneficio de la sociedad mexicana.',
            ],
            sourceUrl: 'https://oferta.unam.mx/ingenieria-de-minas.html',
        },
        ingenieriaelectricayelectronica: {
            text: [
                'El ingeniero eléctrico electrónico es el profesional capaz de crear, diseñar y generar tecnología; así como de, innovar, planear y poner en operación sistemas eléctricos y electrónicos.',
                'Diseña y programa instalaciones y máquinas eléctricas e interviene en el estudio y la puesta en operación de sistemas de comunicación telefónica, televisiva y satelital. Asimismo, traza y construye dispositivos de control de procesos industriales y de servicio, con base en microcomputadoras.',
                'Aplica sus conocimientos en los sectores: eléctrico, de comunicaciones, salud, transporte, industrial y de servicios para elevar la productividad y la competitividad de las empresas y el bienestar de la sociedad; además podrá comunicarse con otros profesionistas de áreas afines, lo que beneficiará su incorporación al mercado de trabajo.',
            ],
            sourceUrl:
                'https://oferta.unam.mx/ingenieria-electrica-electronica.html',
        },
        ingenieriaenalimentos: {
            text: [
                'En esta carrera son evaluados los recursos susceptibles de transformarse en alimentos y se establecen los procesos tecnológicos para utilizarlos en beneficio de la comunidad, como parte de las evoluciones económicas y sociales del país.',
            ],
            sourceUrl: 'https://oferta.unam.mx/ingenieria-en-alimentos.html',
        },
        ingenieriaencomputacion: {
            text: [
                'Este profesional adquiere los conocimientos que le permiten ser capaz de identificar, diseñar, planear, producir, operar y dar soporte a sistemas: electrónicos, inteligentes, de programación, de bases de datos, de cómputo gráfico, para el procesamiento digital de datos y el control de procesos automáticos. Su campo de acción se vincula con todas las áreas del conocimiento.',
            ],
            sourceUrl: 'https://oferta.unam.mx/ingenieria-en-computacion.html',
        },
        ingenieriaenenergiasrenovables: {
            text: [
                'El profesional de Ingeniería en Energías Renovables planea, proyecta, diseña, construye, opera, innova e implementa tecnologías relacionadas con el aprovechamiento de los recursos energéticos renovables, aplicando los conocimientos científicos y tecnológicos multidisciplinarios más avanzados.',
                'Además, es capaz de gestionar, administrar y planear estrategias para la promoción de las energías renovables, siempre preservando y mejorando los aspectos del medio ambiente en su quehacer cotidiano.',
            ],
            sourceUrl:
                'https://oferta.unam.mx/ingenieria-en-energias-renovables.html',
        },
        ingenieriaensistemasbiomedicos: {
            text: [
                'Nuestro país enfrenta una serie de retos en materia de salud, los cuales requieren de la labor de los ingenieros en sistemas biomédicos, quienes por su preparación participarán activamente en la solución de importantes necesidades en este terreno.',
                'La carrera forma profesionales con conocimientos sólidos y habilidades en los principios de la ingeniería para integrarlos y aplicarlos en el área biomédica.',
            ],
            sourceUrl:
                'https://oferta.unam.mx/ingenieria-en-sistemas-biom%C3%A9dicos.html',
        },
        ingenieriaentelecomunicaciones: {
            text: [
                'El ingeniero en Telecomunicaciones conjuga conocimientos de las ciencias físicas y matemáticas, y de las técnicas de ingeniería para aplicarlos en las comunicaciones ópticas, satelitales y por microondas, las redes de comunicaciones alámbricas e inalámbricas y los sistemas de radiodifusión y radionavegación.',
                'También lleva a cabo la administración, diseño, construcción, operación y mantenimiento de productos y equipos para telecomunicaciones.',
                'Para dar solución a los problemas que le plantea la profesión, hace uso del análisis matemático y físico, además de dominar los conceptos fundamentales de las comunicaciones, la computación, la electrónica y las áreas específicas del campo de las telecomunicaciones.',
            ],
            sourceUrl:
                'https://oferta.unam.mx/ingenieria-en-telecomunicaciones.html',
        },
        ingenieriaentelecomunicacionessistemasyelectronica: {
            text: ["El ingeniero en telecomunicaciones, sistemas y electrónica es el profesional capaz de integrar, diseñar, innovar y desarrollar sistemas de telecomunicaciones para la transmisión y recepción de voz, datos, audio y video.", "Su formación le permite hacer más eficaces los procesos productivos y de servicio, y participar en las áreas relacionadas con la generación e implementación de tecnología en electrónica analógica y digital; y con la administración de software, bases de datos y sistemas operativos para la automatización y el control de sistemas de telecomunicaciones.",],
            sourceUrl: 'https://oferta.unam.mx/ingenieria-en-telecomunicaciones-sistemas.html',
        },
        ingenieriageofisica: {
            text: ["El ingeniero geofísico participa en la exploración de los recursos energéticos: hidrocarburos, minerales e hidrológicos.", "Realiza estudios del subsuelo para la construcción de presas, plantas, puentes, túneles y carreteras.", "Dada su formación académica puede realizar la investigación de otros fenómenos naturales: sismología, vulcanología, ciencias atmosféricas, impacto ambiental y riesgos geológicos."],
            sourceUrl: 'https://oferta.unam.mx/ingenieria-geofisica.html',
        },
        ingenieriageologica: {
            text: ["El ingeniero geólogo es el profesional con los conocimientos y capacidad para participar en las actividades de exploración, evaluación, explotación y aprovechamiento de recursos energéticos, minerales e hidrológicos, lo que lo convierte en un importante actor en la solución de problemas de riesgos naturales: sismos, inundaciones, riesgos volcánicos y deslaves, los cuales evidentemente tienen una amplia incidencia social.",],
            sourceUrl: 'https://oferta.unam.mx/ingenieria-geologica.html',
        },
        ingenieriageomatica: {
            text: ["En la carrera de Ingeniería Geomática se llevan a cabo actividades relacionadas con la adquisición, proceso y almacenamiento de elementos topográficos y geográficos que son la base para la producción de mapas, planos, cartas e imágenes que se utilizan en forma digital para realizar estudios y análisis, con fines multidisciplinarios.",
             "Esta profesión sirve de apoyo a otras geociencias como: geografía, geofísica, oceanografía, ecología, que dependen de dichos estudios.", "Los ingenieros geomáticos aplican sus conocimientos de cartografía, fotogrametría, sistemas de información, geodesia, topografía, percepción remota, informática y computación, con lo que resuelven problemas y abren nuevas oportunidades en áreas como: desarrollo, operación y mantenimiento de sistemas de información geográfica y construcción de obras civiles."],
            sourceUrl: 'https://oferta.unam.mx/ingenieria-geomatica.html',
        },
        ingenieriaindustrial: {
            text: [
                'Esta carrera forma al profesional altamente capacitado en el uso e identificación de tecnologías óptimas que permitan diseñar y desarrollar procesos y sistemas de toda naturaleza: operativos, productivos, financieros y administrativos, haciéndolo apto para incrementar la productividad mediante la integración de recursos humanos, materiales, técnicos y financieros, a fin de impulsar y apoyar la industria para hacerla más competitiva tanto en el mercado interno como en el externo.',
                'El ingeniero industrial emplea métodos y modelos matemáticos, físicos, químicos y computacionales, además de técnicas y tecnologías de Ingeniería, fundamentos sólidos de administración, finanzas y dirección de empresas que le permiten optimizar los procesos industriales, comerciales y de servicios.',
            ],
            sourceUrl: 'https://oferta.unam.mx/ingenieria-industrial.html',
        },
        ingenieriamecanica: {
            text: [
                'En esta carrera se forma el profesional capaz de plantear y realizar proyectos de innovación tecnológica que generen productos y servicios sustentables y que contribuyan a solucionar los problemas nacionales, mediante la aplicación de conocimientos científicos y tecnológicos.',
                'El ingeniero mecánico, gracias al diseño, construcción, selección, instalación, operación y mantenimiento de equipos y sistemas mecánicos incrementa la productividad usando como herramienta la integración de tecnología.',
            ],
            sourceUrl: 'https://oferta.unam.mx/ingenieria-mecanica.html',
        },
        ingenieriamecanicaelectrica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriamecatronica: {
            text: [
                'En esta carrera se forman profesionales capaces de proporcionar a la sociedad bienes y herramientas mecatrónicas, mediante la aplicación de conocimientos físico matemáticos y técnicas avanzadas de ingeniería, para contribuir al desarrollo tecnológico, tema prioritario para el futuro de México.',
                'Entre las principales actividades que realiza el ingeniero mecatrónico se encuentran: diseño, fabricación, implantación y control de equipos y sistemas de producción en micro, pequeña y gran industria, planeación de equipos médicos y productos de bioingeniería.',
            ],
            sourceUrl: 'https://oferta.unam.mx/ingenieria-mecatronica.html',
        },
        ingenieriapetrolera: {
            text: ["El ingeniero petrolero desarrolla métodos y aplica técnicas para explotar racionalmente los yacimientos de hidrocarburos, buscando siempre el beneficio social, ambiental y económico del país.",],
            sourceUrl: 'https://oferta.unam.mx/ingenieria-petrolera.html',
        },
        ingenieriaquimica: {
            text: ["En esta carrera se forman profesionales encargados del diseño, manejo, optimización, control y administración de procesos y proyectos para la transformación física y/o química de materias primas, a fin de obtener productos y servicios útiles al hombre que sean, técnica, ambiental y económicamente factibles.",],
            sourceUrl: 'https://oferta.unam.mx/ingenieria-quimica.html',
        },
        ingenieriaquimicametalurgica: {
            text: ["En la carrera de Ingeniería Química Metalúrgica se forman profesionales con una visión integral en el análisis, operación y desarrollo de la industria metalúrgica, cuyas funciones son: la extracción de metales, la fabricación de aleaciones, la protección y prevención de fallas de componentes metálicos, la manufactura de piezas de cerámicos, polímeros y materiales compuestos.", "Realizan actividades de evaluación, control, modificación y diseño de componentes metálicos y sus procesos de producción aplicando las bases científicas de la química, la física y las matemáticas."],
            sourceUrl: 'https://oferta.unam.mx/ingenieria-quim-meta.html',
        },
        instrumentista: {
            text: [],
            sourceUrl: '',
        },
        investigacionbiomedicabasica: {
            text: ["En Investigación Biomédica Básica se forman científicos en biomedicina y biología, a través de la enseñanza tutoral impartida por investigadores de alto nivel.", "Algunas de las áreas de investigación de esta carrera son: Biología Celular, Bioquímica, Genética, Genómica, Inmunología, Neurociencias, Parasitología, Virología, Biotecnología, Biología del Desarrollo, y Regulación Metabólica."],
            sourceUrl: 'https://oferta.unam.mx/investigacion-biomedica.html',
        },
        lenguayliteraturashispanicas: {
            text: [],
            sourceUrl: '',
        },
        lenguayliteraturasmodernasalemanas: {
            text: [],
            sourceUrl: '',
        },
        lenguayliteraturasmodernasfrancesas: {
            text: [],
            sourceUrl: '',
        },
        lenguayliteraturasmodernasinglesas: {
            text: [],
            sourceUrl: '',
        },
        lenguayliteraturasmodernasitalianas: {
            text: [],
            sourceUrl: '',
        },
        lenguayliteraturasmodernasportuguesas: {
            text: [],
            sourceUrl: '',
        },
        letrasclasicas: {
            text: [],
            sourceUrl: '',
        },
        linguisticaaplicada: {
            text: [],
            sourceUrl: '',
        },
        literaturadramaticayteatro: {
            text: [],
            sourceUrl: '',
        },
        literaturaintercultural: {
            text: [],
            sourceUrl: '',
        },
        manejosustentabledezonascosteras: {
            text: [],
            sourceUrl: '',
        },
        matematicas: {
            text: ["El matemático es el profesionista capaz de encontrar analogías y de modelar situaciones reales, aprende las matemáticas y sus relaciones con otras disciplinas tanto científicas como sociales, en las cuales motiva y resuelve problemas.", "Lleva a cabo investigación pura en alguna rama de las matemáticas, o bien, investigación aplicada a otras ciencias: economía, medicina, sociología, ingeniería, física y biología."],
            sourceUrl: 'https://oferta.unam.mx/matematicas.html',
        },
        matematicasaplicadas: {
            text: [],
            sourceUrl: '',
        },
        matematicasaplicadasycomputacion: {
            text: [],
            sourceUrl: '',
        },
        matematicasparaeldesarrollo: {
            text: [],
            sourceUrl: '',
        },
        medicinaveterinariayzootecnia: {
            text: [
                'Profesión responsable de, entre otras actividades, promover y mantener la producción y la salud animal, evitar la transmisión de enfermedades de los animales al hombre, garantizar la producción de alimentos de dicho origen, sanos y de calidad; asegurar la sustentabilidad de los sistemas de producción animal, sin el deterioro de los recursos naturales renovables y no renovables, participar en la generación de investigación biomédica y en lo relativo a la producción animal.',
            ],
            sourceUrl: 'https://oferta.unam.mx/medicina-veterinaria.html',
        },
        medicocirujano: {
            text: [
                'La Medicina es el conjunto de disciplinas científicas cuyo propósito primordial es promover, conservar y restaurar la salud de las personas, actuando siempre bajo un marco de referencia humanista. Su misión está enfocada a formar a los líderes de las próximas generaciones de médicos mexicanos y contribuir a establecer un sistema de salud capaz de desarrollar las capacidades físicas y mentales de nuestra población y colaborar en la preparación de investigadores en el campo de las Ciencias Médicas.',
                'El médico es un profesionista comprometido a preservar, mejorar y restablecer la salud del ser humano. Sus acciones se fundamentan en el conocimiento científico de los fenómenos biológicos, psicológicos y sociales. Su ejercicio profesional se orienta primordialmente a la práctica clínica, la cual debe ejercer con conocimiento, pericia, humanismo, arte, prudencia y juicio crítico, guiándose por un código ético que considera a la vida humana como valor supremo.',
            ],
            sourceUrl: 'https://oferta.unam.mx/medico-cirujano.html',
        },
        musicaytecnologiaartistica: {
            text: [],
            sourceUrl: '',
        },
        nanotecnologia: {
            text: [],
            sourceUrl: '',
        },
        negociosinternacionales: {
            text: [
                'La licenciatura en Negocios Internacionales forma profesionistas con una visión interdisciplinaria y global, capaces de diseñar modelos de negocios, generar soluciones creativas a las necesidades de las empresas que participan en el mercado mundial y promover el logro de objetivos en organizaciones públicas, privadas y sociales vinculadas con los negocios internacionales.',
                'Negocios Internacionales atiende las necesidades y los requerimientos de las organizaciones públicas y privadas que participan en el mercado global en materia de negocios y administración y contribuye a la creación de nuevas fuentes de empleo que produzcan bienes y servicios competitivos internacionalmente.',
            ],
            sourceUrl: 'https://oferta.unam.mx/negocios-internacionales.html',
        },
        neurociencias: {
            text: [],
            sourceUrl: '',
        },
        nutriologia: {
            text: [
                'Los egresados de esta carrera cuentan con conocimientos en nutrición y actividad física, capaces de ejercer funciones profesionales de diagnóstico, prevención, promoción e intervención en estos ámbitos, con el propósito de favorecer la salud integral de las personas, basados en un enfoque interdisciplinario, de perspectiva de género e interculturalidad.',
                'Se desempeñan profesionalmente como: nutriólogos, investigadores, coordinadores de programas de salud alimenticia y consultores para el desarrollo de nuevos productos y alimentos.',
            ],
            sourceUrl: 'https://oferta.unam.mx/nutriologia.html',
        },
        odontologia: {
            text: [],
            sourceUrl: '',
        },
        optometria: {
            text: [],
            sourceUrl: '',
        },
        ortesisyprotesis: {
            text: [],
            sourceUrl: '',
        },
        pedagogia: {
            text: [ "El pedagogo estudia integralmente la educación para describir, comprender, explicar, evaluar e intervenir en el fortalecimiento y mejora de los procesos educativos, analiza y propone alternativas de solución en problemas relacionados con el campo educativo, además de atender a diversos sectores de la población que requieren ayuda pedagógica.", "Desarrolla actividades de docencia, orientación educativa, educación permanente y capacitación, administración y gestión educativas, desarrollo curricular, comunicación e investigación en este campo, en instituciones públicas y privadas o en el ejercicio libre de la profesión, atendiendo las distintas orientaciones de la práctica profesional." ],
            sourceUrl: 'https://oferta.unam.mx/pedagogia.html',
        },
        piano: {
            text: [],
            sourceUrl: '',
        },
        planificacionparaeldesarrolloagropecuario: {
            text: [],
            sourceUrl: '',
        },
        psicologia: {
            text: [
                'Psicología es la profesión en la que se identifican, valoran y proponen alternativas de prevención y solución a situaciones derivadas de la interacción entre individuos, grupos, instituciones y comunidades para el desarrollo del ser humano y la sociedad.',
                'Con una visión sólida, actualizada, plural y crítica acerca de los campos de conocimiento y de la intervención profesional de la disciplina, el egresado de Psicología posee una concepción integral sobre los problemas y fenómenos psicológicos; además revisa críticamente las diferentes aproximaciones teóricas de la Psicología, con la finalidad de seleccionar la metodología de trabajo adecuada para analizar e intervenir en diversos problemas.',
            ],
            sourceUrl: 'https://oferta.unam.mx/psicologia.html',
        },
        quimica: {
            text: [],
            sourceUrl: '',
        },
        quimicadealimentos: {
            text: [
                'En Química de Alimentos se aplican conocimientos de química y biología al desarrollo, optimización y control de productos alimenticios, desde la materia prima hasta el producto almacenado, incluyendo su comercialización.',
            ],
            sourceUrl: 'https://oferta.unam.mx/quimica-alimentos.html',
        },
        quimicaeingenieriaenmateriales: {
            text: [],
            sourceUrl: '',
        },
        quimicafarmaceuticobiologica: {
            text: [],
            sourceUrl: '',
        },
        quimicaindustrial: {
            text: [],
            sourceUrl: '',
        },
        relacionesinternacionales: {
            text: [
                'En su expresión más sintética, el objeto de estudio de las Relaciones Internacionales es la realidad internacional y su análisis en los ámbitos político, económico, jurídico, social y cultural. Asimismo contempla aspectos técnico-prácticos requeridos en el proceso de toma de decisiones, vinculando los hechos y los problemas internacionales, por lo que considera el estudio de los procesos históricos y sus consecuencias.',
                'El profesional de las Relaciones Internacionales conducirá su ejercicio profesional con ética, honestidad, responsabilidad, compromiso social y lealtad a los más altos valores humanos de respeto, tolerancia, asimismo identificará variables nacionales e internacionales con una perspectiva interdisciplinaria para generar propuestas de solución a problemas nacionales e internacionales en los ámbitos político, jurídico, económico y social. El internacionalista se desempeñará en la diplomacia, la administración pública federal y local, además de la iniciativa privada.',
            ],
            sourceUrl: 'https://oferta.unam.mx/relaciones-internacionales.html',
        },
        sociologia: {
            text: [],
            sourceUrl: '',
        },
        sociologiaaplicada: {
            text: [],
            sourceUrl: '',
        },
        teatroyactuacion: {
            text: [],
            sourceUrl: '',
        },
        tecnologia: {
            text: [],
            sourceUrl: '',
        },
        tecnologiasparalainformacionenciencias: {
            text: [],
            sourceUrl: '',
        },
        trabajosocial: {
            text: [ "El licenciado en Trabajo Social es un profesional que interviene en los contextos sociales a través de generar estrategias y alternativas de solución a las necesidades y problemas de alcance nacional e internacional, tomando en cuenta los escenarios sociales, políticos, jurídicos, administrativos, organizativos, económicos y educativos con miras a transformar las realidades sociales.", "Está preparado para atender problemáticas multidimensionales que requieren un abordaje desde diversas miradas disciplinarias, ya que busca contribuir en la mejora de las condiciones de vida de la población y el fortalecimiento del tejido social."],
            sourceUrl: 'https://oferta.unam.mx/trabajo-social.html',
        },
        traduccion: {
            text: [],
            sourceUrl: '',
        },
        turismoydesarrollosostenible: {
            text: [],
            sourceUrl: '',
        },
        urbanismo: {
            text: [],
            sourceUrl: '',
        },
        agronomia: {
            text: [],
            sourceUrl: '',
        },
        antropologiasocial: {
            text: [],
            sourceUrl: '',
        },
        arteycomunicaciondigitales: {
            text: [],
            sourceUrl: '',
        },
        biologiaambiental: {
            text: [],
            sourceUrl: '',
        },
        biologiaexperimental: {
            text: [],
            sourceUrl: '',
        },
        biologiamolecular: {
            text: [],
            sourceUrl: '',
        },
        cienciaytecnologiadealimentos: {
            text: [],
            sourceUrl: '',
        },
        cienciasatmosfericas: {
            text: [],
            sourceUrl: '',
        },
        cienciapolitica: {
            text: [],
            sourceUrl: '',
        },
        computacion: {
            text: [],
            sourceUrl: '',
        },
        comunicacionsocial: {
            text: [],
            sourceUrl: '',
        },
        diseno: {
            text: [],
            sourceUrl: '',
        },
        disenodelacomunicaciongrafica: {
            text: [],
            sourceUrl: '',
        },
        disenodeproyectossustentables: {
            text: [],
            sourceUrl: '',
        },
        educacionytecnologiasdigitales: {
            text: [],
            sourceUrl: '',
        },
        estomatologia: {
            text: [],
            sourceUrl: '',
        },
        estudiossocioterritoriales: {
            text: [],
            sourceUrl: '',
        },
        geografiahumana: {
            text: [],
            sourceUrl: '',
        },
        hidrobiologia: {
            text: [],
            sourceUrl: '',
        },
        humanidades: {
            text: [],
            sourceUrl: '',
        },
        ingenieriadelosalimentos: {
            text: [],
            sourceUrl: '',
        },
        ingenieriabiologica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriabiomedica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriabioquimicaindustrial: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaencomputacionytelecomunicaciones: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaelectrica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaelectronica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaenenergia: {
            text: [],
            sourceUrl: '',
        },
        ingenieriafisica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriahidrologica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriametalurgica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaenrecursoshidricos: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaensistemasmecatronicosindustriales: {
            text: [],
            sourceUrl: '',
        },
        letrashispanicas: {
            text: [],
            sourceUrl: '',
        },
        linguistica: {
            text: [],
            sourceUrl: '',
        },
        medicina: {
            text: [],
            sourceUrl: '',
        },
        nutricionhumana: {
            text: [],
            sourceUrl: '',
        },
        planeacionterritorial: {
            text: [],
            sourceUrl: '',
        },
        politicaygestionsocial: {
            text: [],
            sourceUrl: '',
        },
        politicaspublicas: {
            text: [],
            sourceUrl: '',
        },
        produccionanimal: {
            text: [],
            sourceUrl: '',
        },
        psicologiabiomedica: {
            text: [],
            sourceUrl: '',
        },
        psicologiasocial: {
            text: [],
            sourceUrl: '',
        },
        quimicafarmaceuticabiologica: {
            text: [],
            sourceUrl: '',
        },
        tecnologiasysistemasdeinformacion: {
            text: [],
            sourceUrl: '',
        },
        contadorpublico: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaagroindustrial: {
            text: [],
            sourceUrl: '',
        },
        ingenieriadesoftware: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaelectromecanica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaenautomatizacion: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaenbiotecnologia: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaennanotecnologia: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaentelecomunicacionesyredes: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaindustrialydemanufactura: {
            text: [],
            sourceUrl: '',
        },
        ingenieriamecanicayautomotriz: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaquimicaenalimentos: {
            text: [],
            sourceUrl: '',
        },
        administracionentecnologiasdeinformacion: {
            text: [],
            sourceUrl: '',
        },
        administracionfinanciera: {
            text: [],
            sourceUrl: '',
        },
        artedanzario: {
            text: [],
            sourceUrl: '',
        },
        artesvisualesconespecialidadenartesplasticas: {
            text: [],
            sourceUrl: '',
        },
        cienciasdelaseguridad: {
            text: [],
            sourceUrl: '',
        },
        composicionmusicalparamediosaudiovisualesyescenicos: {
            text: [],
            sourceUrl: '',
        },
        criminologia: {
            text: [],
            sourceUrl: '',
        },
        danzafolkloricamexicana: {
            text: [],
            sourceUrl: '',
        },
        desarrollohumanoparalasustentabilidad: {
            text: [],
            sourceUrl: '',
        },
        desarrollolocalyprofesionalasociadoendesarrollolocal: {
            text: [],
            sourceUrl: '',
        },
        economiaempresarial: {
            text: [],
            sourceUrl: '',
        },
        educacionfisicaycienciasdeldeporte: {
            text: [],
            sourceUrl: '',
        },
        estudiosliterarios: {
            text: [],
            sourceUrl: '',
        },
        gastronomia: {
            text: [],
            sourceUrl: '',
        },
        geografiaambiental: {
            text: [],
            sourceUrl: '',
        },
        gestiondelturismoculturalynatural: {
            text: [],
            sourceUrl: '',
        },
        gestionpublicaygobierno: {
            text: [],
            sourceUrl: '',
        },
        gestionydesarrollodeempresassociales: {
            text: [],
            sourceUrl: '',
        },
        horticulturaambiental: {
            text: [],
            sourceUrl: '',
        },
        humanidadesyproducciondeimagenes: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaenagrobiotecnologia: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaquimicaambiental: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaquimicaenmateriales: {
            text: [],
            sourceUrl: '',
        },
        innovacionygestioneducativa: {
            text: [],
            sourceUrl: '',
        },
        lenguasmodernasdelfrances: {
            text: [],
            sourceUrl: '',
        },
        lenguasmodernasenespanol: {
            text: [],
            sourceUrl: '',
        },
        lenguasmodernasingles: {
            text: [],
            sourceUrl: '',
        },
        medicinageneral: {
            text: [],
            sourceUrl: '',
        },
        microbiologia: {
            text: [],
            sourceUrl: '',
        },
        musica: {
            text: [],
            sourceUrl: '',
        },
        musicapopularcontemporanea: {
            text: [],
            sourceUrl: '',
        },
        negociosturisticos: {
            text: [],
            sourceUrl: '',
        },
        negociosycomerciointernacional: {
            text: [],
            sourceUrl: '',
        },
        nutricion: {
            text: [],
            sourceUrl: '',
        },
        produccionagropecuariasustentable: {
            text: [],
            sourceUrl: '',
        },
        psicologiadeltrabajo: {
            text: [],
            sourceUrl: '',
        },
        psicologiaeducativa: {
            text: [],
            sourceUrl: '',
        },
        quimicofarmaceuticobiologo: {
            text: [],
            sourceUrl: '',
        },
        restauraciondebienesmuebles: {
            text: [],
            sourceUrl: '',
        },
        profesorasociadoenlaensenanzadelenguas: {
            text: [],
            sourceUrl: '',
        },
        actuacion: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaaeronautica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriabionica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriabioquimica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriabiotecnologica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaencomunicacionesyelectronica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaencontrolyautomatizacion: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaeninformatica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaeninteligenciaartificial: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaenmetalurgiaymateriales: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaenmovilidadurbana: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaennegociosenergeticossustentables: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaenroboticaindustrial: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaensistemasambientales: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaensistemasautomotrices: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaensistemascomputacionales: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaensistemasenergeticosyredesinteligentes: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaentransporte: {
            text: [],
            sourceUrl: '',
        },
        ingenieriafarmaceutica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaferroviaria: {
            text: [],
            sourceUrl: '',
        },
        ingenieriafotonica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriamatematica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaquimicaindustrial: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaquimicapetrolera: {
            text: [],
            sourceUrl: '',
        },
        ingenieriatelematica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriatextil: {
            text: [],
            sourceUrl: '',
        },
        ingenieriatopograficayfotogrametrica: {
            text: [],
            sourceUrl: '',
        },
        ingenieroarquitecto: {
            text: [],
            sourceUrl: '',
        },
        cienciadedatos: {
            text: [ "Ciencia de Datos es una carrera indispensable para resolver necesidades en el manejo actual y futuro de la información.", "Sus labores fundamentales son: seleccionar, limpiar, consolidar y preparar los datos para posteriormente: analizar, predecir, describir comportamientos o conocimientos nuevos para la toma de decisiones. Los dominios de aplicación de esas habilidades pueden ser empresariales, gubernamentales o científicos."],
            sourceUrl: 'https://oferta.unam.mx/ciencia-de-datos.html',
        },
        cienciasdelainformatica: {
            text: [],
            sourceUrl: '',
        },
        fisicaymatematicas: {
            text: [],
            sourceUrl: '',
        },
        matematicaalgoritmica: {
            text: [],
            sourceUrl: '',
        },
        medicocirujanohomeopata: {
            text: [],
            sourceUrl: '',
        },
        medicocirujanopartero: {
            text: [],
            sourceUrl: '',
        },
        quimicobacteriologoyparasitologo: {
            text: [],
            sourceUrl: '',
        },
        quimicofarmaceuticoindustrial: {
            text: [],
            sourceUrl: '',
        },
        administracionindustrial: {
            text: [],
            sourceUrl: '',
        },
        administracionydesarrolloempresarial: {
            text: [],
            sourceUrl: '',
        },
        archivonomia: {
            text: [],
            sourceUrl: '',
        },
        biblioteconomia: {
            text: [],
            sourceUrl: '',
        },
        mercadotecniadigital: {
            text: [],
            sourceUrl: '',
        },
        negociosdigitales: {
            text: [],
            sourceUrl: '',
        },
        relacionescomerciales: {
            text: [],
            sourceUrl: '',
        },
        turismo: {
            text: [],
            sourceUrl: '',
        },
        turismosustentable: {
            text: [],
            sourceUrl: '',
        },
        comerciointernacional: {
            text: [],
            sourceUrl: '',
        },
        contaduriayfinanzaspublicas: {
            text: [],
            sourceUrl: '',
        },
    },
    msc: {
        maestriaenadministracion: {
            text: [],
            sourceUrl: '',
        },
        maestriaenaltadireccion: {
            text: [],
            sourceUrl: '',
        },
        maestriaenantropologia: {
            text: [],
            sourceUrl: '',
        },
        maestriaenarquitectura: {
            text: [],
            sourceUrl: '',
        },
        maestriaenartesvisuales: {
            text: [],
            sourceUrl: '',
        },
        maestriaenastrofisica: {
            text: [],
            sourceUrl: '',
        },
        maestriaenauditoria: {
            text: [],
            sourceUrl: '',
        },
        maestriaenbibliotecologiayestudiosdelainformacion: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaeingenieriadelacomputacion: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaeingenieriademateriales: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasfisicamedica: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasfisica: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasneurobiologia: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasbiologicas: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasbioquimicas: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasdelaproduccionydelasaludanimal: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasdelasostenibilidad: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasdelatierra: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasdelmarylimnologia: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasmatematicas: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasmedicasodontologicasydelasalud: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasquimicas: {
            text: [],
            sourceUrl: '',
        },
        maestriaencinedocumental: {
            text: [],
            sourceUrl: '',
        },
        maestriaencomunicacion: {
            text: [],
            sourceUrl: '',
        },
        maestriaendemografiasocial: {
            text: [],
            sourceUrl: '',
        },
        maestriaenderecho: {
            text: [],
            sourceUrl: '',
        },
        maestriaendisenoindustrial: {
            text: [],
            sourceUrl: '',
        },
        maestriaendisenoycomunicacionvisual: {
            text: [],
            sourceUrl: '',
        },
        maestriaendocenciaenartesydiseno: {
            text: [],
            sourceUrl: '',
        },
        maestriaendocenciaparalaeducacionmediasuperior: {
            text: [],
            sourceUrl: '',
        },
        maestriaeneconomia: {
            text: [],
            sourceUrl: '',
        },
        maestriaenenfermeria: {
            text: [],
            sourceUrl: '',
        },
        maestriaenestudiosdegenero: {
            text: [],
            sourceUrl: '',
        },
        maestriaenestudiosenrelacionesinternacionales: {
            text: [],
            sourceUrl: '',
        },
        maestriaenestudioslatinoamericanos: {
            text: [],
            sourceUrl: '',
        },
        maestriaenestudiosmesoamericanos: {
            text: [],
            sourceUrl: '',
        },
        maestriaenestudiosmexicoestadosunidos: {
            text: [],
            sourceUrl: '',
        },
        maestriaenestudiospoliticosysociales: {
            text: [],
            sourceUrl: '',
        },
        maestriaenfilosofia: {
            text: [],
            sourceUrl: '',
        },
        maestriaenfilosofiadelaciencia: {
            text: [],
            sourceUrl: '',
        },
        maestriaenfinanzas: {
            text: [],
            sourceUrl: '',
        },
        maestriaengeografia: {
            text: [],
            sourceUrl: '',
        },
        maestriaengobiernoyasuntospublicos: {
            text: [],
            sourceUrl: '',
        },
        maestriaenhistoria: {
            text: [],
            sourceUrl: '',
        },
        maestriaenhistoriadelarte: {
            text: [],
            sourceUrl: '',
        },
        maestriaeninformaticaadministrativa: {
            text: [],
            sourceUrl: '',
        },
        maestriaeningenieria: {
            text: [],
            sourceUrl: '',
        },
        maestriaenletras: {
            text: [],
            sourceUrl: '',
        },
        maestriaenlinguisticaaplicada: {
            text: [],
            sourceUrl: '',
        },
        maestriaenlinguisticahispanica: {
            text: [],
            sourceUrl: '',
        },
        maestriaenmedicinaveterinariayzootecnia: {
            text: [],
            sourceUrl: '',
        },
        maestriaenmusica: {
            text: [],
            sourceUrl: '',
        },
        maestriaenpedagogia: {
            text: [],
            sourceUrl: '',
        },
        maestriaenpoliticacriminal: {
            text: [],
            sourceUrl: '',
        },
        maestriaenpsicologia: {
            text: [],
            sourceUrl: '',
        },
        maestriaentrabajosocial: {
            text: [],
            sourceUrl: '',
        },
        maestriaenurbanismo: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasdelacomputacion: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaseningenieriaelectromagnetica: {
            text: [],
            sourceUrl: '',
        },
        maestriaeningenieriaestructural: {
            text: [],
            sourceUrl: '',
        },
        maestriaeningenieriadeprocesos: {
            text: [],
            sourceUrl: '',
        },
        maestriaenoptimizacion: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaseingenieriaambientalesdemateriales: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasingenieriabiomedica: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasingenieriaquimica: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasmatematicasaplicadaseindustriales: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasquimica: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasytecnologiasdelainformacion: {
            text: [],
            sourceUrl: '',
        },
        maestriaenenergiaymedioambiente: {
            text: [],
            sourceUrl: '',
        },
        maestriaenbiologia: {
            text: [],
            sourceUrl: '',
        },
        maestriaenbiologiaexperimental: {
            text: [],
            sourceUrl: '',
        },
        maestriaenbiologiadelareproduccionanimal: {
            text: [],
            sourceUrl: '',
        },
        maestriaenbiotecnologia: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasagropecuarias: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasfarmaceuticas: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasodontologicas: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasensaluddelostrabajadores: {
            text: [],
            sourceUrl: '',
        },
        maestriaenecologiaaplicada: {
            text: [],
            sourceUrl: '',
        },
        maestriaenenfermeriadepracticaavanzada: {
            text: [],
            sourceUrl: '',
        },
        maestriaenmedicinasocial: {
            text: [],
            sourceUrl: '',
        },
        maestriaenpatologiaymedicinabucal: {
            text: [],
            sourceUrl: '',
        },
        maestriaenpoblacionysalud: {
            text: [],
            sourceUrl: '',
        },
        maestriaenrehabilitacionneurologica: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasnaturaleseingenieria: {
            text: [],
            sourceUrl: '',
        },
        maestriaenhistoriografia: {
            text: [],
            sourceUrl: '',
        },
        maestriaenliteraturamexicanacontemporanea: {
            text: [],
            sourceUrl: '',
        },
        maestriaenplaneacionypoliticasmetropolitanas: {
            text: [],
            sourceUrl: '',
        },
        maestriaensociologia: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciassocialesyhumanidades: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasantropologicas: {
            text: [],
            sourceUrl: '',
        },
        maestriaenestudiosorganizacionales: {
            text: [],
            sourceUrl: '',
        },
        maestriaenestudiossociales: {
            text: [],
            sourceUrl: '',
        },
        maestriaenhumanidades: {
            text: [],
            sourceUrl: '',
        },
        maestriaenpsicologiasocial: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciassociales: {
            text: [],
            sourceUrl: '',
        },
        maestriaencomunicacionypolitica: {
            text: [],
            sourceUrl: '',
        },
        maestriaendesarrolloyplaneaciondelaeducacion: {
            text: [],
            sourceUrl: '',
        },
        maestriaendesarrollorural: {
            text: [],
            sourceUrl: '',
        },
        maestriaeneconomiagestionypoliticasdeinnovacion: {
            text: [],
            sourceUrl: '',
        },
        maestriaenestudiosdelamujer: {
            text: [],
            sourceUrl: '',
        },
        maestriaenpoliticaspublicas: {
            text: [],
            sourceUrl: '',
        },
        maestriaenpsicologiasocialdegruposeinstituciones: {
            text: [],
            sourceUrl: '',
        },
        maestriaenrelacionesinternacionales: {
            text: [],
            sourceUrl: '',
        },
        maestriaensociedadessustentables: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaseconomicas: {
            text: [],
            sourceUrl: '',
        },
        posgradointegralencienciasadministrativaspica: {
            text: [],
            sourceUrl: '',
        },
        maestriaendisenobioclimatico: {
            text: [],
            sourceUrl: '',
        },
        maestriaendisenoydesarrollodeproductos: {
            text: [],
            sourceUrl: '',
        },
        maestriaendisenoyestudiosurbanos: {
            text: [],
            sourceUrl: '',
        },
        maestriaendisenoplanificacionyconservaciondepaisajesyjardines: {
            text: [],
            sourceUrl: '',
        },
        maestriaendisenoparalarehabilitacionrecuperacionyconservaciondelpatrimonioconstruido:
            {
                text: [],
                sourceUrl: '',
            },
        maestriaendisenoyvisualizaciondelainformacion: {
            text: [],
            sourceUrl: '',
        },
        maestriaenprocesosculturalesparaeldisenoyelarte: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasyartesparaeldiseno: {
            text: [],
            sourceUrl: '',
        },
        maestriaendisenoyproduccioneditorial: {
            text: [],
            sourceUrl: '',
        },
        maestriaenreutilizaciondelpatrimonioedificado: {
            text: [],
            sourceUrl: '',
        },
        maestriaendisenoinformacionycomunicacion: {
            text: [],
            sourceUrl: '',
        },
        maestriaenadministracionpublicaestatalymunicipal: {
            text: [],
            sourceUrl: '',
        },
        maestriaenaprendizajedelalenguaylasmatematicas: {
            text: [],
            sourceUrl: '',
        },
        maestriaenartecontemporaneoyculturavisual: {
            text: [],
            sourceUrl: '',
        },
        maestriaenarteparalaeducacion: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciadedatos: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaytecnologiaambiental: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaytecnologiadealimentos: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasconstruccion: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasestructuras: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasgeotecnia: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciashidrologiaambiental: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasingenieriamatematica: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasinstrumentacionycontrolautomatico: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasmecatronica: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasnanotecnologia: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasdeenfermeria: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasdelaeducacion: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasdelaenergia: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasdelanutricionhumana: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasdelarehabilitacionenelmovimientohumano: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaseconomicoadministrativas: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasenbiomedicina: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaseninteligenciaartificial: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasenneurometabolismo: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasentecnologiassustentables: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasjuridicas: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasquimicobiologicas: {
            text: [],
            sourceUrl: '',
        },
        maestriaencomunicacionyculturadigital: {
            text: [],
            sourceUrl: '',
        },
        maestriaencreacioneducativa: {
            text: [],
            sourceUrl: '',
        },
        maestriaenderechoshumanos: {
            text: [],
            sourceUrl: '',
        },
        maestriaendidacticadelascienciasmodalidadvirtual: {
            text: [],
            sourceUrl: '',
        },
        maestriaendidacticadelasmatematicasydelasciencias: {
            text: [],
            sourceUrl: '',
        },
        maestriaendireccionygestiondeproyectosartisticosyculturales: {
            text: [],
            sourceUrl: '',
        },
        maestriaendisenoeinnovacion: {
            text: [],
            sourceUrl: '',
        },
        maestriaendisenoycomunicacionhipermedial: {
            text: [],
            sourceUrl: '',
        },
        maestriaeneducacionparalaciudadania: {
            text: [],
            sourceUrl: '',
        },
        maestriaenelmanejoclinicoavanzadodeheridasestomasyquemaduras: {
            text: [],
            sourceUrl: '',
        },
        maestriaenemergenciasydesastres: {
            text: [],
            sourceUrl: '',
        },
        maestriaenensenanzadelenguasycultura: {
            text: [],
            sourceUrl: '',
        },
        maestriaenensenanzaenestudiosliterarios: {
            text: [],
            sourceUrl: '',
        },
        maestriaenestrategiadenegociosinternacionales: {
            text: [],
            sourceUrl: '',
        },
        maestriaenestudiosamerindiosyeducacionbilingue: {
            text: [],
            sourceUrl: '',
        },
        maestriaenestudioshistoricos: {
            text: [],
            sourceUrl: '',
        },
        maestriaenestudiosinterdisciplinariosenarteyhumanidadesmeiah: {
            text: [],
            sourceUrl: '',
        },
        maestriaenestudiosmultidisciplinariossobreeltrabajo: {
            text: [],
            sourceUrl: '',
        },
        maestriaeneticaaplicadaybioetica: {
            text: [],
            sourceUrl: '',
        },
        maestriaenfilosofiacontemporaneaaplicada: {
            text: [],
            sourceUrl: '',
        },
        maestriaengestiondelatecnologia: {
            text: [],
            sourceUrl: '',
        },
        maestriaengestioneinnovacionpublica: {
            text: [],
            sourceUrl: '',
        },
        maestriaengestionintegradadecuencas: {
            text: [],
            sourceUrl: '',
        },
        maestriaenimpuestos: {
            text: [],
            sourceUrl: '',
        },
        maestriaeningenieriadecalidadyproductividad: {
            text: [],
            sourceUrl: '',
        },
        maestriaeningenieriadeviasterrestres: {
            text: [],
            sourceUrl: '',
        },
        maestriaeningenieriaenbiosistemas: {
            text: [],
            sourceUrl: '',
        },
        maestriaeninnovacionenentornosvirtualesdeensenanzaaprendizaje: {
            text: [],
            sourceUrl: '',
        },
        maestriaeninvestigacionmedica: {
            text: [],
            sourceUrl: '',
        },
        maestriaenlinguistica: {
            text: [],
            sourceUrl: '',
        },
        maestriaennutricionclinicaintegral: {
            text: [],
            sourceUrl: '',
        },
        maestriaenpsicologiaclinica: {
            text: [],
            sourceUrl: '',
        },
        maestriaenpsicologiadeltrabajo: {
            text: [],
            sourceUrl: '',
        },
        maestriaenquimicaclinicadiagnostica: {
            text: [],
            sourceUrl: '',
        },
        maestriaensaludmentaldelainfanciaylaadolescencia: {
            text: [],
            sourceUrl: '',
        },
        maestriaensaludyproduccionanimalsustentable: {
            text: [],
            sourceUrl: '',
        },
        maestriaensistemascomputacionales: {
            text: [],
            sourceUrl: '',
        },
        maestriaensistemasdeinformaciongestionytecnologia: {
            text: [],
            sourceUrl: '',
        },
        maestriaensoftwareembebido: {
            text: [],
            sourceUrl: '',
        },
        maestriaestudiosantropologicosensociedadescontemporaneas: {
            text: [],
            sourceUrl: '',
        },
        maestriaenartes: {
            text: [],
            sourceUrl: '',
        },
        maestriaenadministraciondeempresasparalasustentabilidad: {
            text: [],
            sourceUrl: '',
        },
        maestriaenadministracioneinnovaciondelturismo: {
            text: [],
            sourceUrl: '',
        },
        maestriaenadministracionengestionydesarrollodelaeducacion: {
            text: [],
            sourceUrl: '',
        },
        maestriaenadministracionypoliticaspublicas: {
            text: [],
            sourceUrl: '',
        },
        maestriaenbiociencias: {
            text: [],
            sourceUrl: '',
        },
        maestriaenbioetica: {
            text: [],
            sourceUrl: '',
        },
        maestriaenbiotecnologiaaplicada: {
            text: [],
            sourceUrl: '',
        },
        maestriaenbiotecnologiaproductiva: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaytecnologiadevacunasybioterapeuticos: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasdeingenieriaenmicroelectronica: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasdeingenieriaensistemasenergeticos: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasdelasalud: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasenadministraciondenegocios: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasenalimentos: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasenarquitecturayurbanismo: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasenbiomedicinamolecular: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasenbiomedicinaybiotecnologiamolecular: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasenbioprocesos: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasenbiotecnologiagenomica: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasenconservacionyaprovechamientoderecursosnaturales: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasendesarrollodeproductosbioticos: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasenestudiosambientalesydelasustentabilidad: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasenestudiosinterdisciplinariosparapequenasymedianasempresas:
            {
                text: [],
                sourceUrl: '',
            },
        maestriaencienciasenfarmacologia: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasenfisicaeducativa: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasengestionambiental: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaseningenieriaaeronauticayespacial: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaseningenieriaaeronauticaopcionmantenimientoyproduccion:
            {
                text: [],
                sourceUrl: '',
            },
        maestriaencienciaseningenieriadecomputo: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaseningenieriadesistemas: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaseningenieriadetelecomunicaciones: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaseningenieriaelectrica: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaseningenieriaelectronica: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaseningenieriaenproduccionmaslimpia: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaseningenieriamecanica: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaseningenieriametalurgica: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaseningenieriaquimica: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciaseninmunologia: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasenmanejoagroecologicodeplagasyenfermedades: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasenmanejoderecursosmarinos: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasenmatematicaeducativa: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasenmetodologiadelaciencia: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasenproduccionagricolasustentable: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasensaludocupacionalseguridadehigiene: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasensistemascomputacionalesmoviles: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasensistemasdigitales: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasentermofluidos: {
            text: [],
            sourceUrl: '',
        },
        maestriaencienciasfisicomatematicas: {
            text: [],
            sourceUrl: '',
        },
        maestriaenconservacionyrestauracionarquitectonica: {
            text: [],
            sourceUrl: '',
        },
        maestriaendocenciacientificaytecnologica: {
            text: [],
            sourceUrl: '',
        },
        maestriaeneconomiaygestionmunicipal: {
            text: [],
            sourceUrl: '',
        },
        maestriaengeocienciasyadministracionderecursosnaturales: {
            text: [],
            sourceUrl: '',
        },
        maestriaengestiondelainnovacion: {
            text: [],
            sourceUrl: '',
        },
        maestriaengestiondeproyectosparaeldesarrollosolidario: {
            text: [],
            sourceUrl: '',
        },
        maestriaeninformatica: {
            text: [],
            sourceUrl: '',
        },
        maestriaeningenieriacivil: {
            text: [],
            sourceUrl: '',
        },
        maestriaeningenieriadehidrocarburosysusenergeticosasociados: {
            text: [],
            sourceUrl: '',
        },
        maestriaeningenieriademanufactura: {
            text: [],
            sourceUrl: '',
        },
        maestriaeningenieriaenseguridadytecnologiasdelainformacion: {
            text: [],
            sourceUrl: '',
        },
        maestriaeningenieriaindustrial: {
            text: [],
            sourceUrl: '',
        },
        maestriaenintervencionpsicologica: {
            text: [],
            sourceUrl: '',
        },
        maestriaenrecursosnaturalesymedioambiente: {
            text: [],
            sourceUrl: '',
        },
        maestriaensostenibilidadeinnovacionentecnologiaambiental: {
            text: [],
            sourceUrl: '',
        },
        maestriaentecnologiaavanzada: {
            text: [],
            sourceUrl: '',
        },
        maestriaentecnologiadecomputo: {
            text: [],
            sourceUrl: '',
        },
    },
    phd: {
        doctoradoenantropologia: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenarquitectura: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenartesydiseno: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenastrofisica: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenbibliotecologiayestudiosdelainformacion: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciaeingenieriadelacomputacion: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciaeingenieriademateriales: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasfisica: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasbiologicas: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasbiomedicas: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasbioquimicas: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasdelaadministracion: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasdelaproduccionydelasaludanimal: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasdelasostenibilidad: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasdelatierra: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasdelmarylimnologia: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasmatematicas: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasmedicasodontologicasydelasalud: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciaspoliticasysociales: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasquimicas: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenderecho: {
            text: [],
            sourceUrl: '',
        },
        doctoradoeneconomia: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenenfermeria: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenestudiosdegenero: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenestudioslatinoamericanos: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenestudiosmesoamericanos: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenfilosofia: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenfilosofiadelaciencia: {
            text: [],
            sourceUrl: '',
        },
        doctoradoengeografia: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenhistoria: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenhistoriadelarte: {
            text: [],
            sourceUrl: '',
        },
        doctoradoeningenieria: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenletras: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenlinguistica: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenmusica: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenpedagogia: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenpsicologia: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenurbanismo: {
            text: [],
            sourceUrl: '',
        },
        doctoradoeningenieriaestructural: {
            text: [],
            sourceUrl: '',
        },
        doctoradoeningenieriadeprocesos: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenoptimizacion: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciaseingenieriaambientalesdemateriales: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasingenieriabiomedica: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasingenieriaquimica: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasquimica: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasytecnologiasdelainformacion: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenenergiaymedioambiente: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenbiologiaexperimental: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenbiotecnologia: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasagropecuarias: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasfarmaceuticas: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasensaludcolectiva: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasbiologicasydelasalud: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasnaturaleseingenieria: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenintervencionenlasorganizaciones: {
            text: [],
            sourceUrl: '',
        },
        doctoradoensociologia: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenhistoriografia: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciassocialesyhumanidades: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasantropologicas: {
            text: [],
            sourceUrl: '',
        },
        doctoradoeneconomiagestionypoliticasdeinnovacion: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenestudiosorganizacionales: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenestudiossociales: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenhumanidades: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciassociales: {
            text: [],
            sourceUrl: '',
        },
        doctoradoendesarrollorural: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenestudiosfeministas: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenpsicologiasocial: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciaseconomicas: {
            text: [],
            sourceUrl: '',
        },
        doctoradointegralencienciasadministrativas: {
            text: [],
            sourceUrl: '',
        },
        doctoradoendisenobioclimatico: {
            text: [],
            sourceUrl: '',
        },
        doctoradoendisenoydesarrollodeproductos: {
            text: [],
            sourceUrl: '',
        },
        doctoradoendisenoyestudiosurbanos: {
            text: [],
            sourceUrl: '',
        },
        doctoradoendisenoplanificacionyconservaciondepaisajesyjardines: {
            text: [],
            sourceUrl: '',
        },
        doctoradoendisenoparalarehabilitacionrecuperacionyconservaciondelpatrimonioconstruido:
            {
                text: [],
                sourceUrl: '',
            },
        doctoradoendisenoyvisualizaciondelainformacion: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenprocesosculturalesparaeldisenoyelarte: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasyartesparaeldiseno: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencienciasquimicobiologicas: {
            text: [],
            sourceUrl: '',
        },
        doctoradoencomunicacionesyelectronica: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenenergia: {
            text: [],
            sourceUrl: '',
        },
        doctoradoenfisicadelosmateriales: {
            text: [],
            sourceUrl: '',
        },
        doctoradoengestionypoliticadeinnovacion: {
            text: [],
            sourceUrl: '',
        },
        doctoradoeningenieriadesistemas: {
            text: [],
            sourceUrl: '',
        },
        doctoradoeningenieriadesistemasroboticosymecatronicos: {
            text: [],
            sourceUrl: '',
        },
        doctoradoeninnovacionenambienteslocales: {
            text: [],
            sourceUrl: '',
        },
        doctoradoeninvestigacionenmedicina: {
            text: [],
            sourceUrl: '',
        },
        doctoradoennanocienciasymicronanotecnologia: {
            text: [],
            sourceUrl: '',
        },
        doctoradoentecnologiaavanzada: {
            text: [],
            sourceUrl: '',
        },
    },
    esp: {
        especialidadencomputodealtorendimiento: {
            text: [],
            sourceUrl: '',
        },
        especialidadenestadisticaaplicada: {
            text: [],
            sourceUrl: '',
        },
        especialidadenestudiosdegenero: {
            text: [],
            sourceUrl: '',
        },
        especialidadenhistoriadelarte: {
            text: [],
            sourceUrl: '',
        },
        especialidadendisenoambiental: {
            text: [],
            sourceUrl: '',
        },
        especialidadendisenoplanificacionyconservaciondepaisajesyjardines: {
            text: [],
            sourceUrl: '',
        },
        especialidadeneconomiaygestiondelagua: {
            text: [],
            sourceUrl: '',
        },
        especialidadenetnografiapoliticayespaciopublico: {
            text: [],
            sourceUrl: '',
        },
        especialidadenliteraturamexicanadelsigloxx: {
            text: [],
            sourceUrl: '',
        },
        especialidadensociologiadeeducacionsuperior: {
            text: [],
            sourceUrl: '',
        },
        especialidadencienciasnaturaleseingenieria: {
            text: [],
            sourceUrl: '',
        },
        especialidadenacupunturayfitoterapia: {
            text: [],
            sourceUrl: '',
        },
        especialidadenbiotecnologia: {
            text: [],
            sourceUrl: '',
        },
        especialidadencienciasantropologicas: {
            text: [],
            sourceUrl: '',
        },
        especialidadenfisicamedicaclinica: {
            text: [],
            sourceUrl: '',
        },
        especialidadenpoliticasculturalesygestioncultural: {
            text: [],
            sourceUrl: '',
        },
        especialidadendesarrollorural: {
            text: [],
            sourceUrl: '',
        },
        especialidadenpoblacionysalud: {
            text: [],
            sourceUrl: '',
        },
        especialidaddeenfermeriaencuidadosintensivos: {
            text: [],
            sourceUrl: '',
        },
        especialidaddeenfermeriaengerontogeriatria: {
            text: [],
            sourceUrl: '',
        },
        especialidaddeenfermeriaperinatal: {
            text: [],
            sourceUrl: '',
        },
        especialidadenacupunturahumana: {
            text: [],
            sourceUrl: '',
        },
        especialidadenadministracionderiesgosfinancieros: {
            text: [],
            sourceUrl: '',
        },
        especialidadenanestesiologiaparalosserviciosruralesdesalud: {
            text: [],
            sourceUrl: '',
        },
        especialidadenfinanzas: {
            text: [],
            sourceUrl: '',
        },
        especialidadengeriatria: {
            text: [],
            sourceUrl: '',
        },
        especialidadengestiondeambientescosteros: {
            text: [],
            sourceUrl: '',
        },
        especialidadengestionestrategicadelainnovacionydelapropiedadindustrial:
            {
                text: [],
                sourceUrl: '',
            },
        especialidadenhematopatologia: {
            text: [],
            sourceUrl: '',
        },
        especialidadenimpuestos: {
            text: [],
            sourceUrl: '',
        },
        especialidadeningenieriamecanicaautomatizaciondeprocesosindustriales: {
            text: [],
            sourceUrl: '',
        },
        especialidadeningenieriamecanicaingenieriadeproyectomecanico: {
            text: [],
            sourceUrl: '',
        },
        especialidadeningenieriaparaeldesarrollodesistemasdemanufactura: {
            text: [],
            sourceUrl: '',
        },
        especialidadenlentesdecontacto: {
            text: [],
            sourceUrl: '',
        },
        especialidadenmanejonutriciodelaobesidadyelsindromemetabolico: {
            text: [],
            sourceUrl: '',
        },
        especialidadenmarketingestrategicoenlosnegocios: {
            text: [],
            sourceUrl: '',
        },
        especialidadenmedicinadelaactividadfisicayeldeporte: {
            text: [],
            sourceUrl: '',
        },
        especialidadenmedicinaforense: {
            text: [],
            sourceUrl: '',
        },
        especialidadennutricionyalimentosfuncionales: {
            text: [],
            sourceUrl: '',
        },
        especialidadenrestauracionarquitectonica: {
            text: [],
            sourceUrl: '',
        },
        especialidadenseguridadinformaticaytecnologiasdelainformacion: {
            text: [],
            sourceUrl: '',
        },
        especialidadentecnologiaavanzada: {
            text: [],
            sourceUrl: '',
        },
        especialidadenterapeuticahomeopatica: {
            text: [],
            sourceUrl: '',
        },
        especialidadenurgenciasmedicoquirurgicas: {
            text: [],
            sourceUrl: '',
        },
        especialidadenvaluacioninmobiliaria: {
            text: [],
            sourceUrl: '',
        },
        especialidadengestiondeinstitucioneseducativas: {
            text: [],
            sourceUrl: '',
        },
    },
    tsu: {},
    postdoc: {},
};
