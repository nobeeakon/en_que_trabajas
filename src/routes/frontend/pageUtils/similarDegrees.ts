import type { DegreeLevel } from '../../../db/types';
import { CANONICAL_URL } from '../headerUtil';

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

// this is just a temporary helper method
export const getPagesWithSimilarDegreesInfo = () => {
    const pages: string[] = [];

    Object.entries(degreeRelations).forEach(
        ([degreeLevelItem, degreeInfoItem]) => {
            Object.keys(degreeInfoItem).forEach((normalizedDegreeNameItem) => {
                const page = `${CANONICAL_URL}/${degreeLevelItem}/${normalizedDegreeNameItem}`;
                pages.push(page);
            });
        }
    );

    return pages;
};

const degreeRelations: Record<DegreeLevel, Record<string, DegreeInfo[]>> = {
    postdoc: {},
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
        sociologiaaplicada: [
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
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'politicaygestionsocial',
                name: 'Política y Gestión Social',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'estudiossocioterritoriales',
                name: 'Estudios Socioterritoriales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciassociales',
                name: 'Maestría en Ciencias Sociales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaensociologia',
                name: 'Maestría en Sociología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologiasocial',
                name: 'Psicología Social',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'estudiossocialesygestionlocal',
                name: 'Estudios Sociales y Gestión Local',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'trabajosocial',
                name: 'Trabajo Social',
            },
        ],
        teatroyactuacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'actuacion',
                name: 'Actuación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'composicionmusicalparamediosaudiovisualesyescenicos',
                name: 'Composición Musical para Medios Audiovisuales y Escénicos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'literaturadramaticayteatro',
                name: 'Literatura Dramática y Teatro',
            },
        ],
        tecnologia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'musicaytecnologiaartistica',
                name: 'Música y Tecnología Artistica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciaytecnologiadealimentos',
                name: 'Ciencia y Tecnología de Alimentos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'tecnologiasparalainformacionenciencias',
                name: 'Tecnologías para la Información en Ciencias',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'educacionytecnologiasdigitales',
                name: 'Educación y Tecnologías Digitales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'tecnologiasysistemasdeinformacion',
                name: 'Tecnologías y Sistemas de Información',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriabiotecnologica',
                name: 'Ingeniería Biotecnológica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasytecnologiasdelainformacion',
                name: 'Maestría en Ciencias y Tecnologías de la Información',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaentecnologiaavanzada',
                name: 'Maestría en Tecnología Avanzada',
            },
        ],
        tecnologiasparalainformacionenciencias: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'informatica',
                name: 'Informática',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'tecnologiasysistemasdeinformacion',
                name: 'Tecnologías y Sistemas de Información',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaeninformatica',
                name: 'Ingeniería en Informática',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'bibliotecologiayestudiosdelainformacion',
                name: 'Bibliotecología y Estudios de la información',
            },
        ],
        trabajosocial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'comunicacionsocial',
                name: 'Comunicación Social',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'estudiossocialesygestionlocal',
                name: 'Estudios Sociales y Gestión Local',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'desarrollolocalyprofesionalasociadoendesarrollolocal',
                name: 'Desarrollo Local y Profesional Asociado en Desarrollo Local',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaentrabajosocial',
                name: 'Maestría en Trabajo Social',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenestudiosmultidisciplinariossobreeltrabajo',
                name: 'Maestría en Estudios Multidisciplinarios Sobre el Trabajo',
            },
        ],
        traduccion: [
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
                normalizedDegreeName: 'lenguasmodernasdelfrances',
                name: 'Lenguas Modernas del Francés',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguasmodernasenespanol',
                name: 'Lenguas Modernas en Español',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguasmodernasingles',
                name: 'Lenguas Modernas Inglés',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ensenanzadealemanespanolfrancesinglesoitalianocomolenguaextranjera',
                name: 'Enseñanza de (Alemán; Español; Francés; Inglés o Italiano) como Lengua Extranjera',
            },
        ],
        turismoydesarrollosostenible: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasdelasostenibilidad',
                name: 'Maestría en Ciencias de la Sostenibilidad',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasdelasostenibilidad',
                name: 'Doctorado en Ciencias de la Sostenibilidad',
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
                degreeLevel: 'lic',
                normalizedDegreeName: 'manejosustentabledezonascosteras',
                name: 'Manejo Sustentable de Zonas Costeras',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'turismo',
                name: 'Turismo',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'negociosturisticos',
                name: 'Negocios Turísticos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'gestiondelturismoculturalynatural',
                name: 'Gestión del Turismo Cultural y Natural',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenadministracioneinnovaciondelturismo',
                name: 'Maestría en Administración e Innovación del Turismo',
            },
        ],
        urbanismo: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arquitectura',
                name: 'Arquitectura',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arquitecturadepaisaje',
                name: 'Arquitectura de Paisaje',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenarquitecturayurbanismo',
                name: 'Maestría en Ciencias en Arquitectura y Urbanismo',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenurbanismo',
                name: 'Maestría en Urbanismo',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenmovilidadurbana',
                name: 'Ingeniería en Movilidad Urbana',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaendisenoyestudiosurbanos',
                name: 'Maestría en Diseño y Estudios Urbanos',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenurbanismo',
                name: 'Doctorado en Urbanismo',
            },
        ],
        agronomia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasagroforestales',
                name: 'Ciencias Agroforestales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracionagropecuaria',
                name: 'Administración Agropecuaria',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasagrogenomicas',
                name: 'Ciencias Agrogenómicas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaagroindustrial',
                name: 'Ingeniería Agroindustrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaagricola',
                name: 'Ingeniería Agrícola',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenproduccionagricolasustentable',
                name: 'Maestría en Ciencias en Producción Agrícola Sustentable',
            },
        ],
        antropologiasocial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'antropologia',
                name: 'Antropología',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenantropologia',
                name: 'Maestría en Antropología',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenantropologia',
                name: 'Doctorado en Antropología',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasantropologicas',
                name: 'Maestría en Ciencias Antropológicas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'sociologia',
                name: 'Sociología',
            },
        ],
        arteycomunicaciondigitales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arteydiseno',
                name: 'Arte y Diseño',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'artesvisuales',
                name: 'Artes Visuales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencomunicacionyculturadigital',
                name: 'Maestría en Comunicación y Cultura Digital',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'comunicacion',
                name: 'Comunicación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenoycomunicacionvisual',
                name: 'Diseño y Comunicación Visual',
            },
        ],
        biologiaambiental: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'biologia',
                name: 'Biología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'hidrobiologia',
                name: 'Hidrobiología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasambientales',
                name: 'Ciencias Ambientales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ecologia',
                name: 'Ecología',
            },
        ],
        biologiaexperimental: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenbiologiaexperimental',
                name: 'Maestría en Biología Experimental',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenbiologiaexperimental',
                name: 'Doctorado en Biología Experimental',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'biologia',
                name: 'Biología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriabiologica',
                name: 'Ingeniería Biológica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicofarmaceuticobiologo',
                name: 'Químico Farmacéutico Biólogo',
            },
        ],
        biologiamolecular: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenbiomedicinamolecular',
                name: 'Maestría en Ciencias en Biomedicina Molecular',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'biologia',
                name: 'Biología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'biologiaexperimental',
                name: 'Biología Experimental',
            },
        ],
        cienciaytecnologiadealimentos: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenalimentos',
                name: 'Ingeniería en Alimentos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicadealimentos',
                name: 'Química de Alimentos',
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
        ],
        cienciasatmosfericas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasambientales',
                name: 'Ciencias Ambientales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaambiental',
                name: 'Ingeniería Ambiental',
            },
        ],
        cienciapolitica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'politicaspublicas',
                name: 'Políticas Públicas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'politicaygestionsocial',
                name: 'Política y Gestión Social',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciaspoliticasyadministracionpublica',
                name: 'Ciencias Políticas y Administración Pública',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenpoliticaspublicas',
                name: 'Maestría en Políticas Públicas',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciaspoliticasysociales',
                name: 'Doctorado en Ciencias Políticas y Sociales',
            },
        ],
        computacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'informatica',
                name: 'Informática',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'tecnologiasysistemasdeinformacion',
                name: 'Tecnologías y Sistemas de Información',
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
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaeninformatica',
                name: 'Ingeniería en Informática',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasdelacomputacion',
                name: 'Ciencias de la Computación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaencomputacion',
                name: 'Ingeniería en Computación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicasaplicadasycomputacion',
                name: 'Matemáticas Aplicadas y Computación',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidadencomputodealtorendimiento',
                name: 'Especialidad en Cómputo de Alto Rendimiento',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaentecnologiadecomputo',
                name: 'Maestría en Tecnología de Cómputo',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaensistemascomputacionales',
                name: 'Maestría en Sistemas Computacionales',
            },
        ],
        comunicacionsocial: [
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
        diseno: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arteydiseno',
                name: 'Arte y Diseño',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenografico',
                name: 'Diseño Gráfico',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenoindustrial',
                name: 'Diseño Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenoycomunicacionvisual',
                name: 'Diseño y Comunicación Visual',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaendisenoeinnovacion',
                name: 'Maestría en Diseño e Innovación',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenartesydiseno',
                name: 'Doctorado en Artes y Diseño',
            },
        ],
        disenodelacomunicaciongrafica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenografico',
                name: 'Diseño Gráfico',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'diseno',
                name: 'Diseño',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaendocenciaenartesydiseno',
                name: 'Maestría en Docencia en Artes y Diseño',
            },
        ],
        disenodeproyectossustentables: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'turismosustentable',
                name: 'Turismo Sustentable',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'desarrollohumanoparalasustentabilidad',
                name: 'Desarrollo Humano para la Sustentabilidad',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ingenieriaennegociosenergeticossustentables',
                name: 'Ingeniería en Negocios Energéticos Sustentables',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'turismoydesarrollosostenible',
                name: 'Turismo y Desarrollo Sostenible',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaensostenibilidadeinnovacionentecnologiaambiental',
                name: 'Maestría en Sostenibilidad e Innovación en Tecnología Ambiental',
            },
        ],
        educacionytecnologiasdigitales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'innovacionygestioneducativa',
                name: 'Innovación y Gestión Educativa',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'pedagogia',
                name: 'Pedagogía',
            },
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
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'tecnologiasysistemasdeinformacion',
                name: 'Tecnologías y Sistemas de Información',
            },
        ],
        estomatologia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cirujanodentista',
                name: 'Cirujano Dentista',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'odontologia',
                name: 'Odontología',
            },
        ],
        estudiossocioterritoriales: [
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
                normalizedDegreeName:
                    'desarrollolocalyprofesionalasociadoendesarrollolocal',
                name: 'Desarrollo Local y Profesional Asociado en Desarrollo Local',
            },
        ],
        geografiahumana: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geografia',
                name: 'Geografía',
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
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geografiaaplicada',
                name: 'Geografía Aplicada',
            },
        ],
        hidrobiologia: [
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
                normalizedDegreeName: 'maestriaencienciashidrologiaambiental',
                name: 'Maestría en Ciencias (Hidrología Ambiental)',
            },
        ],
        humanidades: [
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
        ],
        ingenieriadelosalimentos: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicadealimentos',
                name: 'Química de Alimentos',
            },
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
                normalizedDegreeName: 'ingenieriaquimicaenalimentos',
                name: 'Ingeniería Química en Alimentos',
            },
        ],
        ingenieriabiologica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenbiotecnologia',
                name: 'Ingeniería en Biotecnología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenagrobiotecnologia',
                name: 'Ingeniería en Agrobiotecnología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriabiotecnologica',
                name: 'Ingeniería Biotecnológica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'biologiamolecular',
                name: 'Biología Molecular',
            },
        ],
        ingenieriabiomedica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'fisicabiomedica',
                name: 'Física Biomédica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaensistemasbiomedicos',
                name: 'Ingeniería en Sistemas Biomédicos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'investigacionbiomedicabasica',
                name: 'Investigación Biomédica Básica',
            },
        ],
        ingenieriabioquimicaindustrial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'bioquimicadiagnostica',
                name: 'Bioquímica Diagnóstica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriabioquimica',
                name: 'Ingeniería Bioquímica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicaindustrial',
                name: 'Química Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaindustrial',
                name: 'Ingeniería Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicofarmaceuticoindustrial',
                name: 'Quimico Farmacéutico Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicaindustrial',
                name: 'Ingeniería Química Industrial',
            },
        ],
        ingenieriaencomputacionytelecomunicaciones: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaentelecomunicaciones',
                name: 'Ingeniería en Telecomunicaciones',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ingenieriaentelecomunicacionessistemasyelectronica',
                name: 'Ingeniería en Telecomunicaciones, Sistemas y Electrónica',
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
                normalizedDegreeName: 'computacion',
                name: 'Computación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaensistemascomputacionales',
                name: 'Ingeniería en Sistemas Computacionales',
            },
        ],
        ingenieriaelectrica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaelectricayelectronica',
                name: 'Ingeniería Eléctrica y Electrónica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriamecanicaelectrica',
                name: 'Ingeniería Mecánica Eléctrica',
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
        ],
        ingenieriaelectronica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaelectricayelectronica',
                name: 'Ingeniería Eléctrica y Electrónica',
            },
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
                normalizedDegreeName: 'ingenieriaencomunicacionesyelectronica',
                name: 'Ingeniería en Comunicaciones y Electrónica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ingenieriaentelecomunicacionessistemasyelectronica',
                name: 'Ingeniería en Telecomunicaciones, Sistemas y Electrónica',
            },
        ],
        ingenieriaenenergia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenenergiasrenovables',
                name: 'Ingeniería en Energías Renovables',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ingenieriaensistemasenergeticosyredesinteligentes',
                name: 'Ingeniería en Sistemas Energéticos y Redes Inteligentes',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ingenieriaennegociosenergeticossustentables',
                name: 'Ingeniería en Negocios Energéticos Sustentables',
            },
        ],
        ingenieriafisica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'fisica',
                name: 'Física',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'fisicabiomedica',
                name: 'Física Biomédica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageofisica',
                name: 'Ingeniería Geofísica',
            },
        ],
        ingenieriahidrologica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenrecursoshidricos',
                name: 'Ingeniería en Recursos Hídricos',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciashidrologiaambiental',
                name: 'Maestría en Ciencias (Hidrología Ambiental)',
            },
        ],
        ingenieriametalurgica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriademinasymetalurgia',
                name: 'Ingeniería de Minas y Metalurgia',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicametalurgica',
                name: 'Ingeniería Química Metalúrgica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenmetalurgiaymateriales',
                name: 'Ingeniería en Metalurgia y Materiales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasenneurometabolismo',
                name: 'Maestría en Ciencias en Neurometabolismo',
            },
        ],
        ingenieriaenrecursoshidricos: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriahidrologica',
                name: 'Ingeniería Hidrológica',
            },
        ],
        ingenieriaensistemasmecatronicosindustriales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriamecatronica',
                name: 'Ingeniería Mecatrónica',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoeningenieriadesistemasroboticosymecatronicos',
                name: 'Doctorado en Ingeniería de Sistemas Robóticos y Mecatrónicos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaindustrial',
                name: 'Ingeniería Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenroboticaindustrial',
                name: 'Ingeniería en Robótica Industrial',
            },
        ],
        letrashispanicas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'letrasclasicas',
                name: 'Letras Clásicas',
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
                normalizedDegreeName:
                    'ensenanzadealemanespanolfrancesinglesoitalianocomolenguaextranjera',
                name: 'Enseñanza de (Alemán; Español; Francés; Inglés o Italiano) como Lengua Extranjera',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguasmodernasenespanol',
                name: 'Lenguas Modernas en Español',
            },
        ],
        linguistica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'linguisticaaplicada',
                name: 'Lingüística Aplicada',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenlinguisticaaplicada',
                name: 'Maestría en Lingüística Aplicada',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenestudiosamerindiosyeducacionbilingue',
                name: 'Maestría en Estudios Amerindios y Educación Bilingüe',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenlinguistica',
                name: 'Maestría en Lingüística',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenlinguisticahispanica',
                name: 'Maestría en Lingüística Hispánica',
            },
        ],
        medicina: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'medicinageneral',
                name: 'Medicina General',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'medicocirujanopartero',
                name: 'Médico Cirujano Partero',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'medicocirujanohomeopata',
                name: 'Médico Cirujano Homeópata',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'medicocirujano',
                name: 'Médico Cirujano',
            },
        ],
        nutricionhumana: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'nutriologia',
                name: 'Nutriología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'nutricion',
                name: 'Nutrición',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasdelanutricionhumana',
                name: 'Maestría en Ciencias de la Nutrición Humana',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciadelanutricionhumana',
                name: 'Ciencia de la Nutrición Humana',
            },
        ],
        planeacionterritorial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'planificacionparaeldesarrolloagropecuario',
                name: 'Planificación para el Desarrollo Agropecuario',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenplaneacionypoliticasmetropolitanas',
                name: 'Maestría en Planeación y Políticas Metropolitanas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'desarrolloterritorial',
                name: 'Desarrollo Territorial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'estudiossocioterritoriales',
                name: 'Estudios Socioterritoriales',
            },
        ],
        politicaygestionsocial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'gestionpublicaygobierno',
                name: 'Gestión Pública y Gobierno',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'estudiossocialesygestionlocal',
                name: 'Estudios Sociales y Gestión Local',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'politicaspublicas',
                name: 'Políticas Públicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenestudiospoliticosysociales',
                name: 'Maestría en Estudios Políticos y Sociales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciaspoliticasyadministracionpublica',
                name: 'Ciencias Políticas y Administración Pública',
            },
        ],
        politicaspublicas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciapolitica',
                name: 'Ciencia Política',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciaspoliticasyadministracionpublica',
                name: 'Ciencias Políticas y Administración Pública',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'politicaygestionsocial',
                name: 'Política y Gestión Social',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'gestionpublicaygobierno',
                name: 'Gestión Pública y Gobierno',
            },
        ],
        produccionanimal: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'medicinaveterinariayzootecnia',
                name: 'Medicina Veterinaria y Zootecnia',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenmedicinaveterinariayzootecnia',
                name: 'Maestría en Medicina Veterinaria y Zootecnia',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasdelaproduccionydelasaludanimal',
                name: 'Maestría en Ciencias de la Producción y de la Salud Animal',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenbiologiadelareproduccionanimal',
                name: 'Maestría en Biología de la Reproducción Animal',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaensaludyproduccionanimalsustentable',
                name: 'Maestría en Salud y Producción Animal Sustentable',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoencienciasdelaproduccionydelasaludanimal',
                name: 'Doctorado en Ciencias de la Producción y de la Salud Animal',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'produccionagropecuariasustentable',
                name: 'Producción Agropecuaria Sustentable',
            },
        ],
        psicologiabiomedica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologia',
                name: 'Psicología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologiasocial',
                name: 'Psicología Social',
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
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenpsicologia',
                name: 'Doctorado en Psicología',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenintervencionpsicologica',
                name: 'Maestría en Intervención Psicológica',
            },
        ],
        psicologiasocial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologia',
                name: 'Psicología',
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
                normalizedDegreeName: 'maestriaenpsicologiasocial',
                name: 'Maestría en Psicología Social',
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
        ],
        quimicafarmaceuticabiologica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicafarmaceuticobiologica',
                name: 'Química Farmacéutico Biológica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicofarmaceuticobiologo',
                name: 'Químico Farmacéutico Biólogo',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicofarmaceuticoindustrial',
                name: 'Quimico Farmacéutico Industrial',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasenfarmacologia',
                name: 'Maestría en Ciencias en Farmacología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'farmacia',
                name: 'Farmacia',
            },
        ],
        tecnologiasysistemasdeinformacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'tecnologiasparalainformacionenciencias',
                name: 'Tecnologías para la Información en Ciencias',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'administracionentecnologiasdeinformacion',
                name: 'Administración en Tecnologías de Información',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaeninformatica',
                name: 'Ingeniería en Informática',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'informatica',
                name: 'Informática',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasdelainformatica',
                name: 'Ciencias de la Informática',
            },
        ],
        contadorpublico: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'contaduria',
                name: 'Contaduría',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'contaduriayfinanzaspublicas',
                name: 'Contaduría y Finanzas Públicas',
            },
        ],
        ingenieriaagroindustrial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaagricola',
                name: 'Ingeniería Agrícola',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasagrogenomicas',
                name: 'Ciencias Agrogenómicas',
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
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracionagropecuaria',
                name: 'Administración Agropecuaria',
            },
        ],
        ingenieriadesoftware: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaensoftwareembebido',
                name: 'Maestría en Software Embebido',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'computacion',
                name: 'Computación',
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
                normalizedDegreeName: 'matematicasaplicadasycomputacion',
                name: 'Matemáticas Aplicadas y Computación',
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
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaensistemascomputacionales',
                name: 'Maestría en Sistemas Computacionales',
            },
        ],
        ingenieriaelectromecanica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaelectronica',
                name: 'Ingeniería Electrónica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaelectricayelectronica',
                name: 'Ingeniería Eléctrica y Electrónica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriamecanicaelectrica',
                name: 'Ingeniería Mecánica Eléctrica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasdeingenieriaenmicroelectronica',
                name: 'Maestría en Ciencias de Ingeniería en Microelectrónica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriamecanica',
                name: 'Ingeniería Mecánica',
            },
        ],
        ingenieriaenautomatizacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaindustrial',
                name: 'Ingeniería Industrial',
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
        ingenieriaenbiotecnologia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenagrobiotecnologia',
                name: 'Ingeniería en Agrobiotecnología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriabiotecnologica',
                name: 'Ingeniería Biotecnológica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenbiotecnologia',
                name: 'Maestría en Biotecnología',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidadenbiotecnologia',
                name: 'Especialidad en Biotecnología',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenbiomedicinaybiotecnologiamolecular',
                name: 'Maestría en Ciencias en Biomedicina y Biotecnología Molecular',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaytecnologiadevacunasybioterapeuticos',
                name: 'Maestría en Ciencia y Tecnología de Vacunas y Bioterapéuticos',
            },
        ],
        ingenieriaennanotecnologia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'nanotecnologia',
                name: 'Nanotecnología',
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
        ingenieriaentelecomunicacionesyredes: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaentelecomunicaciones',
                name: 'Ingeniería en Telecomunicaciones',
            },
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
        ],
        ingenieriaindustrialydemanufactura: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaindustrial',
                name: 'Ingeniería Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenroboticaindustrial',
                name: 'Ingeniería en Robótica Industrial',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaeningenieriademanufactura',
                name: 'Maestría en Ingeniería de Manufactura',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadeningenieriaparaeldesarrollodesistemasdemanufactura',
                name: 'Especialidad en Ingeniería para el Desarrollo de Sistemas de Manufactura',
            },
        ],
        ingenieriamecanicayautomotriz: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriamecanica',
                name: 'Ingeniería Mecánica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaensistemasautomotrices',
                name: 'Ingeniería en Sistemas Automotrices',
            },
        ],
        ingenieriaquimicaenalimentos: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenalimentos',
                name: 'Ingeniería en Alimentos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicadealimentos',
                name: 'Química de Alimentos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriadelosalimentos',
                name: 'Ingeniería de los Alimentos',
            },
        ],
        administracionentecnologiasdeinformacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'tecnologiasysistemasdeinformacion',
                name: 'Tecnologías y Sistemas de Información',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaeninformaticaadministrativa',
                name: 'Maestría en Informática Administrativa',
            },
        ],
        administracionfinanciera: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'contaduriayfinanzaspublicas',
                name: 'Contaduría y Finanzas Públicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenfinanzas',
                name: 'Maestría en Finanzas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracion',
                name: 'Administración',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'contaduria',
                name: 'Contaduría',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'contadorpublico',
                name: 'Contador Público',
            },
        ],
        artedanzario: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'danzafolkloricamexicana',
                name: 'Danza Folklórica Mexicana',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasdelaproduccionydelasaludanimal',
                name: 'Maestría en Ciencias de la Producción y de la Salud Animal',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaeneducacionparalaciudadania',
                name: 'Maestría en Educación para la Ciudadanía',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoencienciasdelaproduccionydelasaludanimal',
                name: 'Doctorado en Ciencias de la Producción y de la Salud Animal',
            },
        ],
        artesvisualesconespecialidadenartesplasticas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'artesvisuales',
                name: 'Artes Visuales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenoycomunicacionvisual',
                name: 'Diseño y Comunicación Visual',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'diseno',
                name: 'Diseño',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenartesvisuales',
                name: 'Maestría en Artes Visuales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaendisenoycomunicacionvisual',
                name: 'Maestría en Diseño y Comunicación Visual',
            },
        ],
        cienciasdelaseguridad: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaeningenieriaenseguridadytecnologiasdelainformacion',
                name: 'Maestría en Ingeniería en Seguridad y Tecnologías de la Información',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadenseguridadinformaticaytecnologiasdelainformacion',
                name: 'Especialidad en Seguridad Informática y Tecnologías de la Información',
            },
        ],
        composicionmusicalparamediosaudiovisualesyescenicos: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'educacionmusical',
                name: 'Educación Musical',
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
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenmusica',
                name: 'Maestría en Música',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'composicion',
                name: 'Composición',
            },
        ],
        criminologia: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenpoliticacriminal',
                name: 'Maestría en Política Criminal',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciaforense',
                name: 'Ciencia Forense',
            },
        ],
        danzafolkloricamexicana: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'artedanzario',
                name: 'Arte Danzario',
            },
        ],
        desarrollohumanoparalasustentabilidad: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'turismoydesarrollosostenible',
                name: 'Turismo y Desarrollo Sostenible',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasdelasostenibilidad',
                name: 'Maestría en Ciencias de la Sostenibilidad',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenodeproyectossustentables',
                name: 'Diseño de Proyectos Sustentables',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ingenieriaennegociosenergeticossustentables',
                name: 'Ingeniería en Negocios Energéticos Sustentables',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'turismosustentable',
                name: 'Turismo Sustentable',
            },
        ],
        desarrollolocalyprofesionalasociadoendesarrollolocal: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'estudiossocialesygestionlocal',
                name: 'Estudios Sociales y Gestión Local',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'desarrolloterritorial',
                name: 'Desarrollo Territorial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'desarrolloygestioninterculturales',
                name: 'Desarrollo y Gestión Interculturales',
            },
        ],
        economiaempresarial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'economia',
                name: 'Economía',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'economiaindustrial',
                name: 'Economía Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracionfinanciera',
                name: 'Administración Financiera',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'gestionydesarrollodeempresassociales',
                name: 'Gestión y Desarrollo de Empresas Sociales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracionydesarrolloempresarial',
                name: 'Administración y Desarrollo Empresarial',
            },
        ],
        educacionfisicaycienciasdeldeporte: [
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadenmedicinadelaactividadfisicayeldeporte',
                name: 'Especialidad en Medicina de la Actividad Física y el Deporte',
            },
        ],
        estudiosliterarios: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguayliteraturashispanicas',
                name: 'Lengua y Literaturas Hispánicas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'literaturadramaticayteatro',
                name: 'Literatura Dramática y Teatro',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenensenanzaenestudiosliterarios',
                name: 'Maestría en Enseñanza en Estudios Literarios',
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
        ],
        gastronomia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'nutricion',
                name: 'Nutrición',
            },
        ],
        geografiaambiental: [
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
                normalizedDegreeName: 'geografiaaplicada',
                name: 'Geografía Aplicada',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasambientales',
                name: 'Ciencias Ambientales',
            },
        ],
        gestiondelturismoculturalynatural: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'turismo',
                name: 'Turismo',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'turismoydesarrollosostenible',
                name: 'Turismo y Desarrollo Sostenible',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'negociosturisticos',
                name: 'Negocios Turísticos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'turismosustentable',
                name: 'Turismo Sustentable',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenadministracioneinnovaciondelturismo',
                name: 'Maestría en Administración e Innovación del Turismo',
            },
        ],
        gestionpublicaygobierno: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'politicaspublicas',
                name: 'Políticas Públicas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciaspoliticasyadministracionpublica',
                name: 'Ciencias Políticas y Administración Pública',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaengobiernoyasuntospublicos',
                name: 'Maestría en Gobierno y Asuntos Públicos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'contaduriayfinanzaspublicas',
                name: 'Contaduría y Finanzas Públicas',
            },
        ],
        gestionydesarrollodeempresassociales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'economiaempresarial',
                name: 'Economía Empresarial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracionydesarrolloempresarial',
                name: 'Administración y Desarrollo Empresarial',
            },
        ],
        horticulturaambiental: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasambientales',
                name: 'Ciencias Ambientales',
            },
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
        ],
        humanidadesyproducciondeimagenes: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'artesvisuales',
                name: 'Artes Visuales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenoycomunicacionvisual',
                name: 'Diseño y Comunicación Visual',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenartesvisuales',
                name: 'Maestría en Artes Visuales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'humanidades',
                name: 'Humanídades',
            },
        ],
        ingenieriaenagrobiotecnologia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasagrogenomicas',
                name: 'Ciencias Agrogenómicas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenbiotecnologia',
                name: 'Ingeniería en Biotecnología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriabiotecnologica',
                name: 'Ingeniería Biotecnológica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenbiotecnologia',
                name: 'Maestría en Biotecnología',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenbiotecnologiaproductiva',
                name: 'Maestría en Biotecnología Productiva',
            },
        ],
        ingenieriaquimicaambiental: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasambientales',
                name: 'Ciencias Ambientales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaambiental',
                name: 'Ingeniería Ambiental',
            },
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
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoencienciaseingenieriaambientalesdemateriales',
                name: 'Doctorado en Ciencias e Ingeniería (Ambientales, de Materiales)',
            },
        ],
        ingenieriaquimicaenmateriales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicaeingenieriaenmateriales',
                name: 'Química e Ingeniería en Materiales',
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
                    'maestriaencienciaseingenieriaambientalesdemateriales',
                name: 'Maestría en Ciencias e Ingeniería (Ambientales, de Materiales)',
            },
        ],
        innovacionygestioneducativa: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologiaeducativa',
                name: 'Psicología Educativa',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'educacionytecnologiasdigitales',
                name: 'Educación y Tecnologías Digitales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'pedagogia',
                name: 'Pedagogía',
            },
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
        lenguasmodernasdelfrances: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ensenanzadealemanespanolfrancesinglesoitalianocomolenguaextranjera',
                name: 'Enseñanza de (Alemán; Español; Francés; Inglés o Italiano) como Lengua Extranjera',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguayliteraturasmodernasfrancesas',
                name: 'Lengua y Literaturas Modernas Francesas',
            },
        ],
        lenguasmodernasenespanol: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ensenanzadealemanespanolfrancesinglesoitalianocomolenguaextranjera',
                name: 'Enseñanza de (Alemán; Español; Francés; Inglés o Italiano) como Lengua Extranjera',
            },
        ],
        lenguasmodernasingles: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ensenanzadeingles',
                name: 'Enseñanza de Inglés',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ensenanzadealemanespanolfrancesinglesoitalianocomolenguaextranjera',
                name: 'Enseñanza de (Alemán; Español; Francés; Inglés o Italiano) como Lengua Extranjera',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguayliteraturasmodernasinglesas',
                name: 'Lengua y Literaturas Modernas Inglesas',
            },
        ],
        medicinageneral: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'medicocirujano',
                name: 'Médico Cirujano',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'medicina',
                name: 'Medicina',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'medicocirujanopartero',
                name: 'Médico Cirujano Partero',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'medicocirujanohomeopata',
                name: 'Médico Cirujano Homeópata',
            },
        ],
        microbiologia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'biologia',
                name: 'Biología',
            },
        ],
        musica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'etnomusicologia',
                name: 'Etnomusicología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'educacionmusical',
                name: 'Educación Musical',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'musicaytecnologiaartistica',
                name: 'Música y Tecnología Artistica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenmusica',
                name: 'Maestría en Música',
            },
        ],
        musicapopularcontemporanea: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'educacionmusical',
                name: 'Educación Musical',
            },
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
        ],
        negociosturisticos: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'turismo',
                name: 'Turismo',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'turismosustentable',
                name: 'Turismo Sustentable',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'gestiondelturismoculturalynatural',
                name: 'Gestión del Turismo Cultural y Natural',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'turismoydesarrollosostenible',
                name: 'Turismo y Desarrollo Sostenible',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenadministracioneinnovaciondelturismo',
                name: 'Maestría en Administración e Innovación del Turismo',
            },
        ],
        negociosycomerciointernacional: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'relacionesinternacionales',
                name: 'Relaciones Internacionales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'comerciointernacional',
                name: 'Comercio Internacional',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'negociosinternacionales',
                name: 'Negocios Internacionales',
            },
        ],
        nutricion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'nutriologia',
                name: 'Nutriología',
            },
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
        ],
        produccionagropecuariasustentable: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasagroforestales',
                name: 'Ciencias Agroforestales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaagricola',
                name: 'Ingeniería Agrícola',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'agronomia',
                name: 'Agronomía',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'planificacionparaeldesarrolloagropecuario',
                name: 'Planificación para el Desarrollo Agropecuario',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenproduccionagricolasustentable',
                name: 'Maestría en Ciencias en Producción Agrícola Sustentable',
            },
        ],
        psicologiadeltrabajo: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologia',
                name: 'Psicología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologiabiomedica',
                name: 'Psicología Biomédica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologiasocial',
                name: 'Psicología Social',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologiaeducativa',
                name: 'Psicología Educativa',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenpsicologiadeltrabajo',
                name: 'Maestría en Psicología del Trabajo',
            },
        ],
        psicologiaeducativa: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologia',
                name: 'Psicología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'pedagogia',
                name: 'Pedagogía',
            },
        ],
        quimicofarmaceuticobiologo: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicofarmaceuticoindustrial',
                name: 'Quimico Farmacéutico Industrial',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasenfarmacologia',
                name: 'Maestría en Ciencias en Farmacología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'farmacia',
                name: 'Farmacia',
            },
        ],
        restauraciondebienesmuebles: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenconservacionyrestauracionarquitectonica',
                name: 'Maestría en Conservación y Restauración Arquitectónica',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadenrestauracionarquitectonica',
                name: 'Especialidad en Restauración Arquitectónica',
            },
        ],
        profesorasociadoenlaensenanzadelenguas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ensenanzadealemanespanolfrancesinglesoitalianocomolenguaextranjera',
                name: 'Enseñanza de (Alemán; Español; Francés; Inglés o Italiano) como Lengua Extranjera',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenaprendizajedelalenguaylasmatematicas',
                name: 'Maestría en Aprendizaje de la Lengua y las Matemáticas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenensenanzadelenguasycultura',
                name: 'Maestría en Enseñanza de Lenguas y Cultura',
            },
        ],
        actuacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'teatroyactuacion',
                name: 'Teatro y Actuación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'literaturadramaticayteatro',
                name: 'Literatura Dramática y Teatro',
            },
        ],
        ingenieriaaeronautica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaaeroespacial',
                name: 'Ingeniería Aeroespacial',
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
        ingenieriabionica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriabiologica',
                name: 'Ingeniería Biológica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriabiomedica',
                name: 'Ingeniería Biomédica',
            },
        ],
        ingenieriabioquimica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'bioquimicadiagnostica',
                name: 'Bioquímica Diagnóstica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriabioquimicaindustrial',
                name: 'Ingeniería Bioquímica Industrial',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasbioquimicas',
                name: 'Maestría en Ciencias Bioquímicas',
            },
        ],
        ingenieriabiotecnologica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenagrobiotecnologia',
                name: 'Ingeniería en Agrobiotecnología',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenbiotecnologia',
                name: 'Maestría en Biotecnología',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenbiotecnologiaaplicada',
                name: 'Maestría en Biotecnología Aplicada',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenbiotecnologiaproductiva',
                name: 'Maestría en Biotecnología Productiva',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenbiotecnologiagenomica',
                name: 'Maestría en Ciencias en Biotecnología Genómica',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenbiotecnologia',
                name: 'Doctorado en Biotecnología',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidadenbiotecnologia',
                name: 'Especialidad en Biotecnología',
            },
        ],
        ingenieriaencomunicacionesyelectronica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaelectronica',
                name: 'Ingeniería Electrónica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaelectricayelectronica',
                name: 'Ingeniería Eléctrica y Electrónica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ingenieriaentelecomunicacionessistemasyelectronica',
                name: 'Ingeniería en Telecomunicaciones, Sistemas y Electrónica',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencomunicacionesyelectronica',
                name: 'Doctorado en Comunicaciones y Electrónica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaentelecomunicaciones',
                name: 'Ingeniería en Telecomunicaciones',
            },
        ],
        ingenieriaencontrolyautomatizacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenautomatizacion',
                name: 'Ingeniería en Automatización',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasinstrumentacionycontrolautomatico',
                name: 'Maestría en Ciencias (Instrumentación y Control Automático)',
            },
        ],
        ingenieriaeninformatica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'informatica',
                name: 'Informática',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'tecnologiasparalainformacionenciencias',
                name: 'Tecnologías para la Información en Ciencias',
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
                normalizedDegreeName: 'maestriaeninformaticaadministrativa',
                name: 'Maestría en Informática Administrativa',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadenseguridadinformaticaytecnologiasdelainformacion',
                name: 'Especialidad en Seguridad Informática y Tecnologías de la Información',
            },
        ],
        ingenieriaeninteligenciaartificial: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseninteligenciaartificial',
                name: 'Maestría en Ciencias en Inteligencia Artificial',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaendireccionygestiondeproyectosartisticosyculturales',
                name: 'Maestría en Dirección y Gestión de Proyectos Artísticos y Culturales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciadedatos',
                name: 'Ciencia de Datos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasdedatos',
                name: 'Ciencias de Datos',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciadedatos',
                name: 'Maestría en Ciencia de Datos',
            },
        ],
        ingenieriaenmetalurgiaymateriales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciadematerialessustentables',
                name: 'Ciencia de Materiales Sustentables',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicaeingenieriaenmateriales',
                name: 'Química e Ingeniería en Materiales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicaenmateriales',
                name: 'Ingeniería Química en Materiales',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoencienciaeingenieriademateriales',
                name: 'Doctorado en Ciencia e Ingeniería de Materiales',
            },
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
                normalizedDegreeName: 'ingenieriaquimicametalurgica',
                name: 'Ingeniería Química Metalúrgica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseningenieriametalurgica',
                name: 'Maestría en Ciencias en Ingeniería Metalúrgica',
            },
        ],
        ingenieriaenmovilidadurbana: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'urbanismo',
                name: 'Urbanismo',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenurbanismo',
                name: 'Maestría en Urbanismo',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaendisenoyestudiosurbanos',
                name: 'Maestría en Diseño y Estudios Urbanos',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenurbanismo',
                name: 'Doctorado en Urbanismo',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoendisenoyestudiosurbanos',
                name: 'Doctorado en Diseño y Estudios Urbanos',
            },
        ],
        ingenieriaennegociosenergeticossustentables: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenenergiasrenovables',
                name: 'Ingeniería en Energías Renovables',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenenergia',
                name: 'Doctorado en Energía',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenenergia',
                name: 'Ingeniería en Energía',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ingenieriaensistemasenergeticosyredesinteligentes',
                name: 'Ingeniería en Sistemas Energéticos y Redes Inteligentes',
            },
        ],
        ingenieriaenroboticaindustrial: [
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoeningenieriadesistemasroboticosymecatronicos',
                name: 'Doctorado en Ingeniería de Sistemas Robóticos y Mecatrónicos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriamecatronica',
                name: 'Ingeniería Mecatrónica',
            },
        ],
        ingenieriaensistemasambientales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasambientales',
                name: 'Ciencias Ambientales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaambiental',
                name: 'Ingeniería Ambiental',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicaambiental',
                name: 'Ingeniería Química Ambiental',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseingenieriaambientalesdemateriales',
                name: 'Maestría en Ciencias e Ingeniería (Ambientales, de Materiales)',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoencienciaseingenieriaambientalesdemateriales',
                name: 'Doctorado en Ciencias e Ingeniería (Ambientales, de Materiales)',
            },
        ],
        ingenieriaensistemasautomotrices: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenautomatizacion',
                name: 'Ingeniería en Automatización',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriamecanicayautomotriz',
                name: 'Ingeniería Mecánica y Automotriz',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaencontrolyautomatizacion',
                name: 'Ingeniería en Control y Automatización',
            },
        ],
        ingenieriaensistemascomputacionales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasdelacomputacion',
                name: 'Ciencias de la Computación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaencomputacion',
                name: 'Ingeniería en Computación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'computacion',
                name: 'Computación',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasdelacomputacion',
                name: 'Maestría en Ciencias de la Computación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'tecnologiasysistemasdeinformacion',
                name: 'Tecnologías y Sistemas de Información',
            },
        ],
        ingenieriaensistemasenergeticosyredesinteligentes: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ingenieriaennegociosenergeticossustentables',
                name: 'Ingeniería en Negocios Energéticos Sustentables',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenenergia',
                name: 'Ingeniería en Energía',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaeningenieriadehidrocarburosysusenergeticosasociados',
                name: 'Maestría en Ingeniería de Hidrocarburos y sus Energéticos Asociados',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaentelecomunicacionesyredes',
                name: 'Ingeniería en Telecomunicaciones y Redes',
            },
        ],
        ingenieriaentransporte: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenautomatizacion',
                name: 'Ingeniería en Automatización',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriamecanicayautomotriz',
                name: 'Ingeniería Mecánica y Automotriz',
            },
        ],
        ingenieriafarmaceutica: [
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
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasfarmaceuticas',
                name: 'Maestría en Ciencias Farmacéuticas',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasfarmaceuticas',
                name: 'Doctorado en Ciencias Farmacéuticas',
            },
        ],
        ingenieriaferroviaria: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriamecanica',
                name: 'Ingeniería Mecánica',
            },
        ],
        ingenieriafotonica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriamecanicaelectrica',
                name: 'Ingeniería Mecánica Eléctrica',
            },
        ],
        ingenieriamatematica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicas',
                name: 'Matemáticas',
            },
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
        ],
        ingenieriaquimicaindustrial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicaindustrial',
                name: 'Química Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaindustrial',
                name: 'Ingeniería Industrial',
            },
        ],
        ingenieriaquimicapetrolera: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriapetrolera',
                name: 'Ingeniería Petrolera',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaeningenieriadehidrocarburosysusenergeticosasociados',
                name: 'Maestría en Ingeniería de Hidrocarburos y sus Energéticos Asociados',
            },
        ],
        ingenieriatelematica: [
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
                normalizedDegreeName:
                    'ingenieriaentelecomunicacionessistemasyelectronica',
                name: 'Ingeniería en Telecomunicaciones, Sistemas y Electrónica',
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
        ingenieriatextil: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaeingenieriademateriales',
                name: 'Maestría en Ciencia e Ingeniería de Materiales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciadematerialessustentables',
                name: 'Ciencia de Materiales Sustentables',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicaeingenieriaenmateriales',
                name: 'Química e Ingeniería en Materiales',
            },
        ],
        ingenieriatopograficayfotogrametrica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageologica',
                name: 'Ingeniería Geológica',
            },
        ],
        ingenieroarquitecto: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arquitectura',
                name: 'Arquitectura',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenarquitectura',
                name: 'Doctorado en Arquitectura',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenarquitectura',
                name: 'Maestría en Arquitectura',
            },
        ],
        cienciadedatos: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciadedatos',
                name: 'Maestría en Ciencia de Datos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaeninteligenciaartificial',
                name: 'Ingeniería en Inteligencia Artificial',
            },
        ],
        cienciasdelainformatica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'informatica',
                name: 'Informática',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'tecnologiasparalainformacionenciencias',
                name: 'Tecnologías para la Información en Ciencias',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'tecnologiasysistemasdeinformacion',
                name: 'Tecnologías y Sistemas de Información',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaeninformatica',
                name: 'Ingeniería en Informática',
            },
        ],
        fisicaymatematicas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicas',
                name: 'Matemáticas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicasaplicadas',
                name: 'Matemáticas Aplicadas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriamatematica',
                name: 'Ingeniería Matemática',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'fisica',
                name: 'Física',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriafisica',
                name: 'Ingeniería Física',
            },
        ],
        matematicaalgoritmica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicas',
                name: 'Matemáticas',
            },
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
        ],
        medicocirujanohomeopata: [
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidadenterapeuticahomeopatica',
                name: 'Especialidad en Terapéutica Homeopática',
            },
        ],
        medicocirujanopartero: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'medicocirujano',
                name: 'Médico Cirujano',
            },
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
        ],
        quimicobacteriologoyparasitologo: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicafarmaceuticobiologica',
                name: 'Química Farmacéutico Biológica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicofarmaceuticobiologo',
                name: 'Químico Farmacéutico Biólogo',
            },
        ],
        quimicofarmaceuticoindustrial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'farmacia',
                name: 'Farmacia',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicafarmaceuticobiologica',
                name: 'Química Farmacéutico Biológica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriafarmaceutica',
                name: 'Ingeniería Farmacéutica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasenfarmacologia',
                name: 'Maestría en Ciencias en Farmacología',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasfarmaceuticas',
                name: 'Doctorado en Ciencias Farmacéuticas',
            },
        ],
        administracionindustrial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'economiaindustrial',
                name: 'Economía Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracion',
                name: 'Administración',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenadministracion',
                name: 'Maestría en Administración',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseconomicoadministrativas',
                name: 'Maestría en Ciencias Económico-Administrativas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenadministraciondenegocios',
                name: 'Maestría en Ciencias en Administración de Negocios',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadenadministracionderiesgosfinancieros',
                name: 'Especialidad en Administración de Riesgos Financieros',
            },
        ],
        administracionydesarrolloempresarial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'economiaempresarial',
                name: 'Economía Empresarial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'gestionydesarrollodeempresassociales',
                name: 'Gestión y Desarrollo de Empresas Sociales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenestudiosinterdisciplinariosparapequenasymedianasempresas',
                name: 'Maestría en Ciencias en Estudios Interdisciplinarios para Pequeñas y Medianas Empresas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracion',
                name: 'Administración',
            },
        ],
        archivonomia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'administraciondearchivosygestiondocumental',
                name: 'Administración de Archivos y Gestión Documental',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenbibliotecologiayestudiosdelainformacion',
                name: 'Maestría en Bibliotecología y Estudios de la Información',
            },
        ],
        biblioteconomia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'administraciondearchivosygestiondocumental',
                name: 'Administración de Archivos y Gestión Documental',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'archivonomia',
                name: 'Archivonomía',
            },
        ],
        mercadotecniadigital: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'relacionescomerciales',
                name: 'Relaciones Comerciales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'negociosdigitales',
                name: 'Negocios Digitales',
            },
        ],
        negociosdigitales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'mercadotecniadigital',
                name: 'Mercadotecnia Digital',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'relacionescomerciales',
                name: 'Relaciones Comerciales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'negociosycomerciointernacional',
                name: 'Negocios y Comercio Internacional',
            },
        ],
        relacionescomerciales: [
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
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'relacionesinternacionales',
                name: 'Relaciones Internacionales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenestudiosenrelacionesinternacionales',
                name: 'Maestría en Estudios en Relaciones Internacionales',
            },
        ],
        turismo: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'turismoydesarrollosostenible',
                name: 'Turismo y Desarrollo Sostenible',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'gestiondelturismoculturalynatural',
                name: 'Gestión del Turismo Cultural y Natural',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'negociosturisticos',
                name: 'Negocios Turísticos',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenadministracioneinnovaciondelturismo',
                name: 'Maestría en Administración e Innovación del Turismo',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'turismosustentable',
                name: 'Turismo Sustentable',
            },
        ],
        turismosustentable: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'turismoydesarrollosostenible',
                name: 'Turismo y Desarrollo Sostenible',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'gestiondelturismoculturalynatural',
                name: 'Gestión del Turismo Cultural y Natural',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'negociosturisticos',
                name: 'Negocios Turísticos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'turismo',
                name: 'Turismo',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenadministracioneinnovaciondelturismo',
                name: 'Maestría en Administración e Innovación del Turismo',
            },
        ],
        comerciointernacional: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'negociosinternacionales',
                name: 'Negocios Internacionales',
            },
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
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenestrategiadenegociosinternacionales',
                name: 'Maestría en Estrategia de Negocios Internacionales',
            },
        ],
        contaduriayfinanzaspublicas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracionfinanciera',
                name: 'Administración Financiera',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenfinanzas',
                name: 'Maestría en Finanzas',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidadenfinanzas',
                name: 'Especialidad en Finanzas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'contaduria',
                name: 'Contaduría',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'contadorpublico',
                name: 'Contador Público',
            },
        ],
    },
    msc: {
        maestriaenadministracion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracion',
                name: 'Administración',
            },
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
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaeninformaticaadministrativa',
                name: 'Maestría en Informática Administrativa',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenadministracionypoliticaspublicas',
                name: 'Maestría en Administración y Políticas Públicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenadministraciondenegocios',
                name: 'Maestría en Ciencias en Administración de Negocios',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasdelaadministracion',
                name: 'Doctorado en Ciencias de la Administración',
            },
        ],
        maestriaenantropologia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'antropologia',
                name: 'Antropología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'antropologiasocial',
                name: 'Antropología Social',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasantropologicas',
                name: 'Maestría en Ciencias Antropológicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaestudiosantropologicosensociedadescontemporaneas',
                name: 'Maestría Estudios Antropológicos en Sociedades Contemporáneas',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenantropologia',
                name: 'Doctorado en Antropología',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidadencienciasantropologicas',
                name: 'Especialidad en Ciencias Antropológicas',
            },
        ],
        maestriaenarquitectura: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arquitectura',
                name: 'Arquitectura',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieroarquitecto',
                name: 'Ingeniero Arquitecto',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenconservacionyrestauracionarquitectonica',
                name: 'Maestría en Conservación y Restauración Arquitectónica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenarquitecturayurbanismo',
                name: 'Maestría en Ciencias en Arquitectura y Urbanismo',
            },
        ],
        maestriaenartesvisuales: [
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
                normalizedDegreeName: 'maestriaendocenciaenartesydiseno',
                name: 'Maestría en Docencia en Artes y Diseño',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenartes',
                name: 'Maestría en Artes',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenartesydiseno',
                name: 'Doctorado en Artes y Diseño',
            },
        ],
        maestriaenastrofisica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'fisica',
                name: 'Física',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenastrofisica',
                name: 'Doctorado en Astrofísica',
            },
        ],
        maestriaenauditoria: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'contaduria',
                name: 'Contaduría',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'economia',
                name: 'Economía',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracion',
                name: 'Administración',
            },
        ],
        maestriaenbibliotecologiayestudiosdelainformacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'biblioteconomia',
                name: 'Biblioteconomía',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'bibliotecologiayestudiosdelainformacion',
                name: 'Bibliotecología y Estudios de la información',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoenbibliotecologiayestudiosdelainformacion',
                name: 'Doctorado en Bibliotecología y Estudios de la Información',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'administraciondearchivosygestiondocumental',
                name: 'Administración de Archivos y Gestión Documental',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'archivonomia',
                name: 'Archivonomía',
            },
        ],
        maestriaencienciaeingenieriadelacomputacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasdelacomputacion',
                name: 'Ciencias de la Computación',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaensistemascomputacionales',
                name: 'Maestría en Sistemas Computacionales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'computacion',
                name: 'Computación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaencomputacion',
                name: 'Ingeniería en Computación',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasensistemascomputacionalesmoviles',
                name: 'Maestría en Ciencias en Sistemas Computacionales Móviles',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciaseningenieriadecomputo',
                name: 'Maestría en Ciencias en Ingeniería de Cómputo',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaentecnologiadecomputo',
                name: 'Maestría en Tecnología de Cómputo',
            },
        ],
        maestriaencienciaeingenieriademateriales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciadematerialessustentables',
                name: 'Ciencia de Materiales Sustentables',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseingenieriaambientalesdemateriales',
                name: 'Maestría en Ciencias e Ingeniería (Ambientales, de Materiales)',
            },
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
        ],
        maestriaencienciasfisicamedica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriafisica',
                name: 'Ingeniería Física',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'fisicabiomedica',
                name: 'Física Biomédica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasfisica',
                name: 'Maestría en Ciencias (Física)',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasfisica',
                name: 'Doctorado en Ciencias (Física)',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidadenfisicamedicaclinica',
                name: 'Especialidad en Física Médica Clínica',
            },
        ],
        maestriaencienciasfisica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'fisica',
                name: 'Física',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriafisica',
                name: 'Ingeniería Física',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasfisicamedica',
                name: 'Maestría en Ciencias (Física Médica)',
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
        maestriaencienciasneurobiologia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'neurociencias',
                name: 'Neurociencias',
            },
        ],
        maestriaencienciasbiologicas: [
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
                normalizedDegreeName: 'maestriaenbiologia',
                name: 'Maestría en Biología',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenbiologiaexperimental',
                name: 'Maestría en Biología Experimental',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenbiologiadelareproduccionanimal',
                name: 'Maestría en Biología de la Reproducción Animal',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasquimicobiologicas',
                name: 'Maestría en Ciencias Químico Biológicas',
            },
        ],
        maestriaencienciasbioquimicas: [
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
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasbioquimicas',
                name: 'Doctorado en Ciencias Bioquímicas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'bioquimicadiagnostica',
                name: 'Bioquímica Diagnóstica',
            },
        ],
        maestriaencienciasdelaproduccionydelasaludanimal: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'produccionanimal',
                name: 'Producción Animal',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenbiologiadelareproduccionanimal',
                name: 'Maestría en Biología de la Reproducción Animal',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaensaludyproduccionanimalsustentable',
                name: 'Maestría en Salud y Producción Animal Sustentable',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoencienciasdelaproduccionydelasaludanimal',
                name: 'Doctorado en Ciencias de la Producción y de la Salud Animal',
            },
        ],
        maestriaencienciasdelasostenibilidad: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'turismoydesarrollosostenible',
                name: 'Turismo y Desarrollo Sostenible',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasdelasostenibilidad',
                name: 'Doctorado en Ciencias de la Sostenibilidad',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaensostenibilidadeinnovacionentecnologiaambiental',
                name: 'Maestría en Sostenibilidad e Innovación en Tecnología Ambiental',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaensociedadessustentables',
                name: 'Maestría en Sociedades Sustentables',
            },
        ],
        maestriaencienciasdelatierra: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasdelatierra',
                name: 'Ciencias de la Tierra',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasdelatierra',
                name: 'Doctorado en Ciencias de la Tierra',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageologica',
                name: 'Ingeniería Geológica',
            },
        ],
        maestriaencienciasdelmarylimnologia: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenmanejoderecursosmarinos',
                name: 'Maestría en Ciencias en Manejo de Recursos Marinos',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasdelmarylimnologia',
                name: 'Doctorado en Ciencias del Mar y Limnología',
            },
        ],
        maestriaencienciasmatematicas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicas',
                name: 'Matemáticas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicasaplicadas',
                name: 'Matemáticas Aplicadas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasmatematicasaplicadaseindustriales',
                name: 'Maestría en Ciencias (Matemáticas Aplicadas e Industriales)',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasingenieriamatematica',
                name: 'Maestría en Ciencias (Ingeniería Matemática)',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasmatematicas',
                name: 'Doctorado en Ciencias Matemáticas',
            },
        ],
        maestriaencienciasmedicasodontologicasydelasalud: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'medicocirujano',
                name: 'Médico Cirujano',
            },
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
                normalizedDegreeName: 'medicocirujanopartero',
                name: 'Médico Cirujano Partero',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'odontologia',
                name: 'Odontología',
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
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasdelasalud',
                name: 'Maestría en Ciencias de la Salud',
            },
        ],
        maestriaencienciasquimicas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimica',
                name: 'Química',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicadealimentos',
                name: 'Química de Alimentos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicaenalimentos',
                name: 'Ingeniería Química en Alimentos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenalimentos',
                name: 'Ingeniería en Alimentos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriadelosalimentos',
                name: 'Ingeniería de los Alimentos',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasenalimentos',
                name: 'Maestría en Ciencias en Alimentos',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciaytecnologiadealimentos',
                name: 'Maestría en Ciencia y Tecnología de Alimentos',
            },
        ],
        maestriaencinedocumental: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'composicionmusicalparamediosaudiovisualesyescenicos',
                name: 'Composición Musical para Medios Audiovisuales y Escénicos',
            },
        ],
        maestriaencomunicacion: [
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
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'comunicacionyperiodismo',
                name: 'Comunicación y Periodismo',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaendisenoinformacionycomunicacion',
                name: 'Maestría en Diseño, Información y Comunicación',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencomunicacionypolitica',
                name: 'Maestría en Comunicación y Política',
            },
        ],
        maestriaendemografiasocial: [
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
        ],
        maestriaenderecho: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'derecho',
                name: 'Derecho',
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
        maestriaendisenoindustrial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenoindustrial',
                name: 'Diseño Industrial',
            },
        ],
        maestriaendisenoycomunicacionvisual: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenoycomunicacionvisual',
                name: 'Diseño y Comunicación Visual',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaendisenoyvisualizaciondelainformacion',
                name: 'Maestría en Diseño y Visualización de la Información',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenartecontemporaneoyculturavisual',
                name: 'Maestría en Arte Contemporáneo y Cultura Visual',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoendisenoyvisualizaciondelainformacion',
                name: 'Doctorado en Diseño y Visualización de la Información',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'comunicacion',
                name: 'Comunicación',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencomunicacion',
                name: 'Maestría en Comunicación',
            },
        ],
        maestriaendocenciaenartesydiseno: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'artesvisuales',
                name: 'Artes Visuales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenartes',
                name: 'Maestría en Artes',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenartesydiseno',
                name: 'Doctorado en Artes y Diseño',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasyartesparaeldiseno',
                name: 'Maestría en Ciencias y Artes para el Diseño',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenografico',
                name: 'Diseño Gráfico',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'diseno',
                name: 'Diseño',
            },
        ],
        maestriaendocenciaparalaeducacionmediasuperior: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaendocenciacientificaytecnologica',
                name: 'Maestría en Docencia Científica y Tecnológica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'pedagogia',
                name: 'Pedagogía',
            },
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
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencreacioneducativa',
                name: 'Maestría en Creación Educativa',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasdelaeducacion',
                name: 'Maestría en Ciencias de la Educación',
            },
        ],
        maestriaeneconomia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'economia',
                name: 'Economía',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'economiaempresarial',
                name: 'Economía Empresarial',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciaseconomicas',
                name: 'Maestría en Ciencias Económicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaeneconomiagestionypoliticasdeinnovacion',
                name: 'Maestría en Economía, Gestión y Políticas de Innovación',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoeneconomia',
                name: 'Doctorado en Economía',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciaseconomicas',
                name: 'Doctorado en Ciencias Económicas',
            },
        ],
        maestriaenenfermeria: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'enfermeria',
                name: 'Enfermería',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'enfermeriayobstetricia',
                name: 'Enfermería y Obstetricia',
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
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenenfermeria',
                name: 'Doctorado en Enfermería',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidaddeenfermeriaencuidadosintensivos',
                name: 'Especialidad de Enfermería en Cuidados Intensivos',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidaddeenfermeriaengerontogeriatria',
                name: 'Especialidad de Enfermería en Gerontogeriatría',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidaddeenfermeriaperinatal',
                name: 'Especialidad de Enfermería Perinatal',
            },
        ],
        maestriaenestudiosdegenero: [
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenestudiosdegenero',
                name: 'Doctorado en Estudios de Género',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidadenestudiosdegenero',
                name: 'Especialidad en Estudios de Género',
            },
        ],
        maestriaenestudiosenrelacionesinternacionales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'relacionesinternacionales',
                name: 'Relaciones Internacionales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'relacionescomerciales',
                name: 'Relaciones Comerciales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenrelacionesinternacionales',
                name: 'Maestría en Relaciones Internacionales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'negociosinternacionales',
                name: 'Negocios Internacionales',
            },
        ],
        maestriaenestudioslatinoamericanos: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'estudioslatinoamericanos',
                name: 'Estudios Latinoamericanos',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenestudioslatinoamericanos',
                name: 'Doctorado en Estudios Latinoamericanos',
            },
        ],
        maestriaenestudiosmesoamericanos: [
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenestudiosmesoamericanos',
                name: 'Doctorado en Estudios Mesoamericanos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'antropologia',
                name: 'Antropología',
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
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'sociologia',
                name: 'Sociología',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoensociologia',
                name: 'Doctorado en Sociología',
            },
        ],
        maestriaenestudiosmexicoestadosunidos: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'relacionesinternacionales',
                name: 'Relaciones Internacionales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenestudiosenrelacionesinternacionales',
                name: 'Maestría en Estudios en Relaciones Internacionales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenrelacionesinternacionales',
                name: 'Maestría en Relaciones Internacionales',
            },
        ],
        maestriaenestudiospoliticosysociales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciapolitica',
                name: 'Ciencia Política',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaeneconomiagestionypoliticasdeinnovacion',
                name: 'Maestría en Economía, Gestión y Políticas de Innovación',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenpoliticaspublicas',
                name: 'Maestría en Políticas Públicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenadministracionypoliticaspublicas',
                name: 'Maestría en Administración y Políticas Públicas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'gestionpublicaygobierno',
                name: 'Gestión Pública y Gobierno',
            },
        ],
        maestriaenfilosofia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'filosofia',
                name: 'Filosofía',
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
        maestriaenfilosofiadelaciencia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'filosofia',
                name: 'Filosofía',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenfilosofia',
                name: 'Maestría en Filosofía',
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
        maestriaenfinanzas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracionfinanciera',
                name: 'Administración Financiera',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'contaduriayfinanzaspublicas',
                name: 'Contaduría y Finanzas Públicas',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadenadministracionderiesgosfinancieros',
                name: 'Especialidad en Administración de Riesgos Financieros',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidadenfinanzas',
                name: 'Especialidad en Finanzas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'contaduria',
                name: 'Contaduría',
            },
        ],
        maestriaengeografia: [
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
                normalizedDegreeName: 'geografiahumana',
                name: 'Geografía Humana',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geografiaambiental',
                name: 'Geografía Ambiental',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoengeografia',
                name: 'Doctorado en Geografía',
            },
        ],
        maestriaengobiernoyasuntospublicos: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'politicaspublicas',
                name: 'Políticas Públicas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciaspoliticasyadministracionpublica',
                name: 'Ciencias Políticas y Administración Pública',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'gestionpublicaygobierno',
                name: 'Gestión Pública y Gobierno',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'contaduriayfinanzaspublicas',
                name: 'Contaduría y Finanzas Públicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenpoliticaspublicas',
                name: 'Maestría en Políticas Públicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenadministracionpublicaestatalymunicipal',
                name: 'Maestría en Administración Pública Estatal y Municipal',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaengestioneinnovacionpublica',
                name: 'Maestría en Gestión e Innovación Pública',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenadministracionypoliticaspublicas',
                name: 'Maestría en Administración y Políticas Públicas',
            },
        ],
        maestriaenhistoria: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'historia',
                name: 'Historia',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geohistoria',
                name: 'Geohistoria',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenhistoriografia',
                name: 'Maestría en Historiografía',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenestudioshistoricos',
                name: 'Maestría en Estudios Históricos',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenhistoria',
                name: 'Doctorado en Historia',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenhistoriografia',
                name: 'Doctorado en Historiografía',
            },
        ],
        maestriaenhistoriadelarte: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arteydiseno',
                name: 'Arte y Diseño',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'historiadelarte',
                name: 'Historia del Arte',
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
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'historia',
                name: 'Historia',
            },
        ],
        maestriaeninformaticaadministrativa: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracion',
                name: 'Administración',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenadministracion',
                name: 'Maestría en Administración',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasdelaadministracion',
                name: 'Doctorado en Ciencias de la Administración',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaengestioneinnovacionpublica',
                name: 'Maestría en Gestión e Innovación Pública',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaengestiondelainnovacion',
                name: 'Maestría en Gestión de la Innovación',
            },
        ],
        maestriaeningenieria: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriamecanica',
                name: 'Ingeniería Mecánica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciaseningenieriamecanica',
                name: 'Maestría en Ciencias en Ingeniería Mecánica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseningenieriaelectronica',
                name: 'Maestría en Ciencias en Ingeniería Electrónica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseningenieriadesistemas',
                name: 'Maestría en Ciencias en Ingeniería de Sistemas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciaseningenieriaelectrica',
                name: 'Maestría en Ciencias en Ingeniería Eléctrica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseningenieriadetelecomunicaciones',
                name: 'Maestría en Ciencias en Ingeniería de Telecomunicaciones',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciaseningenieriadecomputo',
                name: 'Maestría en Ciencias en Ingeniería de Cómputo',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasdeingenieriaenmicroelectronica',
                name: 'Maestría en Ciencias de Ingeniería en Microelectrónica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaeningenieriaenbiosistemas',
                name: 'Maestría en Ingeniería en Biosistemas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaeningenieriacivil',
                name: 'Maestría en Ingeniería Civil',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoeningenieria',
                name: 'Doctorado en Ingeniería',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasingenieriaquimica',
                name: 'Doctorado en Ciencias (Ingeniería Química)',
            },
        ],
        maestriaenletras: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'letrasclasicas',
                name: 'Letras Clásicas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'letrashispanicas',
                name: 'Letras Hispánicas',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenletras',
                name: 'Doctorado en Letras',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguayliteraturashispanicas',
                name: 'Lengua y Literaturas Hispánicas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'estudiosliterarios',
                name: 'Estudios Literarios',
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
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenliteraturamexicanacontemporanea',
                name: 'Maestría en Literatura Mexicana Contemporánea',
            },
        ],
        maestriaenlinguisticaaplicada: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'linguisticaaplicada',
                name: 'Lingüística Aplicada',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'linguistica',
                name: 'Lingüística',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenlinguisticahispanica',
                name: 'Maestría en Lingüística Hispánica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenestudiosamerindiosyeducacionbilingue',
                name: 'Maestría en Estudios Amerindios y Educación Bilingüe',
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
        maestriaenlinguisticahispanica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'linguisticaaplicada',
                name: 'Lingüística Aplicada',
            },
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
                normalizedDegreeName:
                    'maestriaenestudiosamerindiosyeducacionbilingue',
                name: 'Maestría en Estudios Amerindios y Educación Bilingüe',
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
        maestriaenmedicinaveterinariayzootecnia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'medicinaveterinariayzootecnia',
                name: 'Medicina Veterinaria y Zootecnia',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'produccionanimal',
                name: 'Producción Animal',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenbiologiadelareproduccionanimal',
                name: 'Maestría en Biología de la Reproducción Animal',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasdelaproduccionydelasaludanimal',
                name: 'Maestría en Ciencias de la Producción y de la Salud Animal',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaensaludyproduccionanimalsustentable',
                name: 'Maestría en Salud y Producción Animal Sustentable',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoencienciasdelaproduccionydelasaludanimal',
                name: 'Doctorado en Ciencias de la Producción y de la Salud Animal',
            },
        ],
        maestriaenmusica: [
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
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'composicionmusicalparamediosaudiovisualesyescenicos',
                name: 'Composición Musical para Medios Audiovisuales y Escénicos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'musicaytecnologiaartistica',
                name: 'Música y Tecnología Artistica',
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
        ],
        maestriaenpedagogia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'pedagogia',
                name: 'Pedagogía',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenpedagogia',
                name: 'Doctorado en Pedagogía',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasdelaeducacion',
                name: 'Maestría en Ciencias de la Educación',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaendesarrolloyplaneaciondelaeducacion',
                name: 'Maestría en Desarrollo y Planeación de la Educación',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaendocenciaparalaeducacionmediasuperior',
                name: 'Maestría en Docencia para la Educación Media Superior',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencreacioneducativa',
                name: 'Maestría en Creación Educativa',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaeneducacionparalaciudadania',
                name: 'Maestría en Educación para la Ciudadanía',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasenfisicaeducativa',
                name: 'Maestría en Ciencias en Física Educativa',
            },
        ],
        maestriaenpoliticacriminal: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'criminologia',
                name: 'Criminología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciaforense',
                name: 'Ciencia Forense',
            },
        ],
        maestriaenpsicologia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologia',
                name: 'Psicología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologiasocial',
                name: 'Psicología Social',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologiadeltrabajo',
                name: 'Psicología del Trabajo',
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
        ],
        maestriaentrabajosocial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'trabajosocial',
                name: 'Trabajo Social',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologiadeltrabajo',
                name: 'Psicología del Trabajo',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasensaluddelostrabajadores',
                name: 'Maestría en Ciencias en Salud de los Trabajadores',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenestudiosmultidisciplinariossobreeltrabajo',
                name: 'Maestría en Estudios Multidisciplinarios Sobre el Trabajo',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenpsicologiadeltrabajo',
                name: 'Maestría en Psicología del Trabajo',
            },
        ],
        maestriaenurbanismo: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'urbanismo',
                name: 'Urbanismo',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenmovilidadurbana',
                name: 'Ingeniería en Movilidad Urbana',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaendisenoyestudiosurbanos',
                name: 'Maestría en Diseño y Estudios Urbanos',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenarquitecturayurbanismo',
                name: 'Maestría en Ciencias en Arquitectura y Urbanismo',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenurbanismo',
                name: 'Doctorado en Urbanismo',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoendisenoyestudiosurbanos',
                name: 'Doctorado en Diseño y Estudios Urbanos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arquitectura',
                name: 'Arquitectura',
            },
        ],
        maestriaencienciasdelacomputacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasdelacomputacion',
                name: 'Ciencias de la Computación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaencomputacion',
                name: 'Ingeniería en Computación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'computacion',
                name: 'Computación',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaeingenieriadelacomputacion',
                name: 'Maestría en Ciencia e Ingeniería de la Computación',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaensistemascomputacionales',
                name: 'Maestría en Sistemas Computacionales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciaseningenieriadecomputo',
                name: 'Maestría en Ciencias en Ingeniería de Cómputo',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasensistemascomputacionalesmoviles',
                name: 'Maestría en Ciencias en Sistemas Computacionales Móviles',
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
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidadencomputodealtorendimiento',
                name: 'Especialidad en Cómputo de Alto Rendimiento',
            },
        ],
        maestriaencienciaseningenieriaelectromagnetica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaencomunicacionesyelectronica',
                name: 'Ingeniería en Comunicaciones y Electrónica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasdeingenieriaenmicroelectronica',
                name: 'Maestría en Ciencias de Ingeniería en Microelectrónica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseningenieriaelectronica',
                name: 'Maestría en Ciencias en Ingeniería Electrónica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaelectricayelectronica',
                name: 'Ingeniería Eléctrica y Electrónica',
            },
        ],
        maestriaeningenieriaestructural: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriacivil',
                name: 'Ingeniería Civil',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaeningenieriacivil',
                name: 'Maestría en Ingeniería Civil',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoeningenieriaestructural',
                name: 'Doctorado en Ingeniería Estructural',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasestructuras',
                name: 'Maestría en Ciencias (Estructuras)',
            },
        ],
        maestriaeningenieriadeprocesos: [
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoeningenieriadeprocesos',
                name: 'Doctorado en Ingeniería de Procesos',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadeningenieriamecanicaautomatizaciondeprocesosindustriales',
                name: 'Especialidad en Ingeniería Mecánica (Automatización de Procesos Industriales)',
            },
        ],
        maestriaenoptimizacion: [
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenoptimizacion',
                name: 'Doctorado en Optimización',
            },
        ],
        maestriaencienciaseingenieriaambientalesdemateriales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaambiental',
                name: 'Ingeniería Ambiental',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaensistemasambientales',
                name: 'Ingeniería en Sistemas Ambientales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicaambiental',
                name: 'Ingeniería Química Ambiental',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoencienciaseingenieriaambientalesdemateriales',
                name: 'Doctorado en Ciencias e Ingeniería (Ambientales, de Materiales)',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicaenmateriales',
                name: 'Ingeniería Química en Materiales',
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
        maestriaencienciasingenieriabiomedica: [
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
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasingenieriabiomedica',
                name: 'Doctorado en Ciencias (Ingeniería Biomédica)',
            },
        ],
        maestriaencienciasingenieriaquimica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimica',
                name: 'Ingeniería Química',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicametalurgica',
                name: 'Ingeniería Química Metalúrgica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicaenalimentos',
                name: 'Ingeniería Química en Alimentos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicaambiental',
                name: 'Ingeniería Química Ambiental',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicaenmateriales',
                name: 'Ingeniería Química en Materiales',
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
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaquimicapetrolera',
                name: 'Ingeniería Química Petrolera',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasingenieriaquimica',
                name: 'Doctorado en Ciencias (Ingeniería Química)',
            },
        ],
        maestriaencienciasmatematicasaplicadaseindustriales: [
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
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidadenestadisticaaplicada',
                name: 'Especialidad en Estadística Aplicada',
            },
        ],
        maestriaencienciasquimica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimica',
                name: 'Química',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasbioquimicas',
                name: 'Maestría en Ciencias Bioquímicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasquimicas',
                name: 'Maestría en Ciencias Químicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasingenieriaquimica',
                name: 'Maestría en Ciencias (Ingeniería Química)',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasquimicobiologicas',
                name: 'Maestría en Ciencias Químico Biológicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenquimicaclinicadiagnostica',
                name: 'Maestría en Química Clínica Diagnóstica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciaseningenieriaquimica',
                name: 'Maestría en Ciencias en Ingeniería Química',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasquimica',
                name: 'Doctorado en Ciencias (Química)',
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
        ],
        maestriaencienciasytecnologiasdelainformacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'informatica',
                name: 'Informática',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'tecnologiasparalainformacionenciencias',
                name: 'Tecnologías para la Información en Ciencias',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'tecnologiasysistemasdeinformacion',
                name: 'Tecnologías y Sistemas de Información',
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
                    'maestriaeningenieriaenseguridadytecnologiasdelainformacion',
                name: 'Maestría en Ingeniería en Seguridad y Tecnologías de la Información',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoencienciasytecnologiasdelainformacion',
                name: 'Doctorado en Ciencias y Tecnologías de la Información',
            },
        ],
        maestriaenenergiaymedioambiente: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenenergia',
                name: 'Ingeniería en Energía',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenenergiasrenovables',
                name: 'Ingeniería en Energías Renovables',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ingenieriaennegociosenergeticossustentables',
                name: 'Ingeniería en Negocios Energéticos Sustentables',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaeningenieriadehidrocarburosysusenergeticosasociados',
                name: 'Maestría en Ingeniería de Hidrocarburos y sus Energéticos Asociados',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenenergiaymedioambiente',
                name: 'Doctorado en Energía y Medio Ambiente',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasdelaenergia',
                name: 'Maestría en Ciencias de la Energía',
            },
        ],
        maestriaenbiologia: [
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
                normalizedDegreeName: 'microbiologia',
                name: 'Microbiología',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenbiologiadelareproduccionanimal',
                name: 'Maestría en Biología de la Reproducción Animal',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenbiologiaexperimental',
                name: 'Maestría en Biología Experimental',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasbiologicas',
                name: 'Maestría en Ciencias Biológicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasneurobiologia',
                name: 'Maestría en Ciencias (Neurobiología)',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasbiologicas',
                name: 'Doctorado en Ciencias Biológicas',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenbiologiaexperimental',
                name: 'Doctorado en Biología Experimental',
            },
        ],
        maestriaenbiologiaexperimental: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'biologiaexperimental',
                name: 'Biología Experimental',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenbiologiaexperimental',
                name: 'Doctorado en Biología Experimental',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'biologia',
                name: 'Biología',
            },
        ],
        maestriaenbiologiadelareproduccionanimal: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'produccionanimal',
                name: 'Producción Animal',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasdelaproduccionydelasaludanimal',
                name: 'Maestría en Ciencias de la Producción y de la Salud Animal',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaensaludyproduccionanimalsustentable',
                name: 'Maestría en Salud y Producción Animal Sustentable',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoencienciasdelaproduccionydelasaludanimal',
                name: 'Doctorado en Ciencias de la Producción y de la Salud Animal',
            },
        ],
        maestriaenbiotecnologia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenbiotecnologia',
                name: 'Ingeniería en Biotecnología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenagrobiotecnologia',
                name: 'Ingeniería en Agrobiotecnología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriabiotecnologica',
                name: 'Ingeniería Biotecnológica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenbiotecnologiaaplicada',
                name: 'Maestría en Biotecnología Aplicada',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenbiotecnologiaproductiva',
                name: 'Maestría en Biotecnología Productiva',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenbiomedicinaybiotecnologiamolecular',
                name: 'Maestría en Ciencias en Biomedicina y Biotecnología Molecular',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenbiotecnologiagenomica',
                name: 'Maestría en Ciencias en Biotecnología Genómica',
            },
        ],
        maestriaencienciasagropecuarias: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'agronomia',
                name: 'Agronomía',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracionagropecuaria',
                name: 'Administración Agropecuaria',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'planificacionparaeldesarrolloagropecuario',
                name: 'Planificación para el Desarrollo Agropecuario',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasagropecuarias',
                name: 'Doctorado en Ciencias Agropecuarias',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'produccionagropecuariasustentable',
                name: 'Producción Agropecuaria Sustentable',
            },
        ],
        maestriaencienciasfarmaceuticas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'farmacia',
                name: 'Farmacia',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicafarmaceuticabiologica',
                name: 'Química Farmacéutica Biológica',
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
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriafarmaceutica',
                name: 'Ingeniería Farmacéutica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasenfarmacologia',
                name: 'Maestría en Ciencias en Farmacología',
            },
        ],
        maestriaencienciasodontologicas: [
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
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoencienciasmedicasodontologicasydelasalud',
                name: 'Doctorado en Ciencias Médicas, Odontológicas y de la Salud',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cirujanodentista',
                name: 'Cirujano Dentista',
            },
        ],
        maestriaencienciasensaluddelostrabajadores: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'trabajosocial',
                name: 'Trabajo Social',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologiadeltrabajo',
                name: 'Psicología del Trabajo',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaentrabajosocial',
                name: 'Maestría en Trabajo Social',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenestudiosmultidisciplinariossobreeltrabajo',
                name: 'Maestría en Estudios Multidisciplinarios Sobre el Trabajo',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenpsicologiadeltrabajo',
                name: 'Maestría en Psicología del Trabajo',
            },
        ],
        maestriaenecologiaaplicada: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ecologia',
                name: 'Ecología',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenmanejoagroecologicodeplagasyenfermedades',
                name: 'Maestría en Ciencias en Manejo Agroecológico de Plagas y Enfermedades',
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
        ],
        maestriaenenfermeriadepracticaavanzada: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'enfermeria',
                name: 'Enfermería',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'enfermeriayobstetricia',
                name: 'Enfermería y Obstetricia',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenenfermeria',
                name: 'Maestría en Enfermería',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasdeenfermeria',
                name: 'Maestría en Ciencias de Enfermería',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenenfermeria',
                name: 'Doctorado en Enfermería',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidaddeenfermeriaencuidadosintensivos',
                name: 'Especialidad de Enfermería en Cuidados Intensivos',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidaddeenfermeriaengerontogeriatria',
                name: 'Especialidad de Enfermería en Gerontogeriatría',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidaddeenfermeriaperinatal',
                name: 'Especialidad de Enfermería Perinatal',
            },
        ],
        maestriaenmedicinasocial: [
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
                normalizedDegreeName: 'medicocirujano',
                name: 'Médico Cirujano',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadenurgenciasmedicoquirurgicas',
                name: 'Especialidad en Urgencias Médico Quirúrgicas',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadenmedicinadelaactividadfisicayeldeporte',
                name: 'Especialidad en Medicina de la Actividad Física y el Deporte',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidadenmedicinaforense',
                name: 'Especialidad en Medicina Forense',
            },
        ],
        maestriaenpatologiaymedicinabucal: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cirujanodentista',
                name: 'Cirujano Dentista',
            },
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
        maestriaenpoblacionysalud: [
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
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenmedicinasocial',
                name: 'Maestría en Medicina Social',
            },
        ],
        maestriaenrehabilitacionneurologica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'fisioterapia',
                name: 'Fisioterapia',
            },
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
        ],
        maestriaencienciasnaturaleseingenieria: [
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasnaturaleseingenieria',
                name: 'Doctorado en Ciencias Naturales e Ingeniería',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadencienciasnaturaleseingenieria',
                name: 'Especialidad en Ciencias Naturales e Ingeniería',
            },
        ],
        maestriaenhistoriografia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'historia',
                name: 'Historia',
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
                normalizedDegreeName: 'maestriaenestudioshistoricos',
                name: 'Maestría en Estudios Históricos',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenhistoria',
                name: 'Doctorado en Historia',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenhistoriografia',
                name: 'Doctorado en Historiografía',
            },
        ],
        maestriaenliteraturamexicanacontemporanea: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'lenguayliteraturashispanicas',
                name: 'Lengua y Literaturas Hispánicas',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadenliteraturamexicanadelsigloxx',
                name: 'Especialidad en Literatura Mexicana del Siglo XX',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'estudiosliterarios',
                name: 'Estudios Literarios',
            },
        ],
        maestriaenplaneacionypoliticasmetropolitanas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciaspoliticasyadministracionpublica',
                name: 'Ciencias Políticas y Administración Pública',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'politicaspublicas',
                name: 'Políticas Públicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaeneconomiagestionypoliticasdeinnovacion',
                name: 'Maestría en Economía, Gestión y Políticas de Innovación',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenpoliticaspublicas',
                name: 'Maestría en Políticas Públicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenadministracionypoliticaspublicas',
                name: 'Maestría en Administración y Políticas Públicas',
            },
        ],
        maestriaensociologia: [
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
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoensociologia',
                name: 'Doctorado en Sociología',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadensociologiadeeducacionsuperior',
                name: 'Especialidad en Sociología de Educación Superior',
            },
        ],
        maestriaencienciassocialesyhumanidades: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'humanidades',
                name: 'Humanídades',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'sociologia',
                name: 'Sociología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'trabajosocial',
                name: 'Trabajo Social',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'sociologiaaplicada',
                name: 'Sociologia Aplicada',
            },
        ],
        maestriaencienciasantropologicas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'antropologia',
                name: 'Antropología',
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
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenantropologia',
                name: 'Doctorado en Antropología',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaestudiosantropologicosensociedadescontemporaneas',
                name: 'Maestría Estudios Antropológicos en Sociedades Contemporáneas',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasantropologicas',
                name: 'Doctorado en Ciencias Antropológicas',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidadencienciasantropologicas',
                name: 'Especialidad en Ciencias Antropológicas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'sociologia',
                name: 'Sociología',
            },
        ],
        maestriaenestudiosorganizacionales: [
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoenintervencionenlasorganizaciones',
                name: 'Doctorado en Intervención en las Organizaciones',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenestudiosorganizacionales',
                name: 'Doctorado en Estudios Organizacionales',
            },
        ],
        maestriaenestudiossociales: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciassociales',
                name: 'Maestría en Ciencias Sociales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciassocialesyhumanidades',
                name: 'Maestría en Ciencias Sociales y Humanidades',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciassocialesyhumanidades',
                name: 'Doctorado en Ciencias Sociales y Humanidades',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenestudiossociales',
                name: 'Doctorado en Estudios Sociales',
            },
        ],
        maestriaenhumanidades: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'humanidades',
                name: 'Humanídades',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenhumanidades',
                name: 'Doctorado en Humanidades',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenestudiosinterdisciplinariosenarteyhumanidadesmeiah',
                name: 'Maestría en Estudios Interdisciplinarios en Arte y Humanidades (MEIAH)',
            },
        ],
        maestriaenpsicologiasocial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologiasocial',
                name: 'Psicología Social',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenmedicinasocial',
                name: 'Maestría en Medicina Social',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenpsicologiasocialdegruposeinstituciones',
                name: 'Maestría en Psicología Social de Grupos e Instituciones',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenpsicologiasocial',
                name: 'Doctorado en Psicología Social',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologia',
                name: 'Psicología',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologiadeltrabajo',
                name: 'Psicología del Trabajo',
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
        ],
        maestriaencienciassociales: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'sociologia',
                name: 'Sociología',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenestudiossociales',
                name: 'Maestría en Estudios Sociales',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenestudiossociales',
                name: 'Doctorado en Estudios Sociales',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciassociales',
                name: 'Doctorado en Ciencias Sociales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'antropologiasocial',
                name: 'Antropología Social',
            },
        ],
        maestriaencomunicacionypolitica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciapolitica',
                name: 'Ciencia Política',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'politicaspublicas',
                name: 'Políticas Públicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenpoliticaspublicas',
                name: 'Maestría en Políticas Públicas',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoengestionypoliticadeinnovacion',
                name: 'Doctorado en Gestión y Política de Innovación',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenadministracionypoliticaspublicas',
                name: 'Maestría en Administración y Políticas Públicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaeneconomiagestionypoliticasdeinnovacion',
                name: 'Maestría en Economía, Gestión y Políticas de Innovación',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenplaneacionypoliticasmetropolitanas',
                name: 'Maestría en Planeación y Políticas Metropolitanas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenestudiospoliticosysociales',
                name: 'Maestría en Estudios Políticos y Sociales',
            },
        ],
        maestriaendesarrolloyplaneaciondelaeducacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'innovacionygestioneducativa',
                name: 'Innovación y Gestión Educativa',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasdelaeducacion',
                name: 'Maestría en Ciencias de la Educación',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencreacioneducativa',
                name: 'Maestría en Creación Educativa',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenadministracionengestionydesarrollodelaeducacion',
                name: 'Maestría en Administración en Gestión y Desarrollo de la Educación',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadengestiondeinstitucioneseducativas',
                name: 'Especialidad en Gestión de Instituciones Educativas',
            },
        ],
        maestriaendesarrollorural: [
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
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'desarrolloterritorial',
                name: 'Desarrollo Territorial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'desarrollocomunitarioparaelenvejecimiento',
                name: 'Desarrollo Comunitario para el Envejecimiento',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'desarrolloygestioninterculturales',
                name: 'Desarrollo y Gestión Interculturales',
            },
        ],
        maestriaeneconomiagestionypoliticasdeinnovacion: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaengestioneinnovacionpublica',
                name: 'Maestría en Gestión e Innovación Pública',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaengestiondelainnovacion',
                name: 'Maestría en Gestión de la Innovación',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoengestionypoliticadeinnovacion',
                name: 'Doctorado en Gestión y Política de Innovación',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadengestionestrategicadelainnovacionydelapropiedadindustrial',
                name: 'Especialidad en Gestión Estratégica de la Innovación y de la Propiedad Industrial',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'economia',
                name: 'Economía',
            },
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
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciaseconomicas',
                name: 'Maestría en Ciencias Económicas',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoeneconomiagestionypoliticasdeinnovacion',
                name: 'Doctorado en Economía, Gestión y Políticas de Innovación',
            },
        ],
        maestriaenestudiosdelamujer: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'filosofia',
                name: 'Filosofía',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenfilosofia',
                name: 'Maestría en Filosofía',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenfilosofia',
                name: 'Doctorado en Filosofía',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenestudiosfeministas',
                name: 'Doctorado en Estudios Feministas',
            },
        ],
        maestriaenpoliticaspublicas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'politicaspublicas',
                name: 'Políticas Públicas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'gestionpublicaygobierno',
                name: 'Gestión Pública y Gobierno',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaengobiernoyasuntospublicos',
                name: 'Maestría en Gobierno y Asuntos Públicos',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaengestioneinnovacionpublica',
                name: 'Maestría en Gestión e Innovación Pública',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciaspoliticasyadministracionpublica',
                name: 'Ciencias Políticas y Administración Pública',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenadministracionpublicaestatalymunicipal',
                name: 'Maestría en Administración Pública Estatal y Municipal',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaeneconomiaygestionmunicipal',
                name: 'Maestría en Economía y Gestión Municipal',
            },
        ],
        maestriaenpsicologiasocialdegruposeinstituciones: [
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadengestiondeinstitucioneseducativas',
                name: 'Especialidad en Gestión de Instituciones Educativas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'psicologiasocial',
                name: 'Psicología Social',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenpsicologiasocial',
                name: 'Maestría en Psicología Social',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenpsicologiasocial',
                name: 'Doctorado en Psicología Social',
            },
        ],
        maestriaenrelacionesinternacionales: [
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
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenestrategiadenegociosinternacionales',
                name: 'Maestría en Estrategia de Negocios Internacionales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenestudiosenrelacionesinternacionales',
                name: 'Maestría en Estudios en Relaciones Internacionales',
            },
        ],
        maestriaensociedadessustentables: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'manejosustentabledezonascosteras',
                name: 'Manejo Sustentable de Zonas Costeras',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenodeproyectossustentables',
                name: 'Diseño de Proyectos Sustentables',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenestudiosambientalesydelasustentabilidad',
                name: 'Maestría en Ciencias en Estudios Ambientales y de la Sustentabilidad',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaensostenibilidadeinnovacionentecnologiaambiental',
                name: 'Maestría en Sostenibilidad e Innovación en Tecnología Ambiental',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasdelasostenibilidad',
                name: 'Maestría en Ciencias de la Sostenibilidad',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'turismoydesarrollosostenible',
                name: 'Turismo y Desarrollo Sostenible',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasdelasostenibilidad',
                name: 'Doctorado en Ciencias de la Sostenibilidad',
            },
        ],
        maestriaencienciaseconomicas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'economia',
                name: 'Economía',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaeneconomia',
                name: 'Maestría en Economía',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaeneconomiagestionypoliticasdeinnovacion',
                name: 'Maestría en Economía, Gestión y Políticas de Innovación',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaeneconomiaygestionmunicipal',
                name: 'Maestría en Economía y Gestión Municipal',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoeneconomia',
                name: 'Doctorado en Economía',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName: 'especialidadeneconomiaygestiondelagua',
                name: 'Especialidad en Economía y Gestión del Agua',
            },
        ],
        posgradointegralencienciasadministrativaspica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'administracion',
                name: 'Administración',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenadministracion',
                name: 'Maestría en Administración',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseconomicoadministrativas',
                name: 'Maestría en Ciencias Económico-Administrativas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenadministracionpublicaestatalymunicipal',
                name: 'Maestría en Administración Pública Estatal y Municipal',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenadministracionypoliticaspublicas',
                name: 'Maestría en Administración y Políticas Públicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenadministraciondenegocios',
                name: 'Maestría en Ciencias en Administración de Negocios',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasdelaadministracion',
                name: 'Doctorado en Ciencias de la Administración',
            },
            {
                degreeLevel: 'esp',
                normalizedDegreeName:
                    'especialidadenadministracionderiesgosfinancieros',
                name: 'Especialidad en Administración de Riesgos Financieros',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradointegralencienciasadministrativas',
                name: 'Doctorado Integral en Ciencias Administrativas',
            },
        ],
        maestriaendisenobioclimatico: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arquitectura',
                name: 'Arquitectura',
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
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenarquitectura',
                name: 'Doctorado en Arquitectura',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoendisenobioclimatico',
                name: 'Doctorado en Diseño Bioclimático',
            },
        ],
        maestriaendisenoydesarrollodeproductos: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasendesarrollodeproductosbioticos',
                name: 'Maestría en Ciencias en Desarrollo de Productos Bióticos',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoendisenoydesarrollodeproductos',
                name: 'Doctorado en Diseño y Desarrollo de Productos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenalimentos',
                name: 'Ingeniería en Alimentos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'quimicadealimentos',
                name: 'Química de Alimentos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaindustrial',
                name: 'Ingeniería Industrial',
            },
        ],
        maestriaendisenoyestudiosurbanos: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'urbanismo',
                name: 'Urbanismo',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenmovilidadurbana',
                name: 'Ingeniería en Movilidad Urbana',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenurbanismo',
                name: 'Maestría en Urbanismo',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciasenarquitecturayurbanismo',
                name: 'Maestría en Ciencias en Arquitectura y Urbanismo',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenurbanismo',
                name: 'Doctorado en Urbanismo',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoendisenoyestudiosurbanos',
                name: 'Doctorado en Diseño y Estudios Urbanos',
            },
        ],
        maestriaendisenoplanificacionyconservaciondepaisajesyjardines: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arquitecturadepaisaje',
                name: 'Arquitectura de Paisaje',
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
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaendisenobioclimatico',
                name: 'Maestría en Diseño Bioclimático',
            },
        ],
        maestriaendisenoparalarehabilitacionrecuperacionyconservaciondelpatrimonioconstruido:
            [
                {
                    degreeLevel: 'phd',
                    normalizedDegreeName:
                        'doctoradoendisenoparalarehabilitacionrecuperacionyconservaciondelpatrimonioconstruido',
                    name: 'Doctorado en Diseño para la Rehabilitación, Recuperación y Conservación del Patrimonio Construido',
                },
                {
                    degreeLevel: 'lic',
                    normalizedDegreeName: 'arquitectura',
                    name: 'Arquitectura',
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
                    degreeLevel: 'msc',
                    normalizedDegreeName:
                        'maestriaenconservacionyrestauracionarquitectonica',
                    name: 'Maestría en Conservación y Restauración Arquitectónica',
                },
                {
                    degreeLevel: 'esp',
                    normalizedDegreeName:
                        'especialidadenrestauracionarquitectonica',
                    name: 'Especialidad en Restauración Arquitectónica',
                },
                {
                    degreeLevel: 'lic',
                    normalizedDegreeName: 'ingenieriacivil',
                    name: 'Ingeniería Civil',
                },
                {
                    degreeLevel: 'msc',
                    normalizedDegreeName: 'maestriaeningenieriacivil',
                    name: 'Maestría en Ingeniería Civil',
                },
            ],
        maestriaendisenoyvisualizaciondelainformacion: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaendisenoinformacionycomunicacion',
                name: 'Maestría en Diseño, Información y Comunicación',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoendisenoyvisualizaciondelainformacion',
                name: 'Doctorado en Diseño y Visualización de la Información',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoencienciasytecnologiasdelainformacion',
                name: 'Doctorado en Ciencias y Tecnologías de la Información',
            },
        ],
        maestriaenprocesosculturalesparaeldisenoyelarte: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'diseno',
                name: 'Diseño',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenoycomunicacionvisual',
                name: 'Diseño y Comunicación Visual',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenodelacomunicaciongrafica',
                name: 'Diseño de la Comunicación Gráfica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'artesvisuales',
                name: 'Artes Visuales',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenartes',
                name: 'Maestría en Artes',
            },
        ],
        maestriaencienciasyartesparaeldiseno: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'diseno',
                name: 'Diseño',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenoycomunicacionvisual',
                name: 'Diseño y Comunicación Visual',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenodelacomunicaciongrafica',
                name: 'Diseño de la Comunicación Gráfica',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaendisenoeinnovacion',
                name: 'Maestría en Diseño e Innovación',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenartesydiseno',
                name: 'Doctorado en Artes y Diseño',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenartes',
                name: 'Maestría en Artes',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaendocenciaenartesydiseno',
                name: 'Maestría en Docencia en Artes y Diseño',
            },
        ],
        maestriaendisenoyproduccioneditorial: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'diseno',
                name: 'Diseño',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenografico',
                name: 'Diseño Gráfico',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaendisenoycomunicacionhipermedial',
                name: 'Maestría en Diseño y Comunicación Hipermedial',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasyartesparaeldiseno',
                name: 'Maestría en Ciencias y Artes para el Diseño',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaendisenoyvisualizaciondelainformacion',
                name: 'Maestría en Diseño y Visualización de la Información',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenprocesosculturalesparaeldisenoyelarte',
                name: 'Maestría en Procesos Culturales para el Diseño y el Arte',
            },
        ],
        maestriaenreutilizaciondelpatrimonioedificado: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenconservacionyrestauracionarquitectonica',
                name: 'Maestría en Conservación y Restauración Arquitectónica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arquitectura',
                name: 'Arquitectura',
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
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaendisenoparalarehabilitacionrecuperacionyconservaciondelpatrimonioconstruido',
                name: 'Maestría en Diseño para la Rehabilitación, Recuperación y Conservación del Patrimonio Construido',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoendisenoparalarehabilitacionrecuperacionyconservaciondelpatrimonioconstruido',
                name: 'Doctorado en Diseño para la Rehabilitación, Recuperación y Conservación del Patrimonio Construido',
            },
        ],
        maestriaendisenoinformacionycomunicacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'diseno',
                name: 'Diseño',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenoycomunicacionvisual',
                name: 'Diseño y Comunicación Visual',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenografico',
                name: 'Diseño Gráfico',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenodelacomunicaciongrafica',
                name: 'Diseño de la Comunicación Gráfica',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenartesydiseno',
                name: 'Doctorado en Artes y Diseño',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaendisenoyproduccioneditorial',
                name: 'Maestría en Diseño y Producción Editorial',
            },
        ],
        maestriaenadministracionpublicaestatalymunicipal: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'politicaspublicas',
                name: 'Políticas Públicas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'gestionpublicaygobierno',
                name: 'Gestión Pública y Gobierno',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaengobiernoyasuntospublicos',
                name: 'Maestría en Gobierno y Asuntos Públicos',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaengestioneinnovacionpublica',
                name: 'Maestría en Gestión e Innovación Pública',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaenadministracionypoliticaspublicas',
                name: 'Maestría en Administración y Políticas Públicas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaeneconomiaygestionmunicipal',
                name: 'Maestría en Economía y Gestión Municipal',
            },
        ],
        maestriaenaprendizajedelalenguaylasmatematicas: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName:
                    'ensenanzadealemanespanolfrancesinglesoitalianocomolenguaextranjera',
                name: 'Enseñanza de (Alemán; Español; Francés; Inglés o Italiano) como Lengua Extranjera',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'profesorasociadoenlaensenanzadelenguas',
                name: 'Profesor Asociado en la Enseñanza de Lenguas',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenensenanzadelenguasycultura',
                name: 'Maestría en Enseñanza de Lenguas y Cultura',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaendocenciaparalaeducacionmediasuperior',
                name: 'Maestría en Docencia para la Educación Media Superior',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaendesarrolloyplaneaciondelaeducacion',
                name: 'Maestría en Desarrollo y Planeación de la Educación',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasdelaeducacion',
                name: 'Maestría en Ciencias de la Educación',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasenfisicaeducativa',
                name: 'Maestría en Ciencias en Física Educativa',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasenmatematicaeducativa',
                name: 'Maestría en Ciencias en Matemática Educativa',
            },
        ],
        maestriaenartecontemporaneoyculturavisual: [
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
                normalizedDegreeName: 'arteydiseno',
                name: 'Arte y Diseño',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasyartesparaeldiseno',
                name: 'Maestría en Ciencias y Artes para el Diseño',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'disenoycomunicacionvisual',
                name: 'Diseño y Comunicación Visual',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaenartesvisuales',
                name: 'Maestría en Artes Visuales',
            },
        ],
        maestriaenarteparalaeducacion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'artesvisuales',
                name: 'Artes Visuales',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arteydiseno',
                name: 'Arte y Diseño',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasdelaeducacion',
                name: 'Maestría en Ciencias de la Educación',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'educacionmusical',
                name: 'Educación Musical',
            },
        ],
        maestriaencienciadedatos: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasdedatos',
                name: 'Ciencias de Datos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciadedatos',
                name: 'Ciencia de Datos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaeninteligenciaartificial',
                name: 'Ingeniería en Inteligencia Artificial',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaencienciaseninteligenciaartificial',
                name: 'Maestría en Ciencias en Inteligencia Artificial',
            },
        ],
        maestriaencienciaytecnologiaambiental: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaambiental',
                name: 'Ingeniería Ambiental',
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
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciashidrologiaambiental',
                name: 'Maestría en Ciencias (Hidrología Ambiental)',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName:
                    'maestriaensostenibilidadeinnovacionentecnologiaambiental',
                name: 'Maestría en Sostenibilidad e Innovación en Tecnología Ambiental',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName:
                    'doctoradoencienciaseingenieriaambientalesdemateriales',
                name: 'Doctorado en Ciencias e Ingeniería (Ambientales, de Materiales)',
            },
        ],
        maestriaencienciaytecnologiadealimentos: [
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
                normalizedDegreeName: 'quimicadealimentos',
                name: 'Química de Alimentos',
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
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriadelosalimentos',
                name: 'Ingeniería de los Alimentos',
            },
        ],
        maestriaencienciasconstruccion: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriacivil',
                name: 'Ingeniería Civil',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaeningenieriacivil',
                name: 'Maestría en Ingeniería Civil',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arquitectura',
                name: 'Arquitectura',
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
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoenarquitectura',
                name: 'Doctorado en Arquitectura',
            },
        ],
        maestriaencienciasestructuras: [
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaeningenieriaestructural',
                name: 'Maestría en Ingeniería Estructural',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoeningenieriaestructural',
                name: 'Doctorado en Ingeniería Estructural',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriacivil',
                name: 'Ingeniería Civil',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaeningenieriacivil',
                name: 'Maestría en Ingeniería Civil',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'arquitectura',
                name: 'Arquitectura',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieroarquitecto',
                name: 'Ingeniero Arquitecto',
            },
        ],
        maestriaencienciasgeotecnia: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'geociencias',
                name: 'Geociencias',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageologica',
                name: 'Ingeniería Geológica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageofisica',
                name: 'Ingeniería Geofísica',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriageomatica',
                name: 'Ingeniería Geomática',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'cienciasdelatierra',
                name: 'Ciencias de la Tierra',
            },
            {
                degreeLevel: 'msc',
                normalizedDegreeName: 'maestriaencienciasdelatierra',
                name: 'Maestría en Ciencias de la Tierra',
            },
            {
                degreeLevel: 'phd',
                normalizedDegreeName: 'doctoradoencienciasdelatierra',
                name: 'Doctorado en Ciencias de la Tierra',
            },
        ],
        maestriaencienciashidrologiaambiental: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriaenrecursoshidricos',
                name: 'Ingeniería en Recursos Hídricos',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriahidrologica',
                name: 'Ingeniería Hidrológica',
            },
        ],
        maestriaencienciasingenieriamatematica: [
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'matematicasaplicadas',
                name: 'Matemáticas Aplicadas',
            },
            {
                degreeLevel: 'lic',
                normalizedDegreeName: 'ingenieriafisica',
                name: 'Ingeniería Física',
            },
        ],
    },
    phd: {},
    esp: {},
    tsu: {},
};
