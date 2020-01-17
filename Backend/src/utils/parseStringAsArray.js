module.exports = function parseStringAsArray(arrayAsString) {    
    return arrayAsString ? arrayAsString.split(',').map(item => item.trim()) : [];
}