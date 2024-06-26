import InstitutionModel from '../models/InstitutionModel';
import DegreeTitleModel from '../models/DegreeTitleModel';
import { STUDY_LEVEL_NAMES } from '../constants';

const INSTITUTIONS = [
    'Universidad Nacional Autónoma de México  (UNAM)',
    'Instituto Politécnico Nacional (IPN)',
    'Universidad Autónoma Metropolitana (UAM)',
    'Universidad Autónoma Agraria Antonio Narro (UAAAN)',
    'Universidad Autónoma de Chapingo (UACh)',
    'Universidad Abierta y a Distancia de México (UnADM)',
    'Universidad Pedagógica Nacional (UPN)',
    'El Colegio de México (COLMEX)',
    'Centro de Investigación y Docencia Económicas, A.C. (CIDE)',
    'Universidad Autónoma de Aguascalientes (UAA)',
    'Universidad Autónoma de Baja California (UABC)',
    'Universidad Autónoma de Baja California Sur (UABCS)',
    'Universidad Autónoma de Campeche (UACAM)',
    'Universidad Autónoma del Carmen (UNACAR)',
    'Universidad Autónoma de Coahuila (UADEC)',
    'Universidad de Colima (UCOL)',
    'Universidad Autónoma de Chiapas (UNACH)',
    'Universidad Autónoma de Chihuahua (UACH)',
    'Universidad Autónoma de Ciudad Juárez (UACJ)',
    'Universidad Juárez del Estado de Durango (UJED)',
    'Universidad de Guanajuato (UGTO)',
    'Universidad Autónoma de Guerrero (UAGRO)',
    'Universidad Autónoma del Estado de Hidalgo (UAEH)',
    'Universidad de Guadalajara (UDG)',
    'Universidad Autónoma del Estado de México (UAEMEX)',
    'Universidad de Michoacana de San Nicolás Hidalgo (UMICH)',
    'Universidad Autónoma del Estado de Morelos (UAEM)',
    'Universidad Autónoma de Nayarit (UAN)',
    'Universidad Autónoma de Nuevo León (UANL)',
    'Universidad Autónoma Benito Juárez de Oaxaca (UABJO)',
    'Benemérita Universidad Autónoma de Puebla (BUAP)',
    'Universidad Autónoma de Querétaro (UAQ)',
    'Universidad Autónoma de Quintana Roo (UQROO)',
    'Universidad Autónoma de San Luis Potosí (UASLP)',
    'Universidad Autónoma de Sinaloa (UAS)',
    'Universidad de Sonora (USON)',
    'Instituto Tecnológico de Sonora (ITSON)',
    'Universidad Juárez Autónoma de Tabasco (UJAT)',
    'Universidad Autónoma de Tamaulipas (UAT)',
    'Universidad Autónoma de Tlaxcala (UATX)',
    'Universidad Veracruzana (UV)',
    'Universidad Autónoma de Yucatán (UADY)',
    'Universidad Autónoma de Zacatecas (UAZ)',
    'Universidad Marista',
    'Instituto Tecnológico Autónomo de México (ITAM)',
    'Universidad Intercontinental',
    'Universidad Simón Bolivar',
    'Universidad Iberoamericana',
    'Universidad del Valle de México (UVM)',
    'Universidad del Valle de Atemajac (UNIVA)',
    'Universidad Autónoma de Guadalajara (UAG)',
    'Universidad de Celaya',
    'Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)',
    'Universidad Autónoma de Occidente (UADO)',
    'Universidad Panamericana',
    'Universidad Anahuac',
    'Instituto Tecnológico y de Estudios Superiores de Occidente (ITESO)',
    'Universidad de las Américas Puebla (UDLAP)',
    'Universidad La Salle',
    'Universidad Tecnológica de México (UNITEC)',
    'Universidad TecMilenio',
    'Escuela Libre de Derecho',
    'Escuela Bancaria y Comercial',
];

const CARRERAS = [
    'Actuaría',
    'Administración',
    'Administración Agropecuaria',
    'Administración de Archivos y Gestión Documental',
    'Antropología',
    'Arquitectura',
    'Arquitectura de Paisaje',
    'Arte y Diseño',
    'Artes Visuales',
    'Bibliotecología y Estudios de la información',
    'Biología',
    'Bioquímica Diagnóstica',
    'Canto',
    'Ciencia de la Nutrición Humana',
    'Ciencia de Materiales Sustentables',
    'Ciencia Forense',
    'Ciencias Agroforestales',
    'Ciencias Agrogenómicas',
    'Ciencias Ambientales',
    'Ciencias de Datos',
    'Ciencias de la Computación',
    'Ciencias de la Comunicación',
    'Ciencias de la Tierra',
    'Ciencias Genómicas',
    'Ciencias Políticas y Administración Pública',
    'Cirujano Dentista',
    'Composición',
    'Comunicación',
    'Comunicación y Periodismo',
    'Contaduría',
    'Derecho',
    'Desarrollo Comunitario para el Envejecimiento',
    'Desarrollo Territorial',
    'Desarrollo y Gestión Interculturales',
    'Diseño Gráfico',
    'Diseño Industrial',
    'Diseño y Comunicación Visual',
    'Ecología',
    'Economía',
    'Economía Industrial',
    'Educación Musical',
    'Enfermería',
    'Enfermería y Obstetricia',
    'Enseñanza de (Alemán; Español; Francés; Inglés o Italiano) como Lengua Extranjera',
    'Enseñanza de Inglés',
    'Estudios Latinoamericanos',
    'Estudios Sociales y Gestión Local',
    'Etnomusicología',
    'Farmacia',
    'Filosofía',
    'Física',
    'Física Biomédica',
    'Fisioterapia',
    'Geociencias',
    'Geografía',
    'Geografía Aplicada',
    'Geohistoria',
    'Historia',
    'Historia del Arte',
    'Informática',
    'Ingeniería Aeroespacial',
    'Ingeniería Agrícola',
    'Ingeniería Ambiental',
    'Ingeniería Civil',
    'Ingeniería de Minas y Metalurgia',
    'Ingeniería Eléctrica y Electrónica',
    'Ingeniería en Alimentos',
    'Ingeniería en Computación',
    'Ingeniería en Energías Renovables',
    'Ingeniería en Sistemas Biomédicos',
    'Ingeniería en Telecomunicaciones',
    'Ingeniería en Telecomunicaciones, Sistemas y Electrónica',
    'Ingeniería Geofísica',
    'Ingeniería Geológica',
    'Ingeniería Geomática',
    'Ingeniería Industrial',
    'Ingeniería Mecánica',
    'Ingeniería Mecánica Eléctrica',
    'Ingeniería Mecatrónica',
    'Ingeniería Petrolera',
    'Ingeniería Química',
    'Ingeniería Química Metalúrgica',
    'Instrumentista',
    'Investigación Biomédica Básica',
    'Lengua y Literaturas Hispánicas',
    'Lengua y Literaturas Modernas Alemanas',
    'Lengua y Literaturas Modernas Francesas',
    'Lengua y Literaturas Modernas Inglesas',
    'Lengua y Literaturas Modernas Italianas',
    'Lengua y Literaturas Modernas Portuguesas',
    'Letras Clásicas',
    'Lingüística Aplicada',
    'Literatura Dramática y Teatro',
    'Literatura Intercultural',
    'Manejo Sustentable de Zonas Costeras',
    'Matemáticas',
    'Matemáticas Aplicadas',
    'Matemáticas Aplicadas y Computación',
    'Matemáticas para el Desarrollo',
    'Medicina Veterinaria y Zootecnia',
    'Médico Cirujano',
    'Música y Tecnología Artistica',
    'Nanotecnología',
    'Negocios Internacionales',
    'Neurociencias',
    'Nutriología',
    'Odontología',
    'Optometría',
    'Órtesis y Prótesis',
    'Pedagogía',
    'Piano',
    'Planificación para el Desarrollo Agropecuario',
    'Psicología',
    'Química',
    'Química de Alimentos',
    'Química e Ingeniería en Materiales',
    'Química Farmacéutico Biológica',
    'Química Industrial',
    'Relaciones Internacionales',
    'Sociología',
    'Sociologia Aplicada',
    'Teatro y Actuación',
    'Tecnología',
    'Tecnologías para la Información en Ciencias',
    'Trabajo Social',
    'Traducción',
    'Turismo y Desarrollo Sostenible',
    'Urbanismo',
    'Agronomía',
    'Antropología Social',
    'Arte y Comunicación Digitales',
    'Biología Ambiental',
    'Biología Experimental',
    'Biología Molecular',
    'Ciencia y Tecnología de Alimentos',
    'Ciencias Atmosféricas',
    'Ciencia Política',
    'Computación',
    'Comunicación Social',
    'Diseño',
    'Diseño de la Comunicación Gráfica',
    'Diseño de Proyectos Sustentables',
    'Educación y Tecnologías Digitales',
    'Estomatología',
    'Estudios Socioterritoriales',
    'Geografía Humana',
    'Hidrobiología',
    'Humanídades',
    'Ingeniería de los Alimentos',
    'Ingeniería Biológica',
    'Ingeniería Biomédica',
    'Ingeniería Bioquímica Industrial',
    'Ingeniería en Computación y Telecomunicaciones',
    'Ingeniería Eléctrica',
    'Ingeniería Electrónica',
    'Ingeniería en Energía',
    'Ingeniería Física',
    'Ingeniería Hidrológica',
    'Ingeniería Metalúrgica',
    'Ingeniería en Recursos Hídricos',
    'Ingeniería en Sistemas Mecatrónicos Industriales',
    'Letras Hispánicas',
    'Lingüística',
    'Medicina',
    'Nutrición Humana',
    'Planeación Territorial',
    'Política y Gestión Social',
    'Políticas Públicas',
    'Producción Animal',
    'Psicología Biomédica',
    'Psicología Social',
    'Química Farmacéutica Biológica',
    'Tecnologías y Sistemas de Información',
    'Contador Público',
    'Ingeniería Agroindustrial',
    'Ingeniería de Software',
    'Ingeniería Electromecánica',
    'Ingeniería en Automatización',
    'Ingeniería en Biotecnología',
    'Ingeniería en Nanotecnología',
    'Ingeniería en Telecomunicaciones y Redes',
    'Ingeniería Industrial y de Manufactura',
    'Ingeniería Mecánica y Automotriz',
    'Ingeniería Química en Alimentos',
    'Administración en Tecnologías de Información',
    'Administración Financiera',
    'Arte Danzario',
    'Artes Visuales con Especialidad en Artes Plásticas',
    'Ciencias de la Seguridad',
    'Composición Musical para Medios Audiovisuales y Escénicos',
    'Criminología',
    'Danza Folklórica Mexicana',
    'Desarrollo Humano para la Sustentabilidad',
    'Desarrollo Local y Profesional Asociado en Desarrollo Local',
    'Economía Empresarial',
    'Educación Física y Ciencias del Deporte',
    'Estudios Literarios',
    'Gastronomía',
    'Geografía Ambiental',
    'Gestión del Turismo Cultural y Natural',
    'Gestión Pública y Gobierno',
    'Gestión y Desarrollo de Empresas Sociales',
    'Horticultura Ambiental',
    'Humanidades y producción de Imágenes',
    'Ingeniería en Agrobiotecnología',
    'Ingeniería Química Ambiental',
    'Ingeniería Química en Materiales',
    'Innovación y Gestión Educativa',
    'Lenguas Modernas del Francés',
    'Lenguas Modernas en Español',
    'Lenguas Modernas Inglés',
    'Medicina General',
    'Microbiología',
    'Música',
    'Música Popular Contemporánea',
    'Negocios Turísticos',
    'Negocios y Comercio Internacional',
    'Nutrición',
    'Producción Agropecuaria Sustentable',
    'Psicología del Trabajo',
    'Psicología Educativa',
    'Psicologia Social',
    'Químico Farmacéutico Biólogo',
    'Restauración de Bienes Muebles',
    'Profesor Asociado en la Enseñanza de Lenguas',
    'Actuación',
    'Ingeniería Aeronáutica',
    'Ingeniería Ambiental',
    'Ingeniería Biomédica',
    'Ingeniería Biónica',
    'Ingeniería Bioquímica',
    'Ingeniería Biotecnológica',
    'Ingeniería Civil',
    'Ingeniería Eléctrica',
    'Ingeniería en Alimentos',
    'Ingeniería en Computación',
    'Ingeniería en Comunicaciones y Electrónica',
    'Ingeniería en Control y Automatización',
    'Ingeniería en Energía',
    'Ingeniería en Informática',
    'Ingeniería en Inteligencia Artificial',
    'Ingeniería en Metalurgia y Materiales',
    'Ingeniería en Movilidad Urbana',
    'Ingeniería en Negocios Energéticos Sustentables',
    'Ingeniería en Robótica Industrial',
    'Ingeniería en Sistemas Ambientales',
    'Ingeniería en Sistemas Automotrices',
    'Ingeniería en Sistemas Computacionales',
    'Ingeniería en Sistemas Energéticos y Redes Inteligentes',
    'Ingeniería en Transporte',
    'Ingeniería Farmacéutica',
    'Ingeniería Ferroviaria',
    'Ingeniería Fotónica',
    'Ingeniería Geofísica',
    'Ingeniería Geológica',
    'Ingeniería Industrial',
    'Ingeniería Matemática',
    'Ingeniería Mecánica',
    'Ingeniería Mecatrónica',
    'Ingeniería Metalúrgica',
    'Ingeniería Petrolera',
    'Ingeniería Química Industrial',
    'Ingeniería Química Petrolera',
    'Ingeniería Telemática',
    'Ingeniería Textil',
    'Ingeniería Topográfica y Fotogramétrica',
    'Ingeniero Arquitecto',
    'Ciencia de Datos',
    'Ciencias de la Informática',
    'Física y Matemáticas',
    'Matemática Algorítmica',
    'Biología',
    'Enfermería',
    'Enfermería y Obstetricia',
    'Nutrición',
    'Odontología',
    'Optometría',
    'Psicología',
    'Trabajo Social',
    'Médico Cirujano Homeópata',
    'Médico Cirujano Partero',
    'Químico Bacteriólogo y Parasitólogo',
    'Quimico Farmacéutico Industrial',
    'Contador Público',
    'Administración Industrial',
    'Administración y Desarrollo Empresarial',
    'Archivonomía',
    'Biblioteconomía',
    'Economía',
    'Mercadotecnia Digital',
    'Negocios Digitales',
    'Negocios Internacionales',
    'Relaciones Comerciales',
    'Turismo',
    'Turismo Sustentable',
    'Contador Público',
    'Administración y Desarrollo Empresarial',
    'Archivonomía',
    'Biblioteconomía',
    'Comercio Internacional',
    'Contaduría y Finanzas Públicas',
    'Negocios Internacionales',
    'Relaciones Comerciales',
    'Turismo',
];

const MAESTRIAS = [
    'Maestría en Administración',
    'Maestría en Alta Dirección',
    'Maestría en Antropología',
    'Maestría en Arquitectura',
    'Maestría en Artes Visuales',
    'Maestría en Astrofísica',
    'Maestría en Auditoría',
    'Maestría en Bibliotecología y Estudios de la Información',
    'Maestría en Ciencia e Ingeniería de la Computación',
    'Maestría en Ciencia e Ingeniería de Materiales',
    'Maestría en Ciencias (Física Médica)',
    'Maestría en Ciencias (Física)',
    'Maestría en Ciencias (Neurobiología)',
    'Maestría en Ciencias Biológicas',
    'Maestría en Ciencias Bioquímicas',
    'Maestría en Ciencias de la Producción y de la Salud Animal',
    'Maestría en Ciencias de la Sostenibilidad',
    'Maestría en Ciencias de la Tierra',
    'Maestría en Ciencias del Mar y Limnología',
    'Maestría en Ciencias Matemáticas',
    'Maestría en Ciencias Médicas, Odontológicas y de la Salud',
    'Maestría en Ciencias Químicas',
    'Maestría en Cine Documental',
    'Maestría en Comunicación',
    'Maestría en Demografía Social',
    'Maestría en Derecho',
    'Maestría en Diseño Industrial',
    'Maestría en Diseño y Comunicación Visual',
    'Maestría en Docencia en Artes y Diseño',
    'Maestría en Docencia para la Educación Media Superior',
    'Maestría en Economía',
    'Maestría en Enfermería',
    'Maestría en Estudios de Género',
    'Maestría en Estudios en Relaciones Internacionales',
    'Maestría en Estudios Latinoamericanos',
    'Maestría en Estudios Mesoamericanos',
    'Maestría en Estudios México-Estados Unidos',
    'Maestría en Estudios Políticos y Sociales',
    'Maestría en Filosofía',
    'Maestría en Filosofía de la Ciencia',
    'Maestría en Finanzas',
    'Maestría en Geografía',
    'Maestría en Gobierno y Asuntos Públicos',
    'Maestría en Historia',
    'Maestría en Historia del Arte',
    'Maestría en Informática Administrativa',
    'Maestría en Ingeniería',
    'Maestría en Letras',
    'Maestría en Lingüística Aplicada',
    'Maestría en Lingüística Hispánica',
    'Maestría en Medicina Veterinaria y Zootecnia',
    'Maestría en Música',
    'Maestría en Pedagogía',
    'Maestría en Política Criminal',
    'Maestría en Psicología',
    'Maestría en Trabajo Social',
    'Maestría en Urbanismo',
    'Maestría en Ciencias de la Computación',
    'Maestría en Ciencias en Ingeniería Electromagnética',
    'Maestría en Ingeniería Estructural',
    'Maestría en Ingeniería de Procesos',
    'Maestría en Optimización',
    'Maestría en Ciencias e Ingeniería (Ambientales, de Materiales)',
    'Maestría en Ciencias (Física)',
    'Maestría en Ciencias (Ingeniería Biomédica)',
    'Maestría en Ciencias (Ingeniería Química)',
    'Maestría en Ciencias (Matemáticas)',
    'Maestría en Ciencias (Matemáticas Aplicadas e Industriales)',
    'Maestría en Ciencias (Química)',
    'Maestría en Ciencias y Tecnologías de la Información',
    'Maestría en Energía y Medio Ambiente',
    'Maestría en Biología',
    'Maestría en Biología Experimental',
    'Maestría en Biología de la Reproducción Animal',
    'Maestría en Biotecnología',
    'Maestría en Energía y Medio Ambiente',
    'Maestría en Ciencias Agropecuarias',
    'Maestría en Ciencias Farmacéuticas',
    'Maestría en Ciencias Odontológicas',
    'Maestría en Ciencias en Salud de los Trabajadores',
    'Maestría en Ecología Aplicada',
    'Maestría en Enfermería de Práctica Avanzada',
    'Maestría en Medicina Social',
    'Maestría en Patología y Medicina Bucal',
    'Maestría en Población y Salud',
    'Maestría en Rehabilitación Neurológica',
    'Maestría en Ciencias Naturales e Ingeniería',
    'Maestría en Derecho',
    'Maestría en Economía',
    'Maestría en Historiografía',
    'Maestría en Literatura Mexicana Contemporánea',
    'Maestría en Planeación y Políticas Metropolitanas',
    'Maestría en Sociología',
    'Maestría en Ciencias Sociales y Humanidades',
    'Maestría en Ciencias Antropológicas',
    'Maestría en Estudios Organizacionales',
    'Maestría en Estudios Sociales',
    'Maestría en Humanidades',
    'Maestría en Psicología Social',
    'Maestría en Ciencias Sociales',
    'Maestría en Comunicación y Política',
    'Maestría en Desarrollo y Planeación de la Educación',
    'Maestría en Desarrollo Rural',
    'Maestría en Economía, Gestión y Políticas de Innovación ',
    'Maestría en Estudios de la Mujer',
    'Maestría en Políticas Públicas',
    'Maestría en Psicología Social de Grupos e Instituciones',
    'Maestría en Relaciones Internacionales',
    'Maestría en Sociedades Sustentables',
    'Maestría en Ciencias Económicas',
    'Posgrado Integral en Ciencias Administrativas (PICA)',
    'Maestría en Diseño Bioclimático',
    'Maestría en Diseño y Desarrollo de Productos',
    'Maestría en Diseño y Estudios Urbanos',
    'Maestría en Diseño, Planificación y Conservación de Paisajes y Jardines',
    'Maestría en Diseño para la Rehabilitación, Recuperación y Conservación del Patrimonio Construido',
    'Maestría en Diseño y Visualización de la Información',
    'Maestría en Procesos Culturales para el Diseño y el Arte',
    'Maestría en Ciencias y Artes para el Diseño',
    'Maestría en Diseño y Producción Editorial',
    'Maestría en Reutilización del Patrimonio Edificado',
    'Maestría en Diseño, Información y Comunicación',
    'Maestría en Administración',
    'Maestría en Administración Pública Estatal y Municipal',
    'Maestría en Aprendizaje de la Lengua y las Matemáticas',
    'Maestría en Arquitectura',
    'Maestría en Arte Contemporáneo y Cultura Visual',
    'Maestría en Arte para la Educación',
    'Maestría en Ciencia de Datos',
    'Maestría en Ciencia y Tecnología Ambiental',
    'Maestría en Ciencia y Tecnología de Alimentos',
    'Maestría en Ciencias (Construcción)',
    'Maestría en Ciencias (Estructuras)',
    'Maestría en Ciencias (Geotecnia)',
    'Maestría en Ciencias (Hidrología Ambiental)',
    'Maestría en Ciencias (Ingeniería Matemática)',
    'Maestría en Ciencias (Instrumentación y Control Automático)',
    'Maestría en Ciencias (Mecatrónica)',
    'Maestría en Ciencias (Nanotecnología)',
    'Maestría en Ciencias Biológicas',
    'Maestría en Ciencias de Enfermería',
    'Maestría en Ciencias de la Computación',
    'Maestría en Ciencias de la Educación',
    'Maestría en Ciencias de la Energía',
    'Maestría en Ciencias de la Nutrición Humana',
    'Maestría en Ciencias de la Rehabilitación en el Movimiento Humano',
    'Maestría en Ciencias Económico-Administrativas',
    'Maestría en Ciencias en Biomedicina',
    'Maestría en Ciencias en Inteligencia Artificial',
    'Maestría en Ciencias en Neurometabolismo',
    'Maestría en Ciencias en Tecnologías Sustentables',
    'Maestría en Ciencias Jurídicas',
    'Maestría en Ciencias Químico Biológicas',
    'Maestría en Ciencias Sociales',
    'Maestría en Comunicación y Cultura Digital',
    'Maestría en Creación Educativa',
    'Maestría en Derecho',
    'Maestría en Derechos Humanos',
    'Maestría en Didáctica de las Ciencias (Modalidad virtual)',
    'Maestría en Didáctica de las Matemáticas y de las Ciencias',
    'Maestría en Dirección y Gestión de Proyectos Artísticos y Culturales',
    'Maestría en Diseño e Innovación',
    'Maestría en Diseño y Comunicación Hipermedial',
    'Maestría en Educación para la Ciudadanía',
    'Maestría en el Manejo Clínico Avanzado de Heridas, Estomas y Quemaduras',
    'Maestría en Emergencias y Desastres',
    'Maestría en Enfermería',
    'Maestría en Enseñanza de Lenguas y Cultura',
    'Maestría en Enseñanza en Estudios Literarios',
    'Maestría en Estrategia de Negocios Internacionales',
    'Maestría en Estudios Amerindios y Educación Bilingüe',
    'Maestría en Estudios de Género',
    'Maestría en Estudios Históricos',
    'Maestría en Estudios Interdisciplinarios en Arte y Humanidades (MEIAH)',
    'Maestría en Estudios Multidisciplinarios Sobre el Trabajo',
    'Maestría en Ética Aplicada y Bioética',
    'Maestría en Filosofía Contemporánea Aplicada',
    'Maestría en Gestión de la Tecnología',
    'Maestría en Gestión e Innovación Pública',
    'Maestría en Gestión Integrada de Cuencas',
    'Maestría en Impuestos',
    'Maestría en Ingeniería de Calidad y Productividad',
    'Maestría en Ingeniería de Vías Terrestres',
    'Maestría en Ingeniería en Biosistemas',
    'Maestría en Innovación en Entornos Virtuales de Enseñanza-Aprendizaje',
    'Maestría en Investigación Médica',
    'Maestría en Lingüística',
    'Maestría en Nutrición Clínica Integral',
    'Maestría en Psicología Clínica',
    'Maestría en Psicología del Trabajo',
    'Maestría en Química Clínica Diagnóstica',
    'Maestría en salud mental de la infancia y la adolescencia',
    'Maestría en Salud y Producción Animal Sustentable',
    'Maestría en Sistemas Computacionales',
    'Maestría en Sistemas de Información Gestión y Tecnología',
    'Maestría en Software Embebido',
    'Maestría Estudios Antropológicos en Sociedades Contemporáneas',
    'Maestría en Artes',
    'Maestría en Administración',
    'Maestría en Administración de Empresas para la Sustentabilidad',
    'Maestría en Administración e Innovación del Turismo',
    'Maestría en Administración en Gestión y Desarrollo de la Educación',
    'Maestría en Administración y Políticas Públicas',
    'Maestría en Biociencias',
    'Maestría en Bioética',
    'Maestría en Biotecnología Aplicada',
    'Maestría en Biotecnología Productiva',
    'Maestría en Ciencia y Tecnología de Vacunas y Bioterapéuticos',
    'Maestría en Ciencias de Ingeniería en Microelectrónica',
    'Maestría en Ciencias de Ingeniería en Sistemas Energéticos',
    'Maestría en Ciencias de la Computación',
    'Maestría en Ciencias de la Salud',
    'Maestría en Ciencias Económicas',
    'Maestría en Ciencias en Administración de Negocios',
    'Maestría en Ciencias en Administración de Negocios',
    'Maestría en Ciencias en Alimentos',
    'Maestría en Ciencias en Arquitectura y Urbanismo',
    'Maestría en Ciencias en Biomedicina Molecular',
    'Maestría en Ciencias en Biomedicina y Biotecnología Molecular',
    'Maestría en Ciencias en Bioprocesos',
    'Maestría en Ciencias en Biotecnología Genómica',
    'Maestría en Ciencias en Conservación y Aprovechamiento de Recursos Naturales',
    'Maestría en Ciencias en Desarrollo de Productos Bióticos',
    'Maestría en Ciencias en Estudios Ambientales y de la Sustentabilidad',
    'Maestría en Ciencias en Estudios Interdisciplinarios para Pequeñas y Medianas Empresas',
    'Maestría en Ciencias en Farmacología',
    'Maestría en Ciencias en Física Educativa',
    'Maestría en Ciencias en Gestión Ambiental',
    'Maestría en Ciencias en Ingeniería Aeronáutica y Espacial',
    'Maestría en Ciencias en Ingeniería Aeronáutica, opción: mantenimiento y producción',
    'Maestría en Ciencias en Ingeniería de Cómputo',
    'Maestría en Ciencias en Ingeniería de Sistemas',
    'Maestría en Ciencias en Ingeniería de Telecomunicaciones',
    'Maestría en Ciencias en Ingeniería Eléctrica',
    'Maestría en Ciencias en Ingeniería Electrónica',
    'Maestría en Ciencias en Ingeniería en Producción más Limpia',
    'Maestría en Ciencias en Ingeniería Mecánica',
    'Maestría en Ciencias en Ingeniería Metalúrgica',
    'Maestría en Ciencias en Ingeniería Química',
    'Maestría en Ciencias en Inmunología',
    'Maestría en Ciencias en Manejo Agroecológico de Plagas y Enfermedades',
    'Maestría en Ciencias en Manejo de Recursos Marinos',
    'Maestría en Ciencias en Matemática Educativa',
    'Maestría en Ciencias en Metodología de la Ciencia',
    'Maestría en Ciencias en Producción Agrícola Sustentable',
    'Maestría en Ciencias en Salud Ocupacional, Seguridad e Higiene',
    'Maestría en Ciencias en Sistemas Computacionales Móviles',
    'Maestría en Ciencias en Sistemas Digitales',
    'Maestría en Ciencias en Termofluidos',
    'Maestría en Ciencias Fisicomatemáticas',
    'Maestría en Ciencias Quimicobiológicas',
    'Maestría en Conservación y Restauración Arquitectónica',
    'Maestría en Docencia Científica y Tecnológica',
    'Maestría en Economía y Gestión Municipal',
    'Maestría en Geociencias y Administración de Recursos Naturales',
    'Maestría en Gestión de la Innovación',
    'Maestría en Gestión de Proyectos para el Desarrollo Solidario',
    'Maestría en Informática',
    'Maestría en Ingeniería Civil',
    'Maestría en Ingeniería de Hidrocarburos y sus Energéticos Asociados',
    'Maestría en Ingeniería de Manufactura',
    'Maestría en Ingeniería en Seguridad y Tecnologías de la Información',
    'Maestría en Ingeniería Industrial',
    'Maestría en Intervención Psicológica',
    'Maestría en Recursos Naturales y Medio Ambiente',
    'Maestría en Sostenibilidad e Innovación en Tecnología Ambiental',
    'Maestría en Tecnología Avanzada',
    'Maestría en Tecnología de Cómputo',
];

const PHDS = [
    'Doctorado en Antropología',
    'Doctorado en Arquitectura',
    'Doctorado en Artes y Diseño',
    'Doctorado en Astrofísica',
    'Doctorado en Bibliotecología y Estudios de la Información',
    'Doctorado en Ciencia e Ingeniería de la Computación',
    'Doctorado en Ciencia e Ingeniería de Materiales',
    'Doctorado en Ciencias (Física)',
    'Doctorado en Ciencias Biológicas',
    'Doctorado en Ciencias Biomédicas',
    'Doctorado en Ciencias Bioquímicas',
    'Doctorado en Ciencias de la Administración',
    'Doctorado en Ciencias de la Producción y de la Salud Animal',
    'Doctorado en Ciencias de la Sostenibilidad',
    'Doctorado en Ciencias de la Tierra',
    'Doctorado en Ciencias del Mar y Limnología',
    'Doctorado en Ciencias Matemáticas',
    'Doctorado en Ciencias Médicas, Odontológicas y de la Salud',
    'Doctorado en Ciencias Políticas y Sociales',
    'Doctorado en Ciencias Químicas',
    'Doctorado en Derecho',
    'Doctorado en Economía',
    'Doctorado en Enfermería',
    'Doctorado en Estudios de Género',
    'Doctorado en Estudios Latinoamericanos',
    'Doctorado en Estudios Mesoamericanos',
    'Doctorado en Filosofía',
    'Doctorado en Filosofía de la Ciencia',
    'Doctorado en Geografía',
    'Doctorado en Historia',
    'Doctorado en Historia del Arte',
    'Doctorado en Ingeniería',
    'Doctorado en Letras',
    'Doctorado en Lingüística',
    'Doctorado en Música',
    'Doctorado en Pedagogía',
    'Doctorado en Psicología',
    'Doctorado en Urbanismo',
    'Doctorado en Ingeniería Estructural',
    'Doctorado en Ingeniería de Procesos',
    'Doctorado en Optimización',
    'Doctorado en Ciencias e Ingeniería (Ambientales, de Materiales)',
    'Doctorado en Ciencias (Física)',
    'Doctorado en Ciencias (Ingeniería Biomédica)',
    'Doctorado en Ciencias (Ingeniería Química)',
    'Doctorado en Ciencias (Matemáticas)',
    'Doctorado en Ciencias (Química)',
    'Doctorado en Ciencias y Tecnologías\nde la Información',
    'Doctorado en Energía y Medio Ambiente',
    'Doctorado en Biología Experimental',
    'Doctorado en Biotecnología',
    'Doctorado en Energía y Medio Ambiente',
    'Doctorado en Ciencias Agropecuarias',
    'Doctorado en Ciencias Farmacéuticas',
    'Doctorado en Ciencias en Salud Colectiva',
    'Doctorado en Ciencias Biológicas y de la Salud',
    'Doctorado en Ciencias Biológicas y de la Salud',
    'Doctorado en Ciencias Naturales e Ingeniería',
    'Doctorado en Intervención en las Organizaciones',
    'Doctorado en Sociología',
    'Doctorado en Historiografía',
    'Doctorado en Ciencias Sociales y Humanidades',
    'Doctorado en Ciencias Antropológicas',
    'Doctorado en Economía, Gestión y Políticas de Innovación',
    'Doctorado en Estudios Organizacionales',
    'Doctorado en Estudios Sociales',
    'Doctorado en Humanidades',
    'Doctorado en Ciencias Sociales',
    'Doctorado en Ciencias Sociales',
    'Doctorado en Desarrollo Rural',
    'Doctorado en Estudios Feministas',
    'Doctorado en Humanidades',
    'Doctorado en Psicología Social',
    'Doctorado en Ciencias Económicas',
    'Doctorado Integral en Ciencias Administrativas',
    'Doctorado en Diseño Bioclimático',
    'Doctorado en Diseño y Desarrollo de Productos',
    'Doctorado en Diseño y Estudios Urbanos',
    'Doctorado en Diseño, Planificación y Conservación de Paisajes y Jardines',
    'Doctorado en Diseño para la Rehabilitación, Recuperación y Conservación del Patrimonio Construido',
    'Doctorado en Diseño y Visualización de la Información',
    'Doctorado en Procesos Culturales para el Diseño y el Arte',
    'Doctorado en Ciencias y Artes para el Diseño',
    'Doctorado en Ciencias Quimicobiológicas',
    'Doctorado en Comunicaciones y Electrónica',
    'Doctorado en Energía',
    'Doctorado en Física de los Materiales',
    'Doctorado en Gestión y Política de Innovación',
    'Doctorado en Ingeniería de Sistemas',
    'Doctorado en Ingeniería de Sistemas Robóticos y Mecatrónicos',
    'Doctorado en Innovación en Ambientes Locales',
    'Doctorado en Investigación en Medicina',
    'Doctorado en Nanociencias y Micro-Nanotecnología',
    'Doctorado en Tecnología Avanzada',
];

const ESPECIALIZACIONES = [
    'Especialidad en Cómputo de Alto Rendimiento',
    'Especialidad en Estadística Aplicada',
    'Especialidad en Estudios de Género',
    'Especialidad en Historia del Arte',
    'Especialidad en Diseño Ambiental',
    'Especialidad en Diseño, Planificación y Conservación de Paisajes y Jardines',
    'Especialidad en Economía y Gestión del Agua',
    'Especialidad en Etnografía Política y Espacio Público',
    'Especialidad en Literatura Mexicana del Siglo XX',
    'Especialidad en Sociología de Educación Superior',
    'Especialidad en Ciencias Naturales e Ingeniería',
    'Especialidad en Acupuntura y Fitoterapia',
    'Especialidad en Biotecnología',
    'Especialidad en Ciencias Antropológicas',
    'Especialidad en Física Médica Clínica',
    'Especialidad en Políticas Culturales y Gestión Cultural',
    'Especialidad en Desarrollo Rural',
    'Especialidad en Población y Salud',
    'Especialidad de Enfermería en Cuidados Intensivos',
    'Especialidad de Enfermería en Gerontogeriatría',
    'Especialidad de Enfermería Perinatal',
    'Especialidad en Acupuntura Humana',
    'Especialidad en Administración de Riesgos Financieros',
    'Especialidad en Anestesiología para los Servicios Rurales de Salud',
    'Especialidad en Finanzas',
    'Especialidad en Geriatría',
    'Especialidad en Gestión de Ambientes Costeros',
    'Especialidad en Gestión Estratégica de la Innovación y de la Propiedad Industrial',
    'Especialidad en Hematopatología',
    'Especialidad en Impuestos',
    'Especialidad en Ingeniería Mecánica (Automatización de Procesos Industriales)',
    'Especialidad en Ingeniería Mecánica (Ingeniería de Proyecto Mecánico)',
    'Especialidad en Ingeniería para el Desarrollo de Sistemas de Manufactura',
    'Especialidad en Lentes de Contacto',
    'Especialidad en Manejo Nutricio de la Obesidad y el Síndrome Metabólico',
    'Especialidad en Marketing Estratégico en los Negocios',
    'Especialidad en Medicina de la Actividad Física y el Deporte',
    'Especialidad en Medicina Forense',
    'Especialidad en Nutrición y Alimentos Funcionales',
    'Especialidad en Restauración Arquitectónica',
    'Especialidad en Seguridad Informática y Tecnologías de la Información',
    'Especialidad en Tecnología Avanzada',
    'Especialidad en Terapéutica Homeopática',
    'Especialidad en Urgencias Médico Quirúrgicas',
    'Especialidad en Valuación Inmobiliaria',
    'Especialidad en Gestión de Instituciones Educativas',
];

const DOUBLE_SPACING_REGEXP = /\s+/g;
const cleanSpacing = (text: string) =>
    text.trim().replace(DOUBLE_SPACING_REGEXP, ' ');
const cleanList = (textItems: string[]) => [
    ...new Set(textItems.map(cleanSpacing)),
];

const seed = async () => {
    for (let institution of cleanList(INSTITUTIONS)) {
        await InstitutionModel.createIfNotExists({ name: institution });
    }

    for (let lic of cleanList(CARRERAS)) {
        await DegreeTitleModel.createIfNotExists({
            name: lic,
            degreeLevel: STUDY_LEVEL_NAMES.lic.id,
        });
    }

    for (let mscItem of cleanList(MAESTRIAS)) {
        await DegreeTitleModel.createIfNotExists({
            name: mscItem,
            degreeLevel: STUDY_LEVEL_NAMES.msc.id,
        });
    }

    for (let phdItem of cleanList(PHDS)) {
        await DegreeTitleModel.createIfNotExists({
            name: phdItem,
            degreeLevel: STUDY_LEVEL_NAMES.phd.id,
        });
    }

    for (let especialtyItem of cleanList(ESPECIALIZACIONES)) {
        await DegreeTitleModel.createIfNotExists({
            name: especialtyItem,
            degreeLevel: STUDY_LEVEL_NAMES.esp.id,
        });
    }
};

seed();
