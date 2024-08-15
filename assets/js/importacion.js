export class Importacion {
    constructor(idEmpresa, idImportacion, producto, numeroProductos, precioUnitario) {
        this.idEmpresa = idEmpresa;
        this.idImportacion = idImportacion;
        this.producto = producto;
        this.numeroProductos = numeroProductos;
        this.precioUnitario = precioUnitario;
    }

    getIdEmpresa() {
        return this.idEmpresa;
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
        return this.numeroProductos * this.precioUnitario;
    }
}
