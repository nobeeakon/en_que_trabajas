import type { DegreeLevel } from '../../../db/types';

type DegreeInfo = {
    degreeLevel: DegreeLevel;
    normalizedDegreeName: string;
    name: string;
};

export const getSimilarDegrees = ({
    degreeLevel,
    normalizedDegreeName,
}: {
    degreeLevel: DegreeLevel;
    normalizedDegreeName: string;
}) => {
    if (
        !degreeRelations[degreeLevel] ||
        !degreeRelations[degreeLevel][normalizedDegreeName]
    ) {
        return undefined;
    }

    return degreeRelations[degreeLevel][normalizedDegreeName];
};

const degreeRelations: Record<DegreeLevel, Record<string, DegreeInfo[]>> = {
    tsu: {},
    lic: {
        administracion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracionfinanciera',
                name: 'Administración Financiera',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracionindustrial',
                name: 'Administración Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'administracionentecnologiasdeinformacion',
                name: 'Administración en Tecnologías de Información',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracionydesarrolloempresarial',
                name: 'Administración y Desarrollo Empresarial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciaspoliticasyadministracionpublica',
                name: 'Ciencias Políticas y Administración Pública',
            },
        ],
        administracionagropecuaria: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaagricola',
                name: 'Ingeniería Agrícola',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'planificacionparaeldesarrolloagropecuario',
                name: 'Planificación para el Desarrollo Agropecuario',
            },
        ],
        administraciondearchivosygestiondocumental: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'gestionpublicaygobierno',
                name: 'Gestión Pública y Gobierno',
            },
        ],
        antropologia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'sociologia',
                name: 'Sociología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'sociologiaaplicada',
                name: 'Sociologia Aplicada',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'estudiossocialesygestionlocal',
                name: 'Estudios Sociales y Gestión Local',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'antropologiasocial',
                name: 'Antropología Social',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenantropologia',
                name: 'Maestría en Antropología',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasantropologicas',
                name: 'Maestría en Ciencias Antropológicas',
            },
        ],
        arquitectura: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arquitecturadepaisaje',
                name: 'Arquitectura de Paisaje',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieroarquitecto',
                name: 'Ingeniero Arquitecto',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenarquitectura',
                name: 'Maestría en Arquitectura',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'urbanismo',
                name: 'Urbanismo',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenarquitectura',
                name: 'Doctorado en Arquitectura',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadenrestauracionarquitectonica',
                name: 'Especialidad en Restauración Arquitectónica',
            },
        ],
        arquitecturadepaisaje: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaendisenoplanificacionyconservaciondepaisajesyjardines',
                name: 'Maestría en Diseño, Planificación y Conservación de Paisajes y Jardines',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoendisenoplanificacionyconservaciondepaisajesyjardines',
                name: 'Doctorado en Diseño, Planificación y Conservación de Paisajes y Jardines',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadendisenoplanificacionyconservaciondepaisajesyjardines',
                name: 'Especialidad en Diseño, Planificación y Conservación de Paisajes y Jardines',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arquitectura',
                name: 'Arquitectura',
            },
        ],
        arteydiseno: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'historiadelarte',
                name: 'Historia del Arte',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'artesvisuales',
                name: 'Artes Visuales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arteycomunicaciondigitales',
                name: 'Arte y Comunicación Digitales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenartes',
                name: 'Maestría en Artes',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'artesvisualesconespecialidadenartesplasticas',
                name: 'Artes Visuales con Especialidad en Artes Plásticas',
            },
        ],
        artesvisuales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arteydiseno',
                name: 'Arte y Diseño',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenoycomunicacionvisual',
                name: 'Diseño y Comunicación Visual',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenartecontemporaneoyculturavisual',
                name: 'Maestría en Arte Contemporáneo y Cultura Visual',
            },
        ],
        bibliotecologiayestudiosdelainformacion: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenbibliotecologiayestudiosdelainformacion',
                name: 'Maestría en Bibliotecología y Estudios de la Información',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoenbibliotecologiayestudiosdelainformacion',
                name: 'Doctorado en Bibliotecología y Estudios de la Información',
            },
        ],
        biologia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'biologiaambiental',
                name: 'Biología Ambiental',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'biologiaexperimental',
                name: 'Biología Experimental',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'biologiamolecular',
                name: 'Biología Molecular',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'hidrobiologia',
                name: 'Hidrobiología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicafarmaceuticabiologica',
                name: 'Química Farmacéutica Biológica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'microbiologia',
                name: 'Microbiología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicofarmaceuticobiologo',
                name: 'Químico Farmacéutico Biólogo',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicafarmaceuticobiologica',
                name: 'Química Farmacéutico Biológica',
            },
        ],
        bioquimicadiagnostica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriabioquimica',
                name: 'Ingeniería Bioquímica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenquimicaclinicadiagnostica',
                name: 'Maestría en Química Clínica Diagnóstica',
            },
        ],
        canto: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'etnomusicologia',
                name: 'Etnomusicología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'composicionmusicalparamediosaudiovisualesyescenicos',
                name: 'Composición Musical para Medios Audiovisuales y Escénicos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'musica',
                name: 'Música',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'musicapopularcontemporanea',
                name: 'Música Popular Contemporánea',
            },
        ],
        cienciadelanutricionhumana: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'nutriologia',
                name: 'Nutriología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'nutricionhumana',
                name: 'Nutrición Humana',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'nutricion',
                name: 'Nutrición',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaennutricionclinicaintegral',
                name: 'Maestría en Nutrición Clínica Integral',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasdelanutricionhumana',
                name: 'Maestría en Ciencias de la Nutrición Humana',
            },
        ],
        cienciadematerialessustentables: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicaenmateriales',
                name: 'Ingeniería Química en Materiales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicaeingenieriaenmateriales',
                name: 'Química e Ingeniería en Materiales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ingenieriaennegociosenergeticossustentables',
                name: 'Ingeniería en Negocios Energéticos Sustentables',
            },
        ],
        cienciaforense: [
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidadenmedicinaforense',
                name: 'Especialidad en Medicina Forense',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'criminologia',
                name: 'Criminología',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenpoliticacriminal',
                name: 'Maestría en Política Criminal',
            },
        ],
        cienciasagroforestales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaagricola',
                name: 'Ingeniería Agrícola',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'planificacionparaeldesarrolloagropecuario',
                name: 'Planificación para el Desarrollo Agropecuario',
            },
        ],
        cienciasagrogenomicas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaagroindustrial',
                name: 'Ingeniería Agroindustrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenagrobiotecnologia',
                name: 'Ingeniería en Agrobiotecnología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenbiotecnologia',
                name: 'Ingeniería en Biotecnología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasgenomicas',
                name: 'Ciencias Genómicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenbiotecnologiagenomica',
                name: 'Maestría en Ciencias en Biotecnología Genómica',
            },
        ],
        cienciasambientales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'biologiaambiental',
                name: 'Biología Ambiental',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaambiental',
                name: 'Ingeniería Ambiental',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geografiaambiental',
                name: 'Geografía Ambiental',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaensistemasambientales',
                name: 'Ingeniería en Sistemas Ambientales',
            },
        ],
        cienciasdedatos: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciadedatos',
                name: 'Maestría en Ciencia de Datos',
            },
        ],
        cienciasdelacomputacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaencomputacion',
                name: 'Ingeniería en Computación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ingenieriaencomputacionytelecomunicaciones',
                name: 'Ingeniería en Computación y Telecomunicaciones',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaensistemascomputacionales',
                name: 'Ingeniería en Sistemas Computacionales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaentecnologiadecomputo',
                name: 'Maestría en Tecnología de Cómputo',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoencienciaeingenieriadelacomputacion',
                name: 'Doctorado en Ciencia e Ingeniería de la Computación',
            },
        ],
        cienciasdelacomunicacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'comunicacionyperiodismo',
                name: 'Comunicación y Periodismo',
            },
        ],
        cienciasdelatierra: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasdelatierra',
                name: 'Maestría en Ciencias de la Tierra',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageofisica',
                name: 'Ingeniería Geofísica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageologica',
                name: 'Ingeniería Geológica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageomatica',
                name: 'Ingeniería Geomática',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasgeotecnia',
                name: 'Maestría en Ciencias (Geotecnia)',
            },
        ],
        cienciasgenomicas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasagrogenomicas',
                name: 'Ciencias Agrogenómicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenbiotecnologiagenomica',
                name: 'Maestría en Ciencias en Biotecnología Genómica',
            },
        ],
        cienciaspoliticasyadministracionpublica: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenadministracionypoliticaspublicas',
                name: 'Maestría en Administración y Políticas Públicas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracion',
                name: 'Administración',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'politicaspublicas',
                name: 'Políticas Públicas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciapolitica',
                name: 'Ciencia Política',
            },
        ],
        cirujanodentista: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'odontologia',
                name: 'Odontología',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasmedicasodontologicasydelasalud',
                name: 'Maestría en Ciencias Médicas, Odontológicas y de la Salud',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasodontologicas',
                name: 'Maestría en Ciencias Odontológicas',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoencienciasmedicasodontologicasydelasalud',
                name: 'Doctorado en Ciencias Médicas, Odontológicas y de la Salud',
            },
        ],
        composicion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'composicionmusicalparamediosaudiovisualesyescenicos',
                name: 'Composición Musical para Medios Audiovisuales y Escénicos',
            },
        ],
        comunicacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'comunicacionyperiodismo',
                name: 'Comunicación y Periodismo',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencomunicacion',
                name: 'Maestría en Comunicación',
            },
        ],
        comunicacionyperiodismo: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'comunicacion',
                name: 'Comunicación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasdelacomunicacion',
                name: 'Ciencias de la Comunicación',
            },
        ],
        contaduria: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'contadorpublico',
                name: 'Contador Público',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'contaduriayfinanzaspublicas',
                name: 'Contaduría y Finanzas Públicas',
            },
        ],
        derecho: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenderecho',
                name: 'Maestría en Derecho',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenderechoshumanos',
                name: 'Maestría en Derechos Humanos',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenderecho',
                name: 'Doctorado en Derecho',
            },
        ],
        desarrollocomunitarioparaelenvejecimiento: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'trabajosocial',
                name: 'Trabajo Social',
            },
        ],
        desarrolloterritorial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'desarrolloygestioninterculturales',
                name: 'Desarrollo y Gestión Interculturales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaendesarrollorural',
                name: 'Maestría en Desarrollo Rural',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoendesarrollorural',
                name: 'Doctorado en Desarrollo Rural',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidadendesarrollorural',
                name: 'Especialidad en Desarrollo Rural',
            },
        ],
        desarrolloygestioninterculturales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'literaturaintercultural',
                name: 'Literatura Intercultural',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'estudiossocialesygestionlocal',
                name: 'Estudios Sociales y Gestión Local',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'politicaygestionsocial',
                name: 'Política y Gestión Social',
            },
        ],
        disenografico: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'diseno',
                name: 'Diseño',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arteydiseno',
                name: 'Arte y Diseño',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaendisenoycomunicacionvisual',
                name: 'Maestría en Diseño y Comunicación Visual',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'artesvisuales',
                name: 'Artes Visuales',
            },
        ],
        disenoindustrial: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaendisenoindustrial',
                name: 'Maestría en Diseño Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'diseno',
                name: 'Diseño',
            },
        ],
        disenoycomunicacionvisual: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'artesvisuales',
                name: 'Artes Visuales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'artesvisualesconespecialidadenartesplasticas',
                name: 'Artes Visuales con Especialidad en Artes Plásticas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenartesvisuales',
                name: 'Maestría en Artes Visuales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaendisenoyvisualizaciondelainformacion',
                name: 'Maestría en Diseño y Visualización de la Información',
            },
        ],
        ecologia: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenecologiaaplicada',
                name: 'Maestría en Ecología Aplicada',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'biologia',
                name: 'Biología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'biologiaambiental',
                name: 'Biología Ambiental',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasbiologicas',
                name: 'Maestría en Ciencias Biológicas',
            },
        ],
        economia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'economiaindustrial',
                name: 'Economía Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'economiaempresarial',
                name: 'Economía Empresarial',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaeneconomia',
                name: 'Maestría en Economía',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoeneconomia',
                name: 'Doctorado en Economía',
            },
        ],
        economiaindustrial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'economiaempresarial',
                name: 'Economía Empresarial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'economia',
                name: 'Economía',
            },
        ],
        educacionmusical: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'etnomusicologia',
                name: 'Etnomusicología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'musicaytecnologiaartistica',
                name: 'Música y Tecnología Artistica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'musica',
                name: 'Música',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'musicapopularcontemporanea',
                name: 'Música Popular Contemporánea',
            },
        ],
        enfermeria: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenenfermeria',
                name: 'Maestría en Enfermería',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenenfermeriadepracticaavanzada',
                name: 'Maestría en Enfermería de Práctica Avanzada',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasdeenfermeria',
                name: 'Maestría en Ciencias de Enfermería',
            },
        ],
        enfermeriayobstetricia: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenenfermeria',
                name: 'Maestría en Enfermería',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenenfermeriadepracticaavanzada',
                name: 'Maestría en Enfermería de Práctica Avanzada',
            },
        ],
        ensenanzadealemanespanolfrancesinglesoitalianocomolenguaextranjera: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'profesorasociadoenlaensenanzadelenguas',
                name: 'Profesor Asociado en la Enseñanza de Lenguas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguayliteraturasmodernasalemanas',
                name: 'Lengua y Literaturas Modernas Alemanas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguayliteraturasmodernasfrancesas',
                name: 'Lengua y Literaturas Modernas Francesas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguasmodernasdelfrances',
                name: 'Lenguas Modernas del Francés',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguayliteraturasmodernasinglesas',
                name: 'Lengua y Literaturas Modernas Inglesas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguasmodernasingles',
                name: 'Lenguas Modernas Inglés',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguayliteraturasmodernasitalianas',
                name: 'Lengua y Literaturas Modernas Italianas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguasmodernasenespanol',
                name: 'Lenguas Modernas en Español',
            },
        ],
        ensenanzadeingles: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguayliteraturasmodernasinglesas',
                name: 'Lengua y Literaturas Modernas Inglesas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguasmodernasingles',
                name: 'Lenguas Modernas Inglés',
            },
        ],
        estudioslatinoamericanos: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenestudioslatinoamericanos',
                name: 'Maestría en Estudios Latinoamericanos',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenestudioslatinoamericanos',
                name: 'Doctorado en Estudios Latinoamericanos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'sociologia',
                name: 'Sociología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'antropologiasocial',
                name: 'Antropología Social',
            },
        ],
        estudiossocialesygestionlocal: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'desarrollolocalyprofesionalasociadoendesarrollolocal',
                name: 'Desarrollo Local y Profesional Asociado en Desarrollo Local',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'sociologia',
                name: 'Sociología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'desarrolloygestioninterculturales',
                name: 'Desarrollo y Gestión Interculturales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'politicaygestionsocial',
                name: 'Política y Gestión Social',
            },
        ],
        etnomusicologia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'educacionmusical',
                name: 'Educación Musical',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'musica',
                name: 'Música',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'musicapopularcontemporanea',
                name: 'Música Popular Contemporánea',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenmusica',
                name: 'Doctorado en Música',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenmusica',
                name: 'Maestría en Música',
            },
        ],
        farmacia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriafarmaceutica',
                name: 'Ingeniería Farmacéutica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicofarmaceuticoindustrial',
                name: 'Quimico Farmacéutico Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicofarmaceuticobiologo',
                name: 'Químico Farmacéutico Biólogo',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicafarmaceuticabiologica',
                name: 'Química Farmacéutica Biológica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicafarmaceuticobiologica',
                name: 'Química Farmacéutico Biológica',
            },
        ],
        filosofia: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenfilosofia',
                name: 'Maestría en Filosofía',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenfilosofiadelaciencia',
                name: 'Maestría en Filosofía de la Ciencia',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenfilosofiacontemporaneaaplicada',
                name: 'Maestría en Filosofía Contemporánea Aplicada',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenfilosofia',
                name: 'Doctorado en Filosofía',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenfilosofiadelaciencia',
                name: 'Doctorado en Filosofía de la Ciencia',
            },
        ],
        fisica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'fisicabiomedica',
                name: 'Física Biomédica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriafisica',
                name: 'Ingeniería Física',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'fisicaymatematicas',
                name: 'Física y Matemáticas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenastrofisica',
                name: 'Maestría en Astrofísica',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenastrofisica',
                name: 'Doctorado en Astrofísica',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidadenfisicamedicaclinica',
                name: 'Especialidad en Física Médica Clínica',
            },
        ],
        fisicabiomedica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaensistemasbiomedicos',
                name: 'Ingeniería en Sistemas Biomédicos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriabiomedica',
                name: 'Ingeniería Biomédica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasingenieriabiomedica',
                name: 'Maestría en Ciencias (Ingeniería Biomédica)',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasfisicamedica',
                name: 'Maestría en Ciencias (Física Médica)',
            },
        ],
        fisioterapia: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasdelarehabilitacionenelmovimientohumano',
                name: 'Maestría en Ciencias de la Rehabilitación en el Movimiento Humano',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenrehabilitacionneurologica',
                name: 'Maestría en Rehabilitación Neurológica',
            },
        ],
        geociencias: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geografia',
                name: 'Geografía',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geografiaaplicada',
                name: 'Geografía Aplicada',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geohistoria',
                name: 'Geohistoria',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageofisica',
                name: 'Ingeniería Geofísica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageologica',
                name: 'Ingeniería Geológica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageomatica',
                name: 'Ingeniería Geomática',
            },
        ],
        geografia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geografiaaplicada',
                name: 'Geografía Aplicada',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geografiahumana',
                name: 'Geografía Humana',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geografiaambiental',
                name: 'Geografía Ambiental',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaengeografia',
                name: 'Maestría en Geografía',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoengeografia',
                name: 'Doctorado en Geografía',
            },
        ],
        geografiaaplicada: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geografia',
                name: 'Geografía',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geografiahumana',
                name: 'Geografía Humana',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geografiaambiental',
                name: 'Geografía Ambiental',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaengeografia',
                name: 'Maestría en Geografía',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoengeografia',
                name: 'Doctorado en Geografía',
            },
        ],
        geohistoria: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geografia',
                name: 'Geografía',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geografiahumana',
                name: 'Geografía Humana',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaengeografia',
                name: 'Maestría en Geografía',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'historia',
                name: 'Historia',
            },
        ],
        historia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geohistoria',
                name: 'Geohistoria',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'historiadelarte',
                name: 'Historia del Arte',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenhistoria',
                name: 'Maestría en Historia',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenhistoriadelarte',
                name: 'Maestría en Historia del Arte',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenhistoriografia',
                name: 'Maestría en Historiografía',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenhistoriografia',
                name: 'Doctorado en Historiografía',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenestudioshistoricos',
                name: 'Maestría en Estudios Históricos',
            },
        ],
        historiadelarte: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'artesvisuales',
                name: 'Artes Visuales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenhistoriadelarte',
                name: 'Maestría en Historia del Arte',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenhistoriadelarte',
                name: 'Doctorado en Historia del Arte',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidadenhistoriadelarte',
                name: 'Especialidad en Historia del Arte',
            },
        ],
        informatica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaeninformatica',
                name: 'Ingeniería en Informática',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasdelainformatica',
                name: 'Ciencias de la Informática',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaeninformatica',
                name: 'Maestría en Informática',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasytecnologiasdelainformacion',
                name: 'Maestría en Ciencias y Tecnologías de la Información',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaensistemascomputacionales',
                name: 'Ingeniería en Sistemas Computacionales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaencomputacion',
                name: 'Ingeniería en Computación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasdelacomputacion',
                name: 'Ciencias de la Computación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriadesoftware',
                name: 'Ingeniería de Software',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaensoftwareembebido',
                name: 'Maestría en Software Embebido',
            },
        ],
        ingenieriaaeroespacial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaaeronautica',
                name: 'Ingeniería Aeronáutica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseningenieriaaeronauticayespacial',
                name: 'Maestría en Ciencias en Ingeniería Aeronáutica y Espacial',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseningenieriaaeronauticaopcionmantenimientoyproduccion',
                name: 'Maestría en Ciencias en Ingeniería Aeronáutica, opción: mantenimiento y producción',
            },
        ],
        ingenieriaagricola: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'agronomia',
                name: 'Agronomía',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaagroindustrial',
                name: 'Ingeniería Agroindustrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenagrobiotecnologia',
                name: 'Ingeniería en Agrobiotecnología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'produccionagropecuariasustentable',
                name: 'Producción Agropecuaria Sustentable',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenmanejoagroecologicodeplagasyenfermedades',
                name: 'Maestría en Ciencias en Manejo Agroecológico de Plagas y Enfermedades',
            },
        ],
        ingenieriaambiental: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicaambiental',
                name: 'Ingeniería Química Ambiental',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaensistemasambientales',
                name: 'Ingeniería en Sistemas Ambientales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseingenieriaambientalesdemateriales',
                name: 'Maestría en Ciencias e Ingeniería (Ambientales, de Materiales)',
            },
        ],
        ingenieriacivil: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaeningenieriacivil',
                name: 'Maestría en Ingeniería Civil',
            },
        ],
        ingenieriademinasymetalurgia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageologica',
                name: 'Ingeniería Geológica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicametalurgica',
                name: 'Ingeniería Química Metalúrgica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriametalurgica',
                name: 'Ingeniería Metalúrgica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenmetalurgiaymateriales',
                name: 'Ingeniería en Metalurgia y Materiales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseningenieriametalurgica',
                name: 'Maestría en Ciencias en Ingeniería Metalúrgica',
            },
        ],
        ingenieriaelectricayelectronica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaelectrica',
                name: 'Ingeniería Eléctrica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaelectronica',
                name: 'Ingeniería Electrónica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaelectromecanica',
                name: 'Ingeniería Electromecánica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriamecanicaelectrica',
                name: 'Ingeniería Mecánica Eléctrica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciaseningenieriaelectrica',
                name: 'Maestría en Ciencias en Ingeniería Eléctrica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseningenieriaelectronica',
                name: 'Maestría en Ciencias en Ingeniería Electrónica',
            },
        ],
        ingenieriaenalimentos: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicadealimentos',
                name: 'Química de Alimentos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciaytecnologiadealimentos',
                name: 'Ciencia y Tecnología de Alimentos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriadelosalimentos',
                name: 'Ingeniería de los Alimentos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicaenalimentos',
                name: 'Ingeniería Química en Alimentos',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasenalimentos',
                name: 'Maestría en Ciencias en Alimentos',
            },
        ],
        ingenieriaencomputacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriadesoftware',
                name: 'Ingeniería de Software',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'computacion',
                name: 'Computación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasdelacomputacion',
                name: 'Ciencias de la Computación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaensistemascomputacionales',
                name: 'Ingeniería en Sistemas Computacionales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasdelacomputacion',
                name: 'Maestría en Ciencias de la Computación',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaentecnologiadecomputo',
                name: 'Maestría en Tecnología de Cómputo',
            },
        ],
        ingenieriaenenergiasrenovables: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenenergia',
                name: 'Ingeniería en Energía',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenenergiaymedioambiente',
                name: 'Maestría en Energía y Medio Ambiente',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenenergia',
                name: 'Doctorado en Energía',
            },
        ],
        ingenieriaensistemasbiomedicos: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'fisicabiomedica',
                name: 'Física Biomédica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriabiomedica',
                name: 'Ingeniería Biomédica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriabionica',
                name: 'Ingeniería Biónica',
            },
        ],
        ingenieriaentelecomunicaciones: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ingenieriaentelecomunicacionessistemasyelectronica',
                name: 'Ingeniería en Telecomunicaciones, Sistemas y Electrónica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ingenieriaencomputacionytelecomunicaciones',
                name: 'Ingeniería en Computación y Telecomunicaciones',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaentelecomunicacionesyredes',
                name: 'Ingeniería en Telecomunicaciones y Redes',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseningenieriadetelecomunicaciones',
                name: 'Maestría en Ciencias en Ingeniería de Telecomunicaciones',
            },
        ],
        ingenieriaentelecomunicacionessistemasyelectronica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaentelecomunicaciones',
                name: 'Ingeniería en Telecomunicaciones',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ingenieriaencomputacionytelecomunicaciones',
                name: 'Ingeniería en Computación y Telecomunicaciones',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaentelecomunicacionesyredes',
                name: 'Ingeniería en Telecomunicaciones y Redes',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriatelematica',
                name: 'Ingeniería Telemática',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseningenieriadetelecomunicaciones',
                name: 'Maestría en Ciencias en Ingeniería de Telecomunicaciones',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaelectronica',
                name: 'Ingeniería Electrónica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaencomunicacionesyelectronica',
                name: 'Ingeniería en Comunicaciones y Electrónica',
            },
        ],
        ingenieriageofisica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageologica',
                name: 'Ingeniería Geológica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageomatica',
                name: 'Ingeniería Geomática',
            },
        ],
        ingenieriageologica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageomatica',
                name: 'Ingeniería Geomática',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageofisica',
                name: 'Ingeniería Geofísica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geociencias',
                name: 'Geociencias',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriademinasymetalurgia',
                name: 'Ingeniería de Minas y Metalurgia',
            },
        ],
        ingenieriageomatica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageofisica',
                name: 'Ingeniería Geofísica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageologica',
                name: 'Ingeniería Geológica',
            },
        ],
        ingenieriaindustrial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicaindustrial',
                name: 'Química Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ingenieriaensistemasmecatronicosindustriales',
                name: 'Ingeniería en Sistemas Mecatrónicos Industriales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenroboticaindustrial',
                name: 'Ingeniería en Robótica Industrial',
            },
        ],
        ingenieriamecanica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriamecanicaelectrica',
                name: 'Ingeniería Mecánica Eléctrica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaelectromecanica',
                name: 'Ingeniería Electromecánica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriamecanicayautomotriz',
                name: 'Ingeniería Mecánica y Automotriz',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciaseningenieriamecanica',
                name: 'Maestría en Ciencias en Ingeniería Mecánica',
            },
        ],
        ingenieriamecanicaelectrica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaelectricayelectronica',
                name: 'Ingeniería Eléctrica y Electrónica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaelectrica',
                name: 'Ingeniería Eléctrica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaelectronica',
                name: 'Ingeniería Electrónica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaelectromecanica',
                name: 'Ingeniería Electromecánica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaencomunicacionesyelectronica',
                name: 'Ingeniería en Comunicaciones y Electrónica',
            },
        ],
        ingenieriamecatronica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaelectromecanica',
                name: 'Ingeniería Electromecánica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ingenieriaensistemasmecatronicosindustriales',
                name: 'Ingeniería en Sistemas Mecatrónicos Industriales',
            },
        ],
        ingenieriapetrolera: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriademinasymetalurgia',
                name: 'Ingeniería de Minas y Metalurgia',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicapetrolera',
                name: 'Ingeniería Química Petrolera',
            },
        ],
        ingenieriaquimica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimica',
                name: 'Química',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicaindustrial',
                name: 'Química Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicapetrolera',
                name: 'Ingeniería Química Petrolera',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicaindustrial',
                name: 'Ingeniería Química Industrial',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciaseningenieriaquimica',
                name: 'Maestría en Ciencias en Ingeniería Química',
            },
        ],
        ingenieriaquimicametalurgica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriademinasymetalurgia',
                name: 'Ingeniería de Minas y Metalurgia',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriametalurgica',
                name: 'Ingeniería Metalúrgica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenmetalurgiaymateriales',
                name: 'Ingeniería en Metalurgia y Materiales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseningenieriametalurgica',
                name: 'Maestría en Ciencias en Ingeniería Metalúrgica',
            },
        ],
        instrumentista: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'etnomusicologia',
                name: 'Etnomusicología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'musica',
                name: 'Música',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenmusica',
                name: 'Maestría en Música',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenmusica',
                name: 'Doctorado en Música',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'musicaytecnologiaartistica',
                name: 'Música y Tecnología Artistica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'canto',
                name: 'Canto',
            },
        ],
        investigacionbiomedicabasica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'fisicabiomedica',
                name: 'Física Biomédica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriabiomedica',
                name: 'Ingeniería Biomédica',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasbiomedicas',
                name: 'Doctorado en Ciencias Biomédicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasenbiomedicina',
                name: 'Maestría en Ciencias en Biomedicina',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenbiomedicinamolecular',
                name: 'Maestría en Ciencias en Biomedicina Molecular',
            },
        ],
        lenguayliteraturashispanicas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguasmodernasenespanol',
                name: 'Lenguas Modernas en Español',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ensenanzadealemanespanolfrancesinglesoitalianocomolenguaextranjera',
                name: 'Enseñanza de (Alemán; Español; Francés; Inglés o Italiano) como Lengua Extranjera',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenlinguisticahispanica',
                name: 'Maestría en Lingüística Hispánica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'letrashispanicas',
                name: 'Letras Hispánicas',
            },
        ],
        lenguayliteraturasmodernasalemanas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ensenanzadealemanespanolfrancesinglesoitalianocomolenguaextranjera',
                name: 'Enseñanza de (Alemán; Español; Francés; Inglés o Italiano) como Lengua Extranjera',
            },
        ],
        lenguayliteraturasmodernasfrancesas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ensenanzadealemanespanolfrancesinglesoitalianocomolenguaextranjera',
                name: 'Enseñanza de (Alemán; Español; Francés; Inglés o Italiano) como Lengua Extranjera',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguasmodernasdelfrances',
                name: 'Lenguas Modernas del Francés',
            },
        ],
        lenguayliteraturasmodernasinglesas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ensenanzadealemanespanolfrancesinglesoitalianocomolenguaextranjera',
                name: 'Enseñanza de (Alemán; Español; Francés; Inglés o Italiano) como Lengua Extranjera',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ensenanzadeingles',
                name: 'Enseñanza de Inglés',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguasmodernasingles',
                name: 'Lenguas Modernas Inglés',
            },
        ],
        lenguayliteraturasmodernasitalianas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ensenanzadealemanespanolfrancesinglesoitalianocomolenguaextranjera',
                name: 'Enseñanza de (Alemán; Español; Francés; Inglés o Italiano) como Lengua Extranjera',
            },
        ],
        lenguayliteraturasmodernasportuguesas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ensenanzadealemanespanolfrancesinglesoitalianocomolenguaextranjera',
                name: 'Enseñanza de (Alemán; Español; Francés; Inglés o Italiano) como Lengua Extranjera',
            },
        ],
        letrasclasicas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'letrashispanicas',
                name: 'Letras Hispánicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenletras',
                name: 'Maestría en Letras',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenletras',
                name: 'Doctorado en Letras',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'estudiosliterarios',
                name: 'Estudios Literarios',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenliteraturamexicanacontemporanea',
                name: 'Maestría en Literatura Mexicana Contemporánea',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenensenanzaenestudiosliterarios',
                name: 'Maestría en Enseñanza en Estudios Literarios',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadenliteraturamexicanadelsigloxx',
                name: 'Especialidad en Literatura Mexicana del Siglo XX',
            },
        ],
        linguisticaaplicada: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'linguistica',
                name: 'Lingüística',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenlinguisticaaplicada',
                name: 'Maestría en Lingüística Aplicada',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenlinguisticahispanica',
                name: 'Maestría en Lingüística Hispánica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenlinguistica',
                name: 'Maestría en Lingüística',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenlinguistica',
                name: 'Doctorado en Lingüística',
            },
        ],
        literaturadramaticayteatro: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'teatroyactuacion',
                name: 'Teatro y Actuación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'actuacion',
                name: 'Actuación',
            },
        ],
        literaturaintercultural: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguayliteraturashispanicas',
                name: 'Lengua y Literaturas Hispánicas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguayliteraturasmodernasalemanas',
                name: 'Lengua y Literaturas Modernas Alemanas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguayliteraturasmodernasfrancesas',
                name: 'Lengua y Literaturas Modernas Francesas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguayliteraturasmodernasinglesas',
                name: 'Lengua y Literaturas Modernas Inglesas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguayliteraturasmodernasitalianas',
                name: 'Lengua y Literaturas Modernas Italianas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguayliteraturasmodernasportuguesas',
                name: 'Lengua y Literaturas Modernas Portuguesas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'estudiosliterarios',
                name: 'Estudios Literarios',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'literaturadramaticayteatro',
                name: 'Literatura Dramática y Teatro',
            },
        ],
        manejosustentabledezonascosteras: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenmanejoderecursosmarinos',
                name: 'Maestría en Ciencias en Manejo de Recursos Marinos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenodeproyectossustentables',
                name: 'Diseño de Proyectos Sustentables',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'turismosustentable',
                name: 'Turismo Sustentable',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaensociedadessustentables',
                name: 'Maestría en Sociedades Sustentables',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadengestiondeambientescosteros',
                name: 'Especialidad en Gestión de Ambientes Costeros',
            },
        ],
        matematicas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicasaplicadas',
                name: 'Matemáticas Aplicadas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicasaplicadasycomputacion',
                name: 'Matemáticas Aplicadas y Computación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicasparaeldesarrollo',
                name: 'Matemáticas para el Desarrollo',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriamatematica',
                name: 'Ingeniería Matemática',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'fisicaymatematicas',
                name: 'Física y Matemáticas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicaalgoritmica',
                name: 'Matemática Algorítmica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasmatematicas',
                name: 'Maestría en Ciencias Matemáticas',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasmatematicas',
                name: 'Doctorado en Ciencias Matemáticas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasingenieriamatematica',
                name: 'Maestría en Ciencias (Ingeniería Matemática)',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenaprendizajedelalenguaylasmatematicas',
                name: 'Maestría en Aprendizaje de la Lengua y las Matemáticas',
            },
        ],
        matematicasaplicadas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicas',
                name: 'Matemáticas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'fisicaymatematicas',
                name: 'Física y Matemáticas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicaalgoritmica',
                name: 'Matemática Algorítmica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasmatematicas',
                name: 'Maestría en Ciencias Matemáticas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicasaplicadasycomputacion',
                name: 'Matemáticas Aplicadas y Computación',
            },
        ],
        matematicasaplicadasycomputacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicasaplicadas',
                name: 'Matemáticas Aplicadas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicas',
                name: 'Matemáticas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicasparaeldesarrollo',
                name: 'Matemáticas para el Desarrollo',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriamatematica',
                name: 'Ingeniería Matemática',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'fisicaymatematicas',
                name: 'Física y Matemáticas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicaalgoritmica',
                name: 'Matemática Algorítmica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasdelacomputacion',
                name: 'Ciencias de la Computación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'computacion',
                name: 'Computación',
            },
        ],
        matematicasparaeldesarrollo: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicasaplicadas',
                name: 'Matemáticas Aplicadas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'fisicaymatematicas',
                name: 'Física y Matemáticas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicaalgoritmica',
                name: 'Matemática Algorítmica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasmatematicas',
                name: 'Maestría en Ciencias Matemáticas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicasaplicadasycomputacion',
                name: 'Matemáticas Aplicadas y Computación',
            },
        ],
        medicinaveterinariayzootecnia: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenmedicinaveterinariayzootecnia',
                name: 'Maestría en Medicina Veterinaria y Zootecnia',
            },
        ],
        medicocirujano: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'medicina',
                name: 'Medicina',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'medicinageneral',
                name: 'Medicina General',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'medicocirujanohomeopata',
                name: 'Médico Cirujano Homeópata',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'medicocirujanopartero',
                name: 'Médico Cirujano Partero',
            },
        ],
        musicaytecnologiaartistica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'artesvisuales',
                name: 'Artes Visuales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arteycomunicaciondigitales',
                name: 'Arte y Comunicación Digitales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'musica',
                name: 'Música',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'composicionmusicalparamediosaudiovisualesyescenicos',
                name: 'Composición Musical para Medios Audiovisuales y Escénicos',
            },
        ],
        nanotecnologia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'tecnologia',
                name: 'Tecnología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaennanotecnologia',
                name: 'Ingeniería en Nanotecnología',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasnanotecnologia',
                name: 'Maestría en Ciencias (Nanotecnología)',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoennanocienciasymicronanotecnologia',
                name: 'Doctorado en Nanociencias y Micro-Nanotecnología',
            },
        ],
        negociosinternacionales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'relacionesinternacionales',
                name: 'Relaciones Internacionales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'negociosycomerciointernacional',
                name: 'Negocios y Comercio Internacional',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'comerciointernacional',
                name: 'Comercio Internacional',
            },
        ],
        neurociencias: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasenneurometabolismo',
                name: 'Maestría en Ciencias en Neurometabolismo',
            },
        ],
        nutriologia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciadelanutricionhumana',
                name: 'Ciencia de la Nutrición Humana',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'nutricionhumana',
                name: 'Nutrición Humana',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaennutricionclinicaintegral',
                name: 'Maestría en Nutrición Clínica Integral',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadenmanejonutriciodelaobesidadyelsindromemetabolico',
                name: 'Especialidad en Manejo Nutricio de la Obesidad y el Síndrome Metabólico',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadennutricionyalimentosfuncionales',
                name: 'Especialidad en Nutrición y Alimentos Funcionales',
            },
        ],
        odontologia: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasmedicasodontologicasydelasalud',
                name: 'Maestría en Ciencias Médicas, Odontológicas y de la Salud',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasodontologicas',
                name: 'Maestría en Ciencias Odontológicas',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoencienciasmedicasodontologicasydelasalud',
                name: 'Doctorado en Ciencias Médicas, Odontológicas y de la Salud',
            },
        ],
        pedagogia: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenpedagogia',
                name: 'Maestría en Pedagogía',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenpedagogia',
                name: 'Doctorado en Pedagogía',
            },
        ],
        piano: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'canto',
                name: 'Canto',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'educacionmusical',
                name: 'Educación Musical',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'musica',
                name: 'Música',
            },
        ],
        planificacionparaeldesarrolloagropecuario: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracionagropecuaria',
                name: 'Administración Agropecuaria',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'agronomia',
                name: 'Agronomía',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'desarrolloterritorial',
                name: 'Desarrollo Territorial',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoendesarrollorural',
                name: 'Doctorado en Desarrollo Rural',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaendesarrollorural',
                name: 'Maestría en Desarrollo Rural',
            },
        ],
        psicologia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologiasocial',
                name: 'Psicología Social',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologiabiomedica',
                name: 'Psicología Biomédica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologiadeltrabajo',
                name: 'Psicología del Trabajo',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologiaeducativa',
                name: 'Psicología Educativa',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenpsicologia',
                name: 'Maestría en Psicología',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenpsicologiadeltrabajo',
                name: 'Maestría en Psicología del Trabajo',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenintervencionpsicologica',
                name: 'Maestría en Intervención Psicológica',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenpsicologia',
                name: 'Doctorado en Psicología',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenpsicologiasocial',
                name: 'Doctorado en Psicología Social',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenpsicologiaclinica',
                name: 'Maestría en Psicología Clínica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenpsicologiasocialdegruposeinstituciones',
                name: 'Maestría en Psicología Social de Grupos e Instituciones',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenpsicologiasocial',
                name: 'Maestría en Psicología Social',
            },
        ],
        quimica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimica',
                name: 'Ingeniería Química',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicaindustrial',
                name: 'Química Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriabioquimicaindustrial',
                name: 'Ingeniería Bioquímica Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriabioquimica',
                name: 'Ingeniería Bioquímica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicaindustrial',
                name: 'Ingeniería Química Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicapetrolera',
                name: 'Ingeniería Química Petrolera',
            },
        ],
        quimicadealimentos: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenalimentos',
                name: 'Ingeniería en Alimentos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciaytecnologiadealimentos',
                name: 'Ciencia y Tecnología de Alimentos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriadelosalimentos',
                name: 'Ingeniería de los Alimentos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicaenalimentos',
                name: 'Ingeniería Química en Alimentos',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciaytecnologiadealimentos',
                name: 'Maestría en Ciencia y Tecnología de Alimentos',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasenalimentos',
                name: 'Maestría en Ciencias en Alimentos',
            },
        ],
        quimicaeingenieriaenmateriales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicaenmateriales',
                name: 'Ingeniería Química en Materiales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciadematerialessustentables',
                name: 'Ciencia de Materiales Sustentables',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenmetalurgiaymateriales',
                name: 'Ingeniería en Metalurgia y Materiales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaeingenieriademateriales',
                name: 'Maestría en Ciencia e Ingeniería de Materiales',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoencienciaeingenieriademateriales',
                name: 'Doctorado en Ciencia e Ingeniería de Materiales',
            },
        ],
        quimicafarmaceuticobiologica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriafarmaceutica',
                name: 'Ingeniería Farmacéutica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'farmacia',
                name: 'Farmacia',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicofarmaceuticoindustrial',
                name: 'Quimico Farmacéutico Industrial',
            },
        ],
        quimicaindustrial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicaindustrial',
                name: 'Ingeniería Química Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicofarmaceuticoindustrial',
                name: 'Quimico Farmacéutico Industrial',
            },
        ],
        relacionesinternacionales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'negociosinternacionales',
                name: 'Negocios Internacionales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'negociosycomerciointernacional',
                name: 'Negocios y Comercio Internacional',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenrelacionesinternacionales',
                name: 'Maestría en Relaciones Internacionales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenestudiosenrelacionesinternacionales',
                name: 'Maestría en Estudios en Relaciones Internacionales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenestrategiadenegociosinternacionales',
                name: 'Maestría en Estrategia de Negocios Internacionales',
            },
        ],
        sociologia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'antropologiasocial',
                name: 'Antropología Social',
            },
        ],
    },
    msc: {},
    phd: {},
    esp: {},
    postdoc: {},
};
