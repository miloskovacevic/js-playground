
//The use of this in the global scope

var ime = "Petar";
var prezime = "Petrovic";


function showFullName(){
    console.log(this.ime + " " + this.prezime);
}

var osoba = {
    ime: 'Milos',
    prezime: 'Kovacevic',

    fullName: function(){
        console.log(this.ime + " " + this.prezime);
    }
};

showFullName();
osoba.fullName();


//When this is most misunderstood and becomes tricky

var anotherPerson = {
    ime: 'Nemanja',
    prezime: 'Milanovic'
};

osoba.fullName.apply(anotherPerson);

//1.Fix this when used in a method passed as a callback
var user = {
  data:[
      {name: 'T.Woods', age: 37},
      {name: 'M.Jordan', age: 43}
  ],
  clickHandler: function(event) {
      var randomNum = ((Math.random() *2 | 0) +1 ) -1;
      console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
  }
};

//$ ("button").click (user.clickHandler); => ne valja
// $ ("button").click (user.clickHandler.bind(user)); => valja


//2.Fix this inside closure

var korisnik = {
    turnir: 'masters',
    podaci: [
        {ime: 'Milos Kovacevic', godine: 27},
        {ime: 'Nemanja Milanovic', godine: 26}
    ],

    clickHandler: function(){
        var that = this;

        this.podaci.forEach(function(osoba){
            console.log("Which 'this' is this: " + that );
            console.log(osoba.ime + " is playing against " + that.turnir);
        });
    }
};

korisnik.clickHandler();



//3.Fix this when method is assigned to a variable

var data = [
    {name:"Samantha", age:12},
    {name:"Alexis", age:14}
];

var korisnik = {
    data:[
        {name: 'Tajger Vuds', age: 42},
        {name: 'Mik Mikelson', age:44}
    ],
    showData: function(event){
        var randomNum = ((Math.random() * 2 | 0) + 1) - 1;

        console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    }
};

//koristiti bind metodu...
var showUserData = korisnik.showData.bind(korisnik);

showUserData();


//4.Fix this when borrowing methods

var gameController = {
    scores  :[20, 34, 55, 46, 77],
    avgScore:null,
    players :[
        {name:"Tommy", playerID:987, age:23},
        {name:"Pau", playerID:87, age:33}
    ]
}

var appController = {
    scores: [900, 845, 809, 950],
    avgScore: null,
    avg: function(){
        var sumOfScores = this.scores.reduce(function(prev, cur, index, array){
            return prev + cur;
        });

        this.avgScore = sumOfScores / this.scores.length;
    }
};

appController.avg.apply(gameController, gameController.scores);

















