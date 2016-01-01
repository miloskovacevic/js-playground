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

console.log("====>>>  <<<====");
var prezime = "Kovacevic";

function Users(){
    var prezime = "Samardzic";
    console.log("Unutar funkcije prezime: " + prezime);
}

Users();











