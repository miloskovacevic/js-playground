

//some tips and code from awesome site www.javascriptissexy.com


//first object
//An object is an unordered list of primitive data types
//(and sometimes reference data types) that is stored as a series of name-value pairs
// Each item in the list is called a property (functions are called methods).
var myFirstObject = {
    firstName: 'Milos',
    favouriteActor: 'Denzel'
};

//Property names can be a string or a number, but if the property name is a number,
// it has to be accessed with the bracket notation.
var ageGroup = {
    30: 'Young',
    100: 'Very Old',
    nationality: 'Serbian'
};

//console.log(ageGroup.30);  bad
console.log(ageGroup[30]); //good
console.log(ageGroup.nationality); //good

//Reference Data Type and Primitive Data Types
//Primitive dt...
var person = "Kobe";
var anotherPerson = person; //anotherPerson = value of person;
person = "Lebron";
console.log('=====>>> test primitive or reference dt <<<=====');
console.log('Person ' + person);
console.log('Another person ' + anotherPerson);

//now we doing the same thing but with reference type Object
var person = {
    name: 'Kobe'
};
var anotherPerson = person;
person.name = 'Lebron';
console.log('=====>>> test primitive or reference dt <<<=====');
console.log('Person ' + person.name);
console.log('Another person ' + anotherPerson.name);

//Creating Objects
//ways that are widely used...
//1. Object literals...
var myBooks = {};

var mango = {
    color: 'Yellow',
    shape: 'round',
    sweetness: 8,
    howSweetIAm: function(){
        console.log('Yea boiii...');
    }
};
//2.Object constructor
var mango = new Object();
mango.color = 'Yellow';
mango.shape = 'round';
mango.sweetness = 8;

mango.howSweetIAm = function () {
    console.log('Yea boii Object constructor...');
}


//Practical Patterns for Creating Objects
var mangoFruit = {
    color: 'Yellow',
    sweetness: 8,
    fruitName: 'Mango',
    nativeToLand: ['South America', 'Central America'],

    showName: function(){
        console.log(this.fruitName);
    },
    nativeTo: function(){
        this.nativeToLand.forEach(function (land) {
           console.log('Grows in ' + land);
        });
    }
};

// 1.Constructor Pattern for Creating Objects
function Fruit(theColor, theSweetness, theFruitName, theNativeToLand){
    this.color = theColor;
    this.sweetness = theSweetness;
    this.fruitName = theFruitName;
    this.nativeToLand = theNativeToLand;

    this.showName = function () {
        console.log("This is a " + this.fruitName);
    }
    this.nativeTo = function () {
        this.nativeToLand.forEach(function(country){
            console.log('Grows in ' + country);
        });
    }
}

//now that we have this constructor, we can make all kinds of fruit...
var banannaFruit = new Fruit('Yellow', 9, 'Bananna',['Montenegro', 'Croatia', 'Serbia']);
var appleFruit = new Fruit('Red', 6, 'Apple', ['Bosnia', 'Albania']);
console.log("====>>> testing constructor on bananna object <<<====");

banannaFruit.showName();
banannaFruit.nativeTo();
appleFruit.showName();
appleFruit.nativeTo();

// 2.Prototype Pattern for Creating Objects
// with this we hardcoded methods and properties that we want them to be inheritef via prototype param of Object...
function Fruit2(){

}

Fruit2.prototype.color = "White";
Fruit2.prototype.sweetness = 7;
Fruit2.prototype.fruitName = "Generic fruit 2";
Fruit2.prototype.nativeToLand = "USA";

Fruit2.prototype.showName = function () {
    console.log("This is a " + this.fruitName);
}

Fruit2.prototype.nativeTo = function () {
    console.log("Grows in " + this.nativeToLand);
}

//test Prototype paterna...
console.log("====>>> test Prototype patterna <<<====");

var orangeFruit = new Fruit2();
orangeFruit.showName();
orangeFruit.nativeTo();


//Own and Inherited properties
// in keyword
var school = {
    schoolName: 'MIT'
};

console.log('schoolName' in school); //true
console.log('schoolTitle' in school); //false
console.log('toString' in school); //true because toString method is declared on Object.prototype


// using hasOwnProperty ...
// tells you if object have his own, not inherited,  prop...
var skola = {
    imeSkole: 'Svet Sava'
};

console.log(skola.hasOwnProperty('imeSkole')); //true


//Accessing and Enumerating Props on Object...
var faks = {
  ime: 'EKOF',
  akreditovan: true,
  lokacija: 'Kamenicka 6'
};

console.log('====>>> testiramo enumeraciju <<<====');
for(var skola in faks){
    console.log(skola);
}

// Enumerating inherited and basic properties...
function HighLearning(){

}

HighLearning.prototype.EducationLevel = 'University';

var faks2 = new HighLearning();
faks2.schoolName = 'RAF';
faks2.schoolAccredited = true;
faks2.schoolLocation = 'Kneza Mihajla 6';

console.log("====>>> testing inherited and regular props of an object faks2 <<<====");
var i = 0;
for(var item in faks2) {
    i++;
    console.log("Items in faks:{" + i + "} => " + item);
}

//Deleting Properties of an Object?
var christmasList = {
  mike:'Book',
  jason:'sweater'
};

delete christmasList.mike;
delete christmasList.toString;

console.log('====>>> testing if prop is still there... <<<====');
console.log(christmasList.mike);


//Serialize and deserialize objects...
var christmasList = {mike:"Book", jason:"sweater", chelsea:"iPad" }
JSON.stringify(christmasList);

var christmasListStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';

// Let’s convert it to an object?
var christmasListObj = JSON.parse(christmasListStr);

console.log(christmasListObj.mike); //book


