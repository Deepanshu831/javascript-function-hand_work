
//  *---------challenge 1 : your age----------*

function ageInDays() {
  var birthYear = prompt("what is your birth year....My Friend?");
  var ageInDayss = (2021 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "You are " + ageInDayss + "days Old "
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

//     *----------challenge 2:generate cat----------*

function generatecat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  image.src = " http://thecatapi.com/api/images/get?format=src&type=gif ";
  div.appendChild(image);
}

//    *-------Challenge 3 rock Paper Scissors-------*

function rpsgame(yourchoice) {
  console.log(yourchoice);

  var humanchoice, botchoice;

  humanchoice = yourchoice.id;

  botchoice = numbertochoise(randToRpsInt()); //here bot choice randomly
  console.log("YouPicked::" + " " + humanchoice);
  console.log("BotPicked::" + " " + botchoice);

  result = decidewinner(humanchoice, botchoice); // [0,1] lost : [1,0] won :[0.5,0.5] tied
  console.log(result);

  Message = finalMessage(result); //  won c green : lost c red : tied c yellow
  console.log(Message);
  rpsFrontEnd(yourchoice.id, botchoice, Message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numbertochoise(number) {
  return ["Rock", "Paper", "Scissors"][number];
}

function decidewinner(yourchoice, computerchoise) {
  var rpsdatabase = {
    Rock: { Scissors: 1, Rock: 0.5, Paper: 0 }, //computer choice jo bracket ke under hai
    Paper: { Rock: 1, Paper: 0.5, Scissors: 0 },
    Scissors: { Paper: 1, Scissors: 0.5, Rock: 0 },
  };

  var yourScore = rpsdatabase[yourchoice][computerchoise]; //this whole thing return (your score)
  //(computer ne jo choose kiya hai usko database me match karke No. Value  return karega)
  var computerScore = rpsdatabase[computerchoise][yourchoice]; //this whole things return (computer score)
  //(computer ne jo choose kiya hai usko database me match karke No. Value return karega)

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: 'You Lost', color: 'red' };
  } else if (yourScore === 0.5) {
    return { message: 'You Tied', color: 'Yellow' };
  } else {
    return { message: 'You Won', color: 'Green' };
  }
}

function rpsFrontEnd(humanImagechoice, botImagechoice, finalMessage) {
  var Imagedatabase = {
    'Rock': document.getElementById('Rock').src,
    'Paper': document.getElementById('Paper').src,
    'Scissors': document.getElementById('Scissors').src
  }

  //remove image
  document.getElementById('Rock').remove();
  document.getElementById('Paper').remove();
  document.getElementById('Scissors').remove();

  var humanDiv = document.createElement('div');
  var BotDiv = document.createElement('div');
  var messageDiv = document.createElement('div');
  //

  //ye human selected choice dikhata hai
  humanDiv.innerHTML = "<img src='" + Imagedatabase[humanImagechoice] + "' height=150 width =150 style='box-shadow: 0px 10px 50px  rgba(37, 50, 233, 1)'>";

  //ye message ko show karta hai
  messageDiv.innerHTML = `<h1 style='color: ${finalMessage[
    "color"
  ]}; font-size:60px; padding:30px; '>${finalMessage["message"]}</h1>`;

  //ye bot ke image ko show karta hai
  BotDiv.innerHTML =
    "<img src='" +
    Imagedatabase[botImagechoice] +
    "' height=150 width =150 style='box-shadow:0px 10px 50px rgba(243, 38, 24, 1)'>";


  //ye saari choice ko flex box me darshata hai
  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(BotDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
}

// *--------challenge 4 : color change of all button--------*


var all_button = document.getElementsByTagName('button');

var copyAllButton = [];
for (let i = 0; i < all_button.length;i++){
  copyAllButton.push(all_button[i].classList[1]);

}

function buttoncolorchange (buttonThingy){
  if(buttonThingy.value === 'red'){
    buttonRed();
  }else if (buttonThingy.value === 'green'){
    buttongreen();
  }else if( buttonThingy.value === 'reset'){
    buttoncolorreset();
  }else if(buttonThingy.value === 'random'){
    randomcolor();
  }
}
  
function buttonRed() {
  for(let i=0; i<all_button.length;i++){
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add('btn-danger')
  }
}

function buttongreen() {
  for(let i=0; i<all_button.length;i++){
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add('btn-success')
  }
}

function buttoncolorreset(){
  for(let i=0;i<all_button.length;i++){
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add(copyAllButton[i]);

  }
}
function randomcolor(){
  let choices = ['btn-primary','btn-danger','btn-success','btn-warning']
  for(let i=0; i<all_button.length; i++){
    let randomnumber = Math.floor(Math.random()*4);
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add(choices[randomnumber]);
  }
}