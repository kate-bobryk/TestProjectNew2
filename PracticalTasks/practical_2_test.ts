Feature('Practical Task Number 2 - Strings');

Scenario("PZ2 Strings", () => {

const firstString: string = "In TypeScript, the string is sequence of char values and also considered as an object.";
const secondString: string = "It is a type of primitive data type that is used to store text data.";
console.log(firstString.toLowerCase());
console.log(firstString[0].toLowerCase());
//console.log(firstString.replace(firstString[0], firstString[0].toLowerCase()));
console.log(secondString.toUpperCase());
const result: string = `${firstString}\n${secondString}`;
console.log(result);
console.log(result.length)
console.log("First string included in result? ", result.includes(firstString));
console.log(result.includes("undefined"));
console.log(result.startsWith( "In TypeScript"));
console.log(result.endsWith( "text data."));
console.log(result.search(firstString));
console.log(result.search(secondString));
console.log(result.search("undefined"));
console.log(result.search("sequence"));
console.log(result.search("a type of primitive"));
console.log("newResult ", result.slice(0, result.search("sequence")) + result.slice(result.search("a type of primitive")));
const subString = `${result.slice(0, -127)} ${result.slice(-52)}`;
const subString2 = result.slice(0, 25) + result.slice(89);
console.log(subString);
console.log(subString2);
console.log(subString.replace('TypeScript', 'JavaScript'));
const thirdString:string = "    String type of variable.   ";
console.log(thirdString.length);
console.log(thirdString.trim());
console.log(`thirdString: ${thirdString.trim()}`);
console.log(thirdString.trim().length);
const fourthString = "string";
console.log(fourthString[2]);
console.log(fourthString.charAt(2));
console.log(fourthString[3]);
console.log(fourthString[-3]);
console.log(fourthString.at(-3)); //"i"
let fifthString = "Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune";
const planet = (fifthString.split(","));
console.log(typeof planet); // "object"
console.log(planet.length);
console.log(planet[2]);
console.log(`The third planet in solar system is ${planet[2]}.`);
console.log(`Some string called '${fifthString} "123"'`);
})