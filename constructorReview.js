//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

var Animal = function(species, name, legs, color, food){
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
};


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

var createObject = function(name, age, height, gender){
  var person = {
    name: name,
    age: age,
    height: height,
    gender: gender
}
return person;
};
//Create a animal array and a person array.

var animal = [];
var person = [];


//Create two instances of Animal and push those into your animal array

var elephant = new Animal('elephant', 'Dumbo', 4, 'gray', ['hay', 'wheat', 'barley']);
var owl = new Animal('owl', 'Archimedes', 2, 'rufus', ['mice', 'rat', 'small kitten']);
animal.push(elephant, owl);


//Create two instances of person and push those into your person array.

var jason = createObject('Jason', 27, '71.5 inches', 'male');
var jacob = createObject('Jacob', 5, '8.5 inches', 'boy');
person.push(jason,jacob);

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

Animal.prototype.foodAssignment = function(){
  var randomNum = Math.floor(Math.random() * this.food.length);
    alert(this.name + ' ate ' + this.food[randomNum])
};
owl.foodAssignment();

//At this point, if we wanted to add something to every instance of person could we? 

  //Yes or no? and why or why not?



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/