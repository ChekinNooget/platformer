function setupLevel(levelName){
    const fileUrl = `./levels/${levelName}.txt` // provide file location
    fetch(fileUrl)
    .then( r => r.text() )
    .then( t => document.querySelector("#play-area").textContent = t )

    
}

setupLevel("level1")