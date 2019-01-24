import sanitizeHTML from 'sanitize-html';

export function sanitize(val) {
    return sanitizeHTML(val, { allowedTags: [] });
}
