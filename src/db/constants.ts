export const TABLE_NAMES = {
    user: 'User',
    institution: 'Institution',
    degreeTitle: 'DegreeTitle',
    employer: 'Employer',
    laboralArea: 'LaboralArea',
    laboralAreaPosition: 'LaboralAreaPosition',
    userDegree: 'UserDegree',
    userJob: 'UserJob',
};

export const STUDY_LEVEL_NAMES = {
    tsu: { id: 'tsu', displayName: 'Técnico Superior Universitario' },
    lic: { id: 'lic', displayName: 'Licenciatura' },
    esp: { id: 'esp', displayName: 'Especialidad' },
    msc: { id: 'msc', displayName: 'Maestría' },
    phd: { id: 'phd', displayName: 'Doctorado' },
    postdoc: { id: 'postdoc', displayName: 'Posdoctorado' },
} as const;

export const MEXICAN_STATES = {
    ags: 'Aguascalientes',
    baja: 'Baja California',
    bajaSur: 'Baja California Sur',
    camp: 'Campeche',
    chia: 'Chiapas',
    chi: 'Chihuahua',
    cdmx: 'Ciudad de México',
    coah: 'Coahuila de Zaragoza',
    col: 'Colima',
    dur: 'Durango',
    gto: 'Guanajuato',
    gro: 'Guerrero',
    hgo: 'Hidalgo',
    jal: 'Jalisco',
    edomex: 'Estado de México',
    mich: 'Michoacán de Ocampo',
    mor: 'Morelos',
    nay: 'Nayarit',
    nvoLeon: 'Nuevo León',
    oax: 'Oaxaca',
    pue: 'Puebla',
    qro: 'Querétaro',
    qroo: 'Quintana Roo',
    slp: 'San Luis Potosí',
    sin: 'Sinaloa',
    son: 'Sonora',
    tab: 'Tabasco',
    tamps: 'Tamaulipas',
    tlax: 'Tlaxcala',
    ver: 'Veracruz de Ignacio de la Llave',
    yuc: 'Yucatán',
    zac: 'Zacatecas',
} as const;

export const LABORAL_SITUATION = {
    full: 'Tiempo completo',
    mid: 'Medio tiempo',
    independent: 'Empleado independiente',
    autoemployment: 'Autoempleo',
} as const;

export const USER_GENDER = {
    male: 'Masculino',
    female: 'Femenino',
    other: 'Otro',
} as const;
