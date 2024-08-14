export './main.js';

// Validación del idEmpresa (solo números)
function validarIdEmpresa(idEmpresa) {
    var regexRUT = /^\d+$/;
    return regexRUT.test(idEmpresa);
}

// Validación del nombre de la empresa (solo letras y espacios)
function validarnombreEmpresa(nombre) {
    var regexNombre = /^[a-zA-Z\s]+$/;
    return regexNombre.test(nombre);
}

// Validación del RUT de la empresa (solo números)
function validarRutEmpresa(rut) {
    var regexRUT = /^\d+$/;
    return regexRUT.test(rut);
}
// Validación del idImportación (solo números)
function validarIdEmpresa(idProducto) {
    var regexRUT = /^\d+$/;
    return regexRUT.test(idProducto);
}
// Validación del nombre del Producto (solo letras y espacios)
function validarProducto(nombreProducto) {
    var regexNombre = /^[a-zA-Z\s]+$/;
    return regexNombre.test(nombreProducto);
}
// Validación del número del producto(solo números)
function validarNumeroProducto(numeroProducto) {
    var regexRUT = /^\d+$/;
    return regexRUT.test(numeroProducto);
}
// Validación del precio del producto(solo números)
function validarPrecioProducto(precioProducto) {
    var regexRUT = /^\d+$/;
    return regexRUT.test(precioProducto);
}
    