class Persona {
    constructor(nombre, apellidos, edad, genero) {
        this.nombre = nombre,
            this.apellidos = apellidos,
            this.edad = edad,
            this.genero = genero
    }

    getNombre() {
        return this.nombre;
    };

    getApellidos() {
        return this.apellidos;
    }

    getEdad() {
        return this.edad;
    }

    getGenero() {
        return this.genero;
    }
};

// const persona1 = new Persona('Panchito', 'Flores', '19', 'H');

// const persona2 = new Persona("Marco", "Tulio", "23", "H");

// const persona3 = new Persona("Pablo", "Lepe Lopez", "41", "H");

// const persona4 = new Persona("Monica", "Gomez Lugo", "21", "M");

// const persona5 = new Persona("Blanca", "Prieto Martinez", "27", "M");

// console.log(persona1.getNombre());
// console.log(persona1.getApellidos());
// console.log(persona1.getEdad());
// console.log(persona1.getGenero());


module.exports = { Persona };