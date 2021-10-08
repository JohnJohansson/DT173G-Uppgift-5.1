// Spread Operator ----------------------------------------------------------------

// a constant with my name
const name = "JohnJohansson";
//makes the string into an array
let nameArray = [...name];
// prints out the array to something with the id of printName
document.getElementById("printName").innerHTML = nameArray;

// result: J,o,h,n,J,o,h,a,n,s,s,o,n

// an array with the letters of my name
let arr = ['J', 'O', 'H', 'N'];

// a consol log that turns the array into a string
console.log(...arr);

// Result: J O H N


// Destructuering -------------------------------------------------------------------

// We have one and two, then we give them a value of 11 and 12 
let one, two;
let three = [one, two] = [11, 12];
// and we write them out to the consol
console.log(three);

// result [11, 12]

// here we have u d and c
let u, d, c;
// u gets the value of a and d gets the value of b
// and by using a spread operator we give c the value of the rest
let abc = [u, d, ...c] = ['a', 'b', 'c', 'd', 'e'];

console.log(abc);

// result ["a","b","c","d","e"]

//q has the value of the array
let q = ['a', 'b', 'c', 'd', 'e'];
// w has the value of a and e has the value of b
let [w, e] = q;

console.log(q);
// result ["a","b","c","d","e"]
console.log(u);
// result a
console.log(d);
// result b

// arrow functions -------------------------------------------------------------------

// The classic way of writing a function
function helloWorld() {
    return ("Hello World");
}
console.log(helloWorld());

// result Hello World

// the new arrow way

const helloArrow = () => {
    return ("Hello Arrow")
}
console.log(helloArrow());

// result Hello Arrow

// If there is only one argument we dont even need the ()
// and if there is only one statment we can leave out the {}

const helloArrow2 = hithere => console.log(hithere);

// to call it we only need to call on the helloArrow2 with a string
helloArrow2("Hello");

// result Hello

// array metodes --------------------------------------------------------------------------

// Array of ----

var aArr = Array.of(5);
// note A in array need to be capitilized or it will think your trying to call a var
// the consol prints out how many values there are in the array
// if I dident use the .of statment it would have printed the value insted
console.log(aArr.length);

// result 1 (without .of it would been 5)

// Array.From --------

// Turns a value into an array
let anotherArr = Array.from("John");
console.log(anotherArr);
// result ['J', 'O', 'H', 'N']

// we can use array from to multiplie values
let price = [25];
let multiPrices = Array.from(price, price2 => price2 * 1.55);
console.log(multiPrices);
// result 38.75


// Array.fill -------

// With array fill we can fill array values with a chosen value
let arrValues = [111, 222, 333];
arrValues.fill(10);
console.log(arrValues);
// result [10, 10, 10]

// and we can specify wich of the indexed values should be filled
let arrValues2 = [111, 222, 333];
//so we only fill the last one if we used index 1 we would have filled the secoand and last one and index 0 all three
arrValues2.fill(20, 2);
console.log(arrValues2);

// Array.find ---------

// array with numbers
let numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// and we want to fidn the number smaller then 900 but bigger then 700
let res = numbers.find(numbers => numbers < 900 && numbers > 700)
console.log(res);
// result 800

// if we want to find the index number of a value

let valueX = ['yes', 'no', 'hello'];
// so we know the value and we want its index number so if the value equals
let valuRes = valueX.findIndex(v => v == 'hello');
console.log(valuRes);
// result 2 (becuse it always start counting from 0)

//note there are even more new array metodes


// Classes --------------------------------------------------------------------------------

// we create a class for computers
// we always start with a construktor
// in this class we wanna have values for the grafikcard cpu and powersuply
// so we make decklarations of gpu, cpu and psu
class computor {
    constructor(gpu, cpu, psu) {
        this.gpu = gpu;
        this.cpu = cpu;
        this.psu = psu;
    }
    //method
    // we use template literal `string text ${this.expression} string text` to make our expression
    displayComputor() {
        console.log(`gpu: ${this.gpu} cpu: ${this.cpu} psu: ${this.psu}`)
    }
}
// then we make instanses for the class
let comp1 = new computor("3070", "i9-1198hk", "750w")
let comp2 = new computor("3060", "i8-1198hk", "800w")
let comp3 = new computor("3050", "i7-1198hk", "850w")

// then we call upon them
comp1.displayComputor();
// result: gpu: 3070 cpu: i9-1198hk psu: 750w
comp2.displayComputor();
// result: gpu: 3060 cpu: i8-1198hk psu: 800w
comp3.displayComputor();
// result gpu: 3050 cpu: i7-1198hk psu: 850w

// classes with extended and super -------------

// with extends we can use the earlier class
// we inherit the first class and call on its construktor with super
// so with extend and super we can inherit the earlier class
class amazingComputor extends computor {
    constructor() {
        super("3090", "i9-10900X", "1200w")
    }
}
let comp4 = new amazingComputor();
comp4.displayComputor();
// result: gpu: 3090 cpu: i9-10900X psu: 1200w

// Exports and requier -----------

// Just like in PHP we can put our classes in separate files and then import them

// // export (should be put into its own file)
// module.exports = class computor {
//     constructor(gpu, cpu, psu) {
//         this.gpu = gpu;
//         this.cpu = cpu;
//         this.psu = psu;
//     }
//     displayComputor(){
//         console.log(`gpu: ${this.gpu} cpu: ${this.cpu} psu: ${this.psu}`)
//     }
// }
// // require
//     let computor = require("./comps.js");

//     let comp1 = new computor("3070", "i9-1198hk", "750w")


// Higer order functions ----------------------------------------------------------------------------

// So we make a function to find out if y is smaller then x
function smallerThen(x) {
    // we use an arrow funktion
    // we return y and ask is y smaller then x?
    return y => y < x;
}
// here we give x its value x=20 by calling on the function and putting it into a var
let smallerThen20 = smallerThen(20);

// and then we give y its value in the consol log of 12
console.log(smallerThen20(12));
// so the question is is y=12 smaller then x=20
// result true


//High order array methods -----------------------------------------------------------------------


// ForEach ----

// an array with some numbers in them
const arrayForEach = [10, 11, 12, 13, 14, 15];

// then we do a callback function and put in a for each 
arrayForEach.forEach(arrayForEach => {
    // the consol will print out every number in the array one for each
    console.log(arrayForEach);
});

// result: 10 11 12 13 14 15

// we have another array with more then one value
const employee = [
    { name: "Bob", job: "Sales", hireDate: 1999 },
    { name: "Jean", job: "Taxes", hireDate: 1990 },
    { name: "Max", job: "Secretery", hireDate: 2001 }
]

// so we take employee loop it through with a foreach
employee.forEach(employee => {
    // makes a console log
    console.log(employee);
    // if we only want pne of the values we can do a console.log(employee.name); and so on
})

// result: {name: 'Bob', job: 'Sales', hireDate: 1999}
// {name: 'Jean', job: 'Taxes', hireDate: 1990}
// {name: 'Max', job: 'Secretery', hireDate: 2001}



// Map -----

// we start with an array with some names
const arrayForMap = ['Jan', 'Siv', 'Bob2', 'Nira'];

// then we create a new array and the string "! a new challenger!" in the end of every name
const challengers = arrayForMap.map(challengerString => {
    return challengerString + '! a new challenger!';
})
console.log(challengers);
// result: ['Jan! a new challenger!', 'Siv! a new challenger!', 'Bob2! a new challenger!', 'Nira! a new challenger!']



// Filter -----

// an array with some numbers in them
const arrayForFilter = [17, 22, 66, 33, 10, 1];

// with filter we can filter out chosen values from an array

// we want all numbers i the array that are lower then 20
const lowerNumbers = arrayForFilter.filter(number => number <= 20);
console.log(lowerNumbers);

// result [17, 10, 1] the consol shows us the numbers lower then 20!

// if we look at our employee array we can also filter out stuff from there!

// so employee array we filter it startdate.hiredate is equal to or bigger then 2001 
// This will give us all employees that where hired at 2001 or later!
const employeeHireDate = employee.filter(startDate => (startDate.hireDate >= 2001));
console.log(employeeHireDate);

// result 0: {name: 'Max', job: 'Secretery', hireDate: 2001} length: 1


