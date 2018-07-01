//User can input values for num of side on dice and num of dice rolled, click a button
//Each dice should roll and will see the rolls in the console

//Event listner
document.getElementsByTagName('button')[0].onclick = rollDice

//function for rolling dice
function rollDice(){
  //get the value for num of sides
  var sides = document.getElementsByTagName('input')[0].value

  //get the value for num of dice
  var dice = document.getElementsByTagName('input')[0].value

  //generate the rolls
  for(var count = 1; count <= 5; count++){
    var result = Math.ceil(Math.random()*sides)
    //display to the console
    console.log(result)
  }
}
