var linebreakType = ""
var currentLevel = "level1"
var levelList = ["level1", "level2", "level3"] //hardcoded

function fileFound(t){
    document.querySelector("#play-area").textContent = t
    linebreakType = "\n"
}

function setupLevel(levelName){
    const fileUrl = `./levels/${levelName}.txt` // provide file location
    fetch(fileUrl)
    .then( r => r.text() )
    .then( t => fileFound(t) )

    
}

setupLevel("level1")