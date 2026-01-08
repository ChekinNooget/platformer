var linebreakType = ""
var currentLevel = "level1"
var levelList = ["level1", "level2", "level3"] //hardcoded

function fileFound(t){
    document.querySelector("#play-area").textContent = t

    if (document.querySelector("#play-area").textContent.includes("\r")){
        linebreakType = "\r"
    } else if (document.querySelector("#play-area").textContent.includes("\n")){
        linebreakType = "\n"
    } else{
        throw new Error("Chekin screwed up. Please tell him it has to do with his janky way of checking for newlines")
    }
}

function setupLevel(levelName){
    const fileUrl = `./levels/${levelName}.txt` // provide file location
    fetch(fileUrl)
    .then( r => r.text() )
    .then( t => fileFound(t) )

    
}

setupLevel("level1")