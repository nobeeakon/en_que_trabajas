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
'Llevan a cabo una labor sumamente diversa y relacionada principalmente con: seguros y planes de beneficio, demografía, finanzas, computación, administración, estadística, investigación de operaciones, economía, docencia e investigación.'
            ],
            sourceUrl: 'https://oferta.unam.mx/actuaria.html',
        },
        administracion: {
            text: [],
            sourceUrl: '',
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
            text: [],
            sourceUrl: '',
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
            text: [],
            sourceUrl: '',
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
            text: [],
            sourceUrl: '',
        },
        cienciasdelacomunicacion: {
            text: [],
            sourceUrl: '',
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
            text: [],
            sourceUrl: '',
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
            text: [],
            sourceUrl: '',
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
            text: [],
            sourceUrl: '',
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
'Asimismo es el profesionista responsable de la creación de las estrategias para la implementación y la administración de Tecnologías de Información en la empresa, así como del mantenimiento de servicios tecnológicos y sistemas de tratamiento de la información de manera integral y eficiente.'
            ],
            sourceUrl: 'https://oferta.unam.mx/informatica.html',
        },
        ingenieriaaeroespacial: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaagricola: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaambiental: {
            text: [],
            sourceUrl: '',
        },
        ingenieriacivil: {
            text: [],
            sourceUrl: '',
        },
        ingenieriademinasymetalurgia: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaelectricayelectronica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaenalimentos: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaencomputacion: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaenenergiasrenovables: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaensistemasbiomedicos: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaentelecomunicaciones: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaentelecomunicacionessistemasyelectronica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriageofisica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriageologica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriageomatica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaindustrial: {
            text: [],
            sourceUrl: '',
        },
        ingenieriamecanica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriamecanicaelectrica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriamecatronica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriapetrolera: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaquimica: {
            text: [],
            sourceUrl: '',
        },
        ingenieriaquimicametalurgica: {
            text: [],
            sourceUrl: '',
        },
        instrumentista: {
            text: [],
            sourceUrl: '',
        },
        investigacionbiomedicabasica: {
            text: [],
            sourceUrl: '',
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
            text: [],
            sourceUrl: '',
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
            text: [],
            sourceUrl: '',
        },
        medicocirujano: {
            text: [],
            sourceUrl: '',
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
            text: [],
            sourceUrl: '',
        },
        neurociencias: {
            text: [],
            sourceUrl: '',
        },
        nutriologia: {
            text: [],
            sourceUrl: '',
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
            text: [],
            sourceUrl: '',
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
            text: [],
            sourceUrl: '',
        },
        quimica: {
            text: [],
            sourceUrl: '',
        },
        quimicadealimentos: {
            text: [],
            sourceUrl: '',
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
            text: [],
            sourceUrl: '',
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
            text: [],
            sourceUrl: '',
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
            text: [],
            sourceUrl: '',
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
