export class Animal {
    species: string;
    sound: string;

    constructor(species: string, sound: string) {
        this.species = species;
        this.sound = sound;
    }

    makeSound(): string {
        return this.sound;
    }
}