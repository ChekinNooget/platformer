window.addEventListener('keydown', function (e) {
  onInput(e.key.toLowerCase())
}, false);

var gameInterval = setInterval(onTick, 100);

var xAcc = 0
var yAcc = 0
var gravity = -1
var xVel = 0
var yVel = 0

function onTick(){
    var playArea = document.querySelector("#play-area").textContent

    if (playArea.findAtArray(playArea.xIndexOf("O"), playArea.yIndexOf("O") + 1) == "_") {
        yAcc = 0
        yVel = 0
    } else {
        yAcc = gravity
        yVel -= yAcc
        if (yVel > 50) {
            yVel = 15
        }
    }

    if (playArea.findAtArray(playArea.xIndexOf("O"), playArea.yIndexOf("O") + 1) != "_") {
        if (playArea.findAtArray(playArea.xIndexOf("O"), playArea.yIndexOf("O") + Math.floor(yVel/5)) != "_") {
            if (playArea.yIndexOf("O") < playArea.split(linebreakType).length) {
                movePlayer(0, Math.floor(yVel/5))
            }
        }
    }

    if (playArea.yIndexOf("O") >= playArea.split(linebreakType).length - 4) { //hardcoded
        setupLevel(currentLevel)
        yAcc = 0
        yVel = 0
    }

    if (!playArea.includes("F")){
        if (levelList.indexOf(currentLevel) < levelList.length - 1) {
            currentLevel = levelList[levelList.indexOf(currentLevel) + 1]
            setupLevel(currentLevel)
        } else {
            document.querySelector("#play-area").textContent = `you win, refresh to play again`
            clearInterval(gameInterval)
        }
    }
}

function movePlayer(x, y){
    var playArea = document.querySelector("#play-area").textContent

    
    playArea = playArea.replaceAtArray(playArea.xIndexOf("O"), playArea.yIndexOf("O"), "o")
    playArea = playArea.replaceAtArray(playArea.xIndexOf("o") + x, playArea.yIndexOf("o") + y, "O")
    if (playArea.includes("o")) {        
        playArea = playArea.replaceAtArray(playArea.xIndexOf("o"), playArea.yIndexOf("o"), ".")
    }

    document.querySelector("#play-area").textContent = playArea
}

function onInput(input){
    var playArea = document.querySelector("#play-area").textContent
    playerInput = input

    if (playerInput == "w") {
        if (playArea.findAtArray(playArea.xIndexOf("O"), playArea.yIndexOf("O") + 1) == "_") {
            yVel = -5
            movePlayer(0, -1)
        }
    } else if (playerInput == "a"){
        if (playArea.xIndexOf("O") > 0) {
            movePlayer(-1, 0)
        }
    } else if (playerInput == "s"){

    } else if (playerInput == "d"){
        if (playArea.xIndexOf("O") < playArea.split(linebreakType)[0].length - 2) {
            movePlayer(1, 0)
        }
    }
}

String.prototype.xIndexOf = function(value) {
    var tempArr = this.split(linebreakType)
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i].includes(value)) {
            return tempArr[i].indexOf(value);
        }
    }
    return
}
String.prototype.yIndexOf = function(value) {
    var tempArr = this.split(linebreakType)
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i].includes(value)) {
            return i;
        }
    }
    return
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

String.prototype.replaceAtArray = function(xValue, yValue, replacement) {
    var tempArr = this.split(linebreakType)
    tempArr[yValue] = tempArr[yValue].replaceAt(xValue, replacement)
    //var tempArr = 
    return tempArr.join(linebreakType);
}
String.prototype.findAtArray = function(xValue, yValue) {
    return this.split(linebreakType)[yValue][xValue];
}