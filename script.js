"use strict";

// Запитуємо дані
let name = prompt("Введи своє ім'я:");
let age = prompt("Введи свій вік:");
let city = prompt("З якого ти міста?");
let color = prompt("Твій улюблений колір?");
let isWorking = confirm("Ти працюєш?");

// Перетворення віку в число
age = Number(age);

// Перевірка повноліття
let isAdult = age >= 18;

// Вивід типів
console.log("Тип name:", typeof name);
console.log("Тип age:", typeof age);
console.log("Тип city:", typeof city);
console.log("Тип color:", typeof color);
console.log("Тип isWorking:", typeof isWorking);

// Вивід результату
alert(
    "Ім'я: " + name + "\n" +
    "Вік: " + age + "\n" +
    "Місто: " + city + "\n" +
    "Колір: " + color + "\n" +
    "Працює: " + isWorking + "\n" +
    "Повнолітній: " + isAdult
);
