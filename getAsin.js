const ASIN_REGEX = /^[0-9a-z]+$/i;

/**
 * 
 * @param {string} url 
 * @returns {string | bool} ASIN if found, false otherwise
 */
function getAsin(url) {
    if (url.indexOf('?') !== -1) {
        url = url.substring(0, url.indexOf('?'))
    }
    const asinMatches = url.split('/').filter(isAsin);
    return asinMatches.length === 1 ? asinMatches[0] : false;
}

/**
 * 
 * @param {string} input
 * @return {bool} isAsin 
 */
function isAsin(input) {
    return !!input && input.length === 10 && input.match(ASIN_REGEX);
}


module.exports = {
    getAsin,
}