// variable scoping and hoisting...

//Demonstration of Function-Level Scope

var name = "Milan";
function ShowName(){
    var name = 'Jovan'; //local var, only accessible in ShowName function...
    console.log("This is function variable: " + name);
}

ShowName();
console.log(name);


console.log("====>>> Block level scoping non existent <<<====");
//No Block-Level Scope
var name = "Dragan";

if(name){
    name = "Radasin";
    console.log("In Block : " + name);
}

console.log("Global : " + name);

// Always declare your local variables before you use them.
// If you don't declare your local variables with the var keyword, they are part of the global scope
console.log("====>>> always declare local var b4 you use them <<<===");
var ime = "Michael Jackson";

function showCelebrityName(){
    ime = "Nemanja"; // globalna ime postaje "Nemanja"
    //var ime = "Nemanja"; // lokalna ime postaje Nemanja , globalna je i dalje Michel Jackson...
    console.log("Ime u funckciji: " + ime);
}
showCelebrityName();
console.log("Global: " + ime);

//Local Variables Have Priority Over Global Variables in Functions

console.log("====>>> test priority of vars <<<====");
var prezime = "Kovacevic";

function Users(){
    var prezime = "Samardzic";
    console.log("Unutar funkcije prezime: " + prezime);
}

Users();

//Global Variables

//If a variable is initialized (assigned a value) without first being declared with the var keyword,
// it is automatically added to the global context and it is thus a global variable
console.log("====>>> Davanje vrijednosti bez rijeci var automatski pravi globalnu varijablu <<<====");
var ime2 = "neko";

function NekaFunkcija(){
    ime2 = "Milos";
    console.log("Ime2 je " + ime2);
}
NekaFunkcija();
console.log("Globalno ime2: " + ime2);


//zato sto je i globalna varijabla...
for(var i = 0; i < 10; i++){
    console.log(i);
}
function aNumber(){
    console.log("Broj je " + i);
}
aNumber(); // pokazuje 10


//setTimeout Variables are Executed in the Global Scope
console.log("====>>> test setTimeout global var's <<<====");
var highValue = 200;
var constantVal = 2;

var myObj = {
    highValue: 20,
    constantVal: 5,
    calculateIt: function(){
        setTimeout(function () {
            console.log(this.constantVal * this.highValue);
        }, 2000);
    }
};

//test
//myObj.calculateIt();

// Variable Hoisting
//All variable declarations are hoisted (lifted and declared) to the top of the function,
// if defined in a function, or the top of the global context, if outside a function.
console.log("====>>> test hoisting-a <<<====");
function PokaziIme(){
    console.log("Ime(nije deklarisano) " + firstName);
    var firstName = "Nemanja";
    console.log("Ime " + firstName);
}

PokaziIme();

console.log("====>>> hoisting <<<====");
function PokaziPrezime(){
    var prezime;
    console.log("Prezime " + prezime);
    prezime = "Kovacevic";
    console.log("Prezime " + prezime);
}

PokaziPrezime();

//Function Declaration Overrides Variable Declaration When Hoisted

//hoisting - one more time...
var myvar = "my value";
(function(){
    alert(myvar);
    var myvar = 'local value';
})();


































