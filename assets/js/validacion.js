// Validación del idEmpresa (solo números)
export function validarIdEmpresa(idEmpresa) {
    var regexRUT = /^\d+$/;
    return regexRUT.test(idEmpresa);
}

// Validación del nombre de la empresa (solo letras y espacios)
export function validarnombreEmpresa(nombre) {
    var regexNombre = /^[a-zA-Z\s]+$/;
    return regexNombre.test(nombre);
}

// Validación del RUT de la empresa (solo números)
export function validarRutEmpresa(rut) {
    var regexRUT = /^\d+$/;
    return regexRUT.test(rut);
}

// Validación del idProducto (solo números)
export function validarIdProducto(idProducto) {
    var regexRUT = /^\d+$/;
    return regexRUT.test(idProducto);
}

// Validación del nombre del Producto (solo letras y espacios)
export function validarProducto(nombreProducto) {
    var regexNombre = /^[a-zA-Z\s]+$/;
    return regexNombre.test(nombreProducto);
}

// Validación del número del producto (solo números)
export function validarNumeroProducto(numeroProducto) {
    var regexRUT = /^\d+$/;
    return regexRUT.test(numeroProducto);
}

// Validación del precio del producto (solo números)
export function validarPrecioProducto(precioProducto) {
    var regexRUT = /^\d+$/;
    return regexRUT.test(precioProducto);
}
