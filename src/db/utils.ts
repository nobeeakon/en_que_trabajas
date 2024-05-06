export const getDateISOString = () => new Date().toISOString();

/**
 * Adjusts case (lower), removes diacritics (normalize NFD), removes spaces, removes signs (comma, point, semicolon, colon, parenthesis, etc. ).
 * Based on https://medium.com/@ievgenii.shulitskyi/string-data-normalization-and-similarity-matching-algorithms-4b7b1734798e
 */
export const normalizeString = (text: string) =>
    text
        .trim()
        .toLowerCase()
        .normalize('NFD') // split an accented letter in the base letter and the acent
        .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
        .replace(/\s+/g, '')
        .replace(/[\.\,\;\:]/g, '')
        .replace(/[\_\-]/g, '')
        .replace(/[\(\)\{\}\[\]]/g, '') // parenthesis and similars
        .replace(/[\!\@\#\$\%\^\&\+\=\?\¿\¡\~\°\§\<\>\*]/g, ''); // random signs

/**
 * removes additional spaces
 */
export const stringCleanSpaces = (text: string) =>
    text.trim().replace(/s+/g, ' ');
