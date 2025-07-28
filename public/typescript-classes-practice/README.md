# TypeScript Classes Practice

This project is designed to practice and demonstrate the use of classes in TypeScript. It includes several classes that represent different entities, showcasing how to define and use classes effectively.

## Project Structure

```
typescript-classes-practice
├── src
│   ├── index.ts          # Entry point of the application
│   ├── classes           # Directory containing class definitions
│   │   ├── Person.ts     # Class representing a person
│   │   ├── Vehicle.ts    # Class representing a vehicle
│   │   └── Animal.ts     # Class representing an animal
│   └── types             # Directory for type definitions
│       └── index.ts      # Type definitions for the project
├── package.json          # NPM configuration file
├── tsconfig.json         # TypeScript configuration file
└── README.md             # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd typescript-classes-practice
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Compile TypeScript files**:
   ```bash
   npx tsc
   ```

4. **Run the application**:
   ```bash
   node dist/index.js
   ```

## Classes Overview

- **Person**: Represents a person with a name and age. It includes methods to get the name and age.
- **Vehicle**: Represents a vehicle with make, model, and year. It includes a method to get the vehicle's details.
- **Animal**: Represents an animal with species and sound. It includes a method to make the sound of the animal.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or additional features.