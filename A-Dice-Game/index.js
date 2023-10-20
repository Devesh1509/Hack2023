
var randomNumber1=Math.floor(Math.random()*6)+1;

var Diceimage="dice"+randomNumber1+".png";
var DiceimageSource="images/"+Diceimage;

var image1=document.querySelectorAll("img")[0].setAttribute("src",DiceimageSource);



var randomNumber2 = Math.floor(Math.random()*6)+1;
var Diceimage1="dice"+randomNumber2+".png";
var DiceimageSource1="images/"+Diceimage1 ;
var image2=document.querySelectorAll("img")[1].setAttribute("src",DiceimageSource1);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 player1 Win!";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
}
else{
    document.querySelector("h1").innerHTML="player2 Win! 🚩";
}



