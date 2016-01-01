//The prototype property is used primarily for inheritance;
// you add methods and properties on a function’s prototype property to make
// those methods and properties available to instances of that function.

function PrintStuff(myDocuments){
    this.documents = myDocuments;
}

var first = new PrintStuff("First object");

PrintStuff.prototype.print = function(){
    console.log(this.documents);
}

var newObj = new PrintStuff("I'm a new Object and i can print");

first.print();
newObj.print();

//Prototype Attribute of Objects Created with new Object () or Object Literal
//userAgent prototype atribute is Object.prototype
var userAgent = new Object();

//Objects created with the new keyword and any constructor other than the Object () constructor,
// get their prototype from the constructor function
function Account(){

}

var userAcc = new Account();


//1.Prototype Property: Prototype-based Inheritance
function Plant(){
    this.country = 'Mexico';
    this.isOrganic = true;
}

Plant.prototype.showNameAndColor = function () {
    console.log("I'm a " + this.name + " and my color is " + this.color);
}

Plant.prototype.amIOrganic = function () {
    if(this.isOrganic){
        console.log("I'm organic baby!");
    }
}

function Fruit(name, color){
    this.name = name;
    this.color = color;
}

//set the Fruit's prototype to Plant's constructor...

Fruit.prototype = new Plant();

//new object with Fruit constructor...
var aBanana = new Fruit("Banana", "Yellow");

//aBanana uses name property which is from Fruit prototype:
console.log(aBanana.name);
//aBanana uses country prop which is from Plant object
console.log(aBanana.country);
//aBanana uses showNameAndColor method form Plant.prototype
console.log(aBanana.showNameAndColor());
console.log(aBanana.amIOrganic());

//2.Prototype Attribute: Accessing Properties on Objects
var myFriends = {
    name: "Pete"
};

console.log(myFriends.name);


//another example

function People(){
    this.superstar = "Michael Jackson";
}

People.prototype.athlete = "Tiger Woods";

var famPerson = new People();
famPerson.superstar = "Steve Jobs";

console.log(famPerson.athlete);

//?// The search for superstar will first look for the superstar property on the famousPerson object,
// and since we defined it there,
// that is the property that will be used. Because we have overwritten the famousPerson’s
// superstar property with one directly on the famousPerson object, the search will NOT proceed up the prototype chain.

console.log(famPerson.superstar);













