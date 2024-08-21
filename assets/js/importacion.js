export class Importacion {
    constructor(idImportacion, producto, numeroProductos, precioUnitario) {
        this.idImportacion = idImportacion;
        this.producto = producto;
        this.numeroProductos = numeroProductos;
        this.precioUnitario = precioUnitario;
    }
    
    getIdImportacion() {
        return this.idImportacion;
    }

    getProducto() {
        return this.producto;
    }

    getNumeroProductos() {
        return this.numeroProductos;
    }

    getPrecioUnitario() {
        return this.precioUnitario;
    }

    calcularTotal() {

        return parseInt(this.numeroProductos) * parseInt(this.precioUnitario);
    }
}
