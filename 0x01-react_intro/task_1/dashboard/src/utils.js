function getFullYear() {
    return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'ALX';
    } else {
        return 'ALX main dashboard';
    }
}

export { getFullYear, getFooterCopy };