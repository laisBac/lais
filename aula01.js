//Classe
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
}

//Objeto
const cachorro = new Animal('Rex');

//Atributo
console.log(cachorro.nome); // "Rex"

// Método
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        return `${this.nome} faz barulho.`;
    }
}

// Herança
class Cachorro extends Animal {
    falar() {
        return `${this.nome} late.`;
    }
}

// Polimorfismo
const gato = new Animal('Miau');
const pets = [cachorro, gato];
pets.forEach(pet => console.log(pet.falar()));