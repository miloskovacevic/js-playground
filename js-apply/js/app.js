

//Bind()
//Bind () Allows us to Borrow Methods

var user = {
    // local data variable?
    data    :[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
    ],
    showData:function (event) {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1?

        console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
    }
};

var cars = {
    data:[
        {name: 'Honda Accord', age: 14},
        {name: 'Golf Trojka', age:21}
    ]
};

cars.showData = user.showData.bind(cars);
//shit works without bind method...(?)
cars.showData = user.showData;
console.log("=====>>> test funkcije <<<====");
cars.showData();

// Bind Allows Us to Curry a Function?
//Function Currying, also known as partial function application, is the use of a function
// (that accept one or more arguments) that returns a new function with some of the arguments already set.

function greet(gender, age, name){
    var salutation = gender === 'male'?'Mr.':'Ms';

    if(age > 25){
        return 'Hello, ' + salutation + " " + name;
    }
    else {
        return 'Hey, ' + name + '.';
    }
}

var greetAnAdultMale = greet.bind(null, "male", 45);

console.log('====>>> test curying <<<====');

console.log(greetAnAdultMale('Nemanja Milanovic'));

var greetYoungster = greet.bind(null, "", 16);

console.log(greetYoungster('Alex'));

//Set the this value with Apply or Call

//var avgScore = "global avgScore";

function avg(arrayOfScores){
    var sumOfScores = arrayOfScores.reduce(function (prev, next, index, array) {
        return prev + next;
    });

    this.avgScore = sumOfScores / arrayOfScores.length;
}

var gameController = {
    scores:[20,34,55,46,77],
    avgScore: null
};

console.log('====>>> check avg <<<====');
avg(gameController.scores);

console.log(avgScore);
console.log(gameController.avgScore);

// .call(object, parameter);
avg.call(gameController, gameController.scores);

console.log('====>>> test after call <<<====');
console.log(gameController.avgScore);

//Use Call or Apply To Set this in Callback Functions

var klijent = {
    id: 6598,
    fullName: 'Not Set',
    setUserName: function(firstName, lastName){
        this.fullName = firstName + " " + lastName;
    }
};

function getUserInput(firstName, lastName, callback,  callbackObj){
    callback.apply(callbackObj,[firstName, lastName])
}


getUserInput('Milos','Kovacevic', klijent.setUserName, klijent);
console.log('====>>> test after apply <<<====');
console.log(klijent.fullName);


//aj ponovo

var client = {
    id: 12,
    punoIme: 'Nije setovano',
    setujPunoIme: function(ime, prezime){
        this.punoIme = ime + " " + prezime;
    }
};

function getUserInput2(ime, prezime, kolbek, kolbekObjekat){
    kolbek.apply(kolbekObjekat, [prezime, ime]);
}

getUserInput2('Milos', 'Kovacevic', client.setujPunoIme, client);
console.log(client.punoIme);


//Borrowing Functions with Apply and Call
//An array-like object is an object that has its keys defined as non-negative integers.

var anArrayLikeObj = {
    0:"Martin",
    1:78,
    2:67,
    3:["Letta", "Marieta", "Pauline"],
    length:4
};

var newArray = Array.prototype.slice.call(anArrayLikeObj, 0);
console.log(newArray);

console.log(Array.prototype.indexOf.call(anArrayLikeObj, "Martin") === -1 ? false: true);

//console.log(anArrayLikeObj.indexOf("Martin"));

console.log(Array.prototype.pop.call(anArrayLikeObj));
console.log(anArrayLikeObj);









































