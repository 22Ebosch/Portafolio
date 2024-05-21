//VEHICLES
class VEHICLE {
    marca;
    model;
    any;

    constructor(marca, model, any) {
        this.marca = marca;
        this.model = model;
        this.any = any;
    }

    obtenirdetalls() {
        let detall = [this.marca, this.model, this.any];
        return detall;
    }
}

//AUTOMOVIL
class AUTOMOVIL extends VEHICLE {
    numeroPortes;
    tipusCombustible;

    constructor(marca, model, any, numeroPortes, tipusCombustible) {
        super(marca, model, any);
        this.numeroPortes = numeroPortes;
        this.tipusCombustible = tipusCombustible;
    }

    obtenirdetalls() {
        let detall = super.obtenirdetalls();
        detall.push(this.numeroPortes)
        detall.push(this.tipusCombustible)
        return detall;
    }
}

//MOTOCICLETA
class MOTOCICLETA extends VEHICLE {
    cilindrada;

    constructor(marca, model, any, cilindrada) {
        super(marca, model, any);
        this.cilindrada = cilindrada
    }

    obtenirdetalls() {
        let detall = super.obtenirdetalls();
        detall.push(this.cilindrada)
        return detall
    }


}
//FLOTA
class FLOTA {

    flota = []

    afegirVehicle(elemento) {
        this.flota.push(elemento)
    }

    obtenirDetallsFlota() {
        let lista = []
        for (let vehiculo of this.flota) {
            lista.push(vehiculo.obtenirdetalls())
        }
        return lista;
    }

}

let vehiculo1 = new VEHICLE('BMW', ' M4', ' 2023');
let coche1 = new AUTOMOVIL('Ford', ' Mustang', ' 2022', ' 2', ' SP95')
let moto1 = new MOTOCICLETA('Kawasaki', ' ZP800', ' 2020', ' 1000')
let flota = new FLOTA;

flota.afegirVehicle(vehiculo1);
flota.afegirVehicle(coche1);
flota.afegirVehicle(moto1);

let lista = document.getElementById('lista');
let detallesFlota = flota.obtenirDetallsFlota();

for (let detalle of detallesFlota) {
    let elemento = document.createElement('li');
    let text = document.createTextNode(detalle);
    elemento.appendChild(text);
    lista.appendChild(elemento);
}
