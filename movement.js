window.addEventListener('keydown', function (e) {
  onInput(e.key.toLowerCase())
}, false);

/*setInterval(onTick, 100);

var xAcc = 0
var yAcc = 0
var gravity = -1
var xVel = 0
var yVel = 0*/

function onInput(input){
    var playArea = document.querySelector("#play-area").textContent
    //console.log(playArea)
    playerInput = input
    console.log(input)

    if (playerInput == "w") {
        console.log(playerInput)
    } else if (playerInput == "a"){
        if (playArea.xIndexOf("O") > 1) {
            playArea = playArea.replaceAtArray(playArea.xIndexOf("O"), playArea.yIndexOf("O"), "o")
            playArea = playArea.replaceAtArray(playArea.xIndexOf("o")-1, playArea.yIndexOf("o"), "O")
            playArea = playArea.replaceAtArray(playArea.xIndexOf("o"), playArea.yIndexOf("o"), ".")
        }
    } else if (playerInput == "s"){

    } else if (playerInput == "d"){
        if (playArea.xIndexOf("O") < playArea.split("\r")[0].length) {
            playArea = playArea.replaceAtArray(playArea.xIndexOf("O"), playArea.yIndexOf("O"), "o")
            playArea = playArea.replaceAtArray(playArea.xIndexOf("o")+1, playArea.yIndexOf("o"), "O")
            playArea = playArea.replaceAtArray(playArea.xIndexOf("o"), playArea.yIndexOf("o"), ".")
        }
    }

    document.querySelector("#play-area").textContent = playArea
}

function onTick(){

}

String.prototype.xIndexOf = function(value) {
    var tempArr = this.split("\r")
    //console.log(tempArr)
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i].includes(value)) {
            return tempArr[i].indexOf(value);
        }
    }
    return
}
String.prototype.yIndexOf = function(value) {
    var tempArr = this.split("\r")
    //console.log(tempArr)
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i].includes(value)) {
            return i;
        }
    }
    return
}

String.prototype.replaceAtArray = function(xValue, yValue, replacement) {
    var tempArr = this.split("\r")
    tempArr[yValue] = tempArr[yValue].replaceAt(xValue, replacement)
    //var tempArr = 
    return tempArr.join("\r");
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}