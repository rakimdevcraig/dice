// in html 2 inputs and a buttton

// what can the user do? {
// can input value for num of dice and dice rolled
// click a button

// what does the user expect
// each dice to roll

// what do they expect
// each dice to roll and see dice in console

// need an event listener and with that u need a function


// 1eventlistener
document.getElementsByTagName('button')[0].onclick
// make button in innerhtml

// 2function for rolling dice
function rolldice(){
  //3 get the value for num of numOfSides
var sides = document.getElementsByTagName('input')[0].value
  // have to make variable or the input would just get lost

  // 4get the value for the num of dice
  var dice = document.getElementsByTagName('input')[1].value
  // take the 2nd input

  // 5generate the numOfRolls

  for(var count = 1; count <=dice; count++){
    var result = MAth.ceil(Math.random()*sides)
  }

  // 6display in the console
  console.log(result)
}
