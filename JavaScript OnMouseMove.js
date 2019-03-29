<!-- This script is written to demonstrate the use of JavaScript event handling method OnMouseMove. -->
<!-- gameWidth and gameHeight represent the width and height of the client device. -->
 
var gameWidth = 360
var gameHeight = 320
 
var intervalOne,intervalTwo,timeoutOne,x
var tempX = 0
var tempY = 0
var block = 1
var getPad = 0
var count = 0

 
document.body.style.margin = "0px"
document.body.style.padding = "0px"
 
function setupGame()
{
document.getElementById("game").style.borderRight = "1px solid #aaa"
document.getElementById("game").style.borderRight = "1px solid #aaa"
document.getElementById("game").style.borderBottom = "1px solid #aaa"
document.getElementById("game").style.width = gameWidth+"px"
document.getElementById("game").style.height = gameHeight+"px"

document.getElementById("pad").style.position = "absolute"
document.getElementById("pad").style.width = "60px"
document.getElementById("pad").style.height = "30px"
document.getElementById("pad").style.paddingTop = "10px"
document.getElementById("pad").style.textAlign = "center"
document.getElementById("pad").style.font = "15px Verdana, sans-serif"
document.getElementById("pad").style.backgroundColor = "#000"
document.getElementById("pad").style.color = "#fff"
document.getElementById("pad").innerHTML = "<a id=\"play\" href=\"javascript:newGame()\">Click to Demonstrate</a>"
document.getElementById("play").style.color = "#fff"
document.getElementById("play").style.textDecoration = "none"
 
padTop = Math.floor(gameHeight/2)-20
padLeft = Math.floor(gameWidth/2)-30
 
document.getElementById("pad").style.top = padTop+"px"
document.getElementById("pad").style.left = padLeft+"px"
 
document.getElementById("notepad").innerHTML = "onMouseMove"
document.getElementById("notepad").style.padding = "10px"
document.getElementById("notepad").style.textAlign = "center"
document.getElementById("notepad").style.font = "2.0em Georgia, serif"
document.getElementById("notepad").style.fontWeight = "normal"
document.getElementById("notepad").style.color = "#222"
 
}
 
 
function newGame()
{
block = 0
tempX = 0
tempY = 0


document.getElementById("pad").style.top = (gameHeight-40)+"px"
document.getElementById("pad").innerHTML = ""
document.getElementById("notepad").innerHTML = ""

}
 

function getMouseXY(e)
{
    if(navigator.appName=="Netscape")
    {  
    tempX = e.pageX
    tempY = e.pageY
    }  
    else
    { 
    tempX = event.clientX + document.body.scrollLeft
    tempY = event.clientY + document.body.scrollTop
    }
 
    if(tempX < 0)
    {
    tempX = 0
    } 
 
    getPad = tempX
 
    if(getPad <= 30)
    {
    getPad = 30
    }
 
    if((getPad-30) > Math.floor(gameWidth-60))
    {
    getPad = Math.floor(gameWidth-60)+30
    }
 
    if(!block)
    {
    document.getElementById("pad").style.left = (getPad-30)+"px"
    }
 
}
 
document.onmousemove = getMouseXY
 
setupGame()
 