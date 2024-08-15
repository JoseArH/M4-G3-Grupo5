export class Empresa {
    constructor(idEmpresa, nombre, rut,rubro,tamano) {
        this.idEmpresa = idEmpresa;
        this.nombre = nombre;
        this.rut = rut;
        this.rubro = rubro;
        this.tamano = tamano;
        this.importaciones = [];
    }

    getIdEmpresa() {
        return this.idEmpresa;
    }

    getNombre() {
        return this.nombre;
    }

    getRut() {
        return this.rut;
    }

    getRubro(){
        return this.rubro;
    }

    getTamano(){
        return this.tamano;
    }

    agregarImportacion(importacion) {
        this.importaciones.push(importacion);
    }
}
