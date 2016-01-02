//The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets),
// it has access to the outer function’s variables, and it has access to the global variables.

function showName(firstName, lastName){
   var nameIntro = "Your name is ";

   function makeFullName(){
       return nameIntro + firstName + " " + lastName;
   }

   return makeFullName();
}

showName('Milos', 'Kovacevic');

//1.Closures have access to the outer function’s variable even after the outer function returns:
function celebName(firstName){
    var nameIntro = "The celeb name is ";

    function lastName(theLastName){
        return nameIntro + firstName + " " + theLastName;
    }

    return lastName;
}

var mjName = celebName("Michael");
console.log("====>>> closure test <<<====");
console.log(mjName("Jordan"));

//2.Closures store references to the outer function’s variables;  they do not store the actual value.
function CelebId(){
    var celebid = 999;

    //returning object with some inner functions, all the inner functions have access to outer function's variables...
    return {
        getId: function () {
            return celebid;
        },
        setId: function(newId){
            celebid = newId;
        }
    }
}

var crniId = CelebId();
console.log("====>>> test closure 2. <<<====");
console.log("celebId before setting: " + crniId.getId());
crniId.setId(567);
console.log("celebId after return and setting: " + crniId.getId());

//3.Closures Gone Awry

function celebIdCreator(theCelebs){
    var i;
    var uniqueId = 1000;

    for(i = 0; i < theCelebs.length; i++){
        theCelebs[i]["id"] = function (j) {
            return function(){
                return uniqueId + j;
            }()
        }(i)
    }

    return theCelebs;
}

console.log("=============>>>> closure in for loop <<<<============");
var actionCelebs = [{name:'Stallone', id: 0},{name:'Cruise', id: 0},{name: 'Willis', id: 0}];

var createIdForCelebs = celebIdCreator(actionCelebs);
var stalloneId = createIdForCelebs[0];
console.log(stalloneId.id);
var cruiseId = createIdForCelebs[1];
console.log(cruiseId.id);


//another closure
var func1 = function () {
    var msg = "foo";

    var func2 = function(){
        var msg = "Bar";
        console.log("func2 msg: " + msg);
    }

    func2();
    console.log("func1 msg: " + msg);
}

console.log("======>>> another one <<<======");
func1();

//jea another one...

var closure = function(){
    var counter = 0;

    return {
        getCounter: function(){
            return counter;
        },
        setCounter: function(nr){
            if(typeof nr !== 'number'){
                nr = 1;
            }
            counter += nr;
        }
    };
}();

console.log("=======>>> testing closures again <<<=======");
console.log(closure.getCounter());
closure.setCounter(21);
console.log(closure.getCounter());

//kad ne radi bas najbolje...

var createCallBack = function(){
    return new function(){
        var that = this;
        this.message = "Hello World";


        return function(){
            alert(that.message);
        }
    }
}

window.onload = createCallBack();









































