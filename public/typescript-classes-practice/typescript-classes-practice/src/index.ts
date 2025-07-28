// This file is the entry point of the application. It imports classes from the 'classes' directory and may contain code to instantiate and use those classes.

import { Person } from './classes/Person';
import { Vehicle } from './classes/Vehicle';
import { Animal } from './classes/Animal';

// Example usage
const person = new Person('John Doe', 30);
console.log(person.getName()); // Output: John Doe
console.log(person.getAge()); // Output: 30

const vehicle = new Vehicle('Toyota', 'Corolla', 2020);
console.log(vehicle.getDetails()); // Output: 2020 Toyota Corolla

const animal = new Animal('Dog', 'Bark');
console.log(animal.makeSound()); // Output: Bark