var colors=generateRandomColors(6);

var squares= document.querySelectorAll(".square");
var pickedColor=pickColor();
var h1=document.querySelector("h1")

var newGame=document.querySelector("#newGame");

var colorDisplay=document.querySelector("#pickedColor");
colorDisplay.textContent=pickedColor;

var messageDisplay=document.querySelector("#message");

newGame.addEventListener("click",function(){
    colors=generateRandomColors(6);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    h1.style.backgroundColor="#232323";
    messageDisplay.textContent="";
    
    for(var i=0; i<squares.length; i++)
    {
         squares[i].style.backgroundColor=colors[i];
    }
})

for(var i=0; i<squares.length; i++){
    
    squares[i].style.backgroundColor=colors[i];



squares[i].addEventListener("click",function(){
    
    var clickedColor=this.style.backgroundColor;
    
    if(clickedColor== pickedColor){
        changeColor(clickedColor);
         messageDisplay.textContent="Correct!! :)";
        h1.style.backgroundColor=pickedColor;
        newGame.textContent="Play Again";
}
    else{
        this.style.backgroundColor="#232323";
        messageDisplay.textContent="Try Again :)";
    }
})
}


function changeColor(color){
    for(var i=0; i<squares.length; i++){
        
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var random= Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr=[];
    for(var i=0; i<num; i++)
        {
           arr.push(randomColor());
        }
    return arr;
    
}

function randomColor(){
    var r=Math.floor(Math.random()*256);
    
     var g=Math.floor(Math.random()*256);
    
     var b=Math.floor(Math.random()*256);
    
    return "rgb(" + r + ", " +g + ", " +b +")";
}
