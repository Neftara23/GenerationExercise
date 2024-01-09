/** Ejercicio para esta sesion
 * 
 * Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
 * Pueden variar entre las palabras reservadas var, let y const
 *      -number
 *      -string
 *      -boolean
 * 
 */


let year = 1999;
let day = 29;
let worstYear = 2019;
let actualAge = 2024 - year;
let exampleMultiplication = year * day;
let exampleDivision = worstYear / year;
let weight = 100;
let height = 176;
let eyeSight = 5;
let health = 8;
var month = "January";
const MY_NAME = "Neftali";
const STILL_STUDYING = "Always";
var myMusic = "Rock";
var hobby = "Writing";
let movieFav = "Her";
let bestSong = "Touch";
let bestBand = "Daft Punk";
let bestBook = "Ender's Game";
let bestFood = "Bistek tacos";
let isMarried = false;
let engineer = false;
let cold = true;
let depressed = false;
var hope = true;
let feelGood = true;
let coke = true;
let water = true;
let rainyDays = true;
let earlyBird = false;

/**
* Declarar variables numericas y realizar las operaciones aritmeticas basicas
*      -suma
*      -resta
*      -multiplicacion
*      -division
**/

let otherAge = worstYear -  year; //Subtraction
console.log("When I lived my worst year I was " + otherAge );
let otherAdd = day + year;
console.log("This is an addition of mi birthday and my birthyear: " + otherAdd); //Addition
console.log("Im currently " + actualAge); //Subtraction
console.log("This is what you get if you multiply my birthyear and my birthday: " + exampleMultiplication); //Multiplication
console.log("On the other hand, if you divide my worst year and miy birth year you´ll get this: " + exampleDivision); //Division
console.log("Quite annoying number actually");
/**
 * Declarar variables que concatenen cadenas de texto
      -5 mensajes diferentes en pantalla, sin limite de palabras.
 */

let whatIsMe = MY_NAME + STILL_STUDYING + myMusic;
console.log("This is a synthesis of what I am: " + whatIsMe);
let fridayFood = STILL_STUDYING +  bestFood; 
console.log("The best friday night food is: " + fridayFood);
let bestOfArt = movieFav + bestSong;
console.log("What I like the most about art is " + bestOfArt);
let motto = STILL_STUDYING + hobby;
console.log("One of my mottos is " + motto);
let musicalPreferences = myMusic +  bestBand;
console.log("My musical preferences are " + musicalPreferences);

/** Declarar 5 variables y convertirlas a otro tipo de dato */

let nombre = "451";
let edad = 22;
let condicion = true;
let money = "1500";

let edadString = String(edad);
let nombreNumerico = Number(nombre);
let condicionNumerico = Number(condicion);
let moneyNumber = Number(money);
let moneyString = String(money);

