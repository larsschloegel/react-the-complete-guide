// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

//Primitives

let age: number = 23;

age = 20;

let userName: string;

userName = "John";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Music', 'Cooking'];

let person: {
    name: string;
    age: number;
};

person = {
    name: "John",
    age: 30
};

/*person = {
    isEmployee: true,
}*/

// Type inference

//let course = 'React - Them Complete Guide';

//course = 12341;

//Using Union Types

let course: string | number = 'React - Them Complete Guide';

course = 12341;

type Person = {
    name: string;
    age: number;
}

let person1: Person;
