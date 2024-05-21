const HTML_ESCAPE_MAP = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
};
const HTML_TEXT_TO_REPLACE_REGEXP = /[<>'"]/g;
const escapeHTML = (input) =>
    input.replace(
        HTML_TEXT_TO_REPLACE_REGEXP,
        (match) => HTML_ESCAPE_MAP[match]
    );

const NEXT_LINE_REGEXP = /\r\b|\r\/n/g;
const DOUBLE_SPACE_REGEXP = /\s+/g;

class SafeHTML {
    constructor(inStr) {
        this.string = inStr ?? '';
    }
    [Symbol.toPrimitive]() {
        return this.string
            .replace(NEXT_LINE_REGEXP, '')
            .replace(DOUBLE_SPACE_REGEXP, ' ');
    }
    toString() {
        return this.string
            .replace(NEXT_LINE_REGEXP, '')
            .replace(DOUBLE_SPACE_REGEXP, ' ');
    }
}

/** Recursive function to sanitize HTML elements */
const sanitizeHTML = (item) => {
    if (item === null || item === undefined || typeof item === 'boolean') {
        return '';
    } else if (item instanceof SafeHTML) {
        return item;
    } else if (typeof item === 'object' && Array.isArray(item)) {
        const sanitizedArray = item.map((subItem) => sanitizeHTML(subItem));
        return new SafeHTML(sanitizedArray.join(''));
    }

    return escapeHTML(item.toString());
};

const html = (stringArray, ...placeholders) => {
    const sanitizedPlaceholders = placeholders.map((placeHolderItem) =>
        sanitizeHTML(placeHolderItem)
    );

    const out = String.raw(stringArray, ...sanitizedPlaceholders);
    return new SafeHTML(out);
};

window.html = html;
