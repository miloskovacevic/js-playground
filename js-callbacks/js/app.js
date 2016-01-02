

//A callback function, also known as a higher-order function, is a function that is passed to another function
// (let’s call this other function “otherFunction”) as a parameter, and the callback function is called (or executed)
// inside the otherFunction.

var prijatelji = ["Sasa","Crni","Zijas"];

prijatelji.forEach(function(prijatelj, i){
    console.log(i + 1 + '.' + prijatelj);
});

// Use Named OR Anonymous Functions as Callbacks

var allUserData = [];

function logStuff(userData){
    if(typeof userData === "string"){
        console.log(userData);
    }
    else if(typeof userData === "object"){
        for(var item in userData){
            console.log(item + ":" + userData[item]);
        }
    }
}

//function that uses 2 params, last one is callback...
function getInput(options, callback){
    allUserData.push(options); //to push data into array
    callback(options); // to print this out to console
}

getInput({name:'Nemanja',spec:'JS'}, logStuff);


var generalLastName = "Clinton";

function getInput2(options, callback){
    allUserData.push(options);
    callback(generalLastName, options);
}

//Make Sure Callback is a Function Before Executing It
function getInput3(options, callback){
    allUserData.push(options);

    if(typeof  callback === "function"){
        callback(options);
    }
}

//Problem When Using Methods With The this Object as Callbacks
//Use the Call or Apply Function To Preserve this
var clientData = {
    id: 094545,
    fullName: 'Not set',
    //setUserName is a method on the clientData object...
    setUserName: function(firstName, lastName){
        this.fullName = firstName + " " + lastName;
    }
};


function getUserInput(firstName, lastName, callback, callbackObj){
    callback.apply(callbackObj, [firstName, lastName]);
}

//In the following code example, when clientData.setUserName is executed, this.fullName will not set the fullName property
// on the clientData object. Instead, it will set fullName on the window object, since getUserInput is a global function.
// This happens because the this object in the global function points to the window object
getUserInput("Dusan", "Bodiroga", clientData.setUserName, clientData);

console.log("====>>>testing callbacks<<<====");
console.log(clientData.fullName);




































