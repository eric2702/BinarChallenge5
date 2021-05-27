function playerWin() {
    let replace = document.querySelector('.replace')
    replace.innerHTML='PLAYER 1<br>WIN';
    replace.classList.add('result');
    //check if versus still exists
    if (replace.classList.contains('versus')) {
        replace.classList.remove("versus")
    }
    replace.style.background="rgba(76, 150, 84, 1)"
    //output match result
    console.log("MATCH WON BY PLAYER 1!")
}

function comWin() {
    let replace = document.querySelector('.replace')
    replace.innerHTML='COM<br>WIN';
    replace.classList.add('result');
    //check if versus still exists
    if (replace.classList.contains('versus')) {
        replace.classList.remove("versus")
    }
    //replace bg color
    replace.style.background="rgba(76, 150, 84, 1)"
    //output match result
    console.log("MATCH WON BY COM!")
}

function draw() {
    let replace = document.querySelector('.replace')
    replace.innerHTML='DRAW';
    replace.classList.add('result');
    //check if versus still exists
    if (replace.classList.contains('versus')) {
        replace.classList.remove("versus")
    }
    //replace bg color
    replace.style.background="rgba(3, 91, 12, 1)"
    //output match result
    console.log("MATCH DRAW!")
}

function compPicks() {
    const rng = Math.floor(Math.random() * 3)
    //comp picks rock
    if (rng == 0) {
        //grey rectangle for rock
        document.getElementById("com-rock-rectangle").style.background="rgba(196, 196, 196, 1)";
        //brown rectangle for paper and scissor
        document.getElementById("com-paper-rectangle").style.background="rgba(156, 131, 95, 1)";
        document.getElementById("com-scissor-rectangle").style.background="rgba(156, 131, 95, 1)";
        //output computer choice
        console.log("COM CHOSE ROCK")
    } else if (rng == 1) {
        //grey rectangle for paper
        document.getElementById("com-paper-rectangle").style.background="rgba(196, 196, 196, 1)";
        //brown rectangle for rock and scissor
        document.getElementById("com-rock-rectangle").style.background="rgba(156, 131, 95, 1)";
        document.getElementById("com-scissor-rectangle").style.background="rgba(156, 131, 95, 1)";
        console.log("COM CHOSE PAPER")
    } else if (rng == 2) {
        //grey rectangle for scissor
        document.getElementById("com-scissor-rectangle").style.background="rgba(196, 196, 196, 1)";
        //brown rectangle for rock and paper
        document.getElementById("com-rock-rectangle").style.background="rgba(156, 131, 95, 1)";
        document.getElementById("com-paper-rectangle").style.background="rgba(156, 131, 95, 1)";
        console.log("COM CHOSE SCISSORS")
    }
    return rng;
}

//code if rock is clicked
var usrRock = document.getElementById("user-rock-img")
usrRock.addEventListener("click", function() {
    //console log user choice
    console.log("USER CHOSE ROCK")
    //grey rectangle for rock
    document.getElementById("user-rock-rectangle").style.background="rgba(196, 196, 196, 1)";
    //brown rectangle for paper and scissor
    document.getElementById("user-paper-rectangle").style.background="rgba(156, 131, 95, 1)";
    document.getElementById("user-scissor-rectangle").style.background="rgba(156, 131, 95, 1)";
    let compChoice = compPicks();
    if (compChoice == 0) { //if comp picks rock
        draw();
    } else if (compChoice == 1) { //if comp picks paper
        comWin();
    } else if (compChoice == 2) { //if comp picks scissors
        playerWin();
    }
})
//code if paper is clicked
var usrPaper = document.getElementById("user-paper-img")
usrPaper.addEventListener("click", function() {
    //console log user choice
    console.log("USER CHOSE PAPER")
    //grey rectangle for paper
    document.getElementById("user-paper-rectangle").style.background="rgba(196, 196, 196, 1)";
    //brown rectangle for rock and scissor
    document.getElementById("user-rock-rectangle").style.background="rgba(156, 131, 95, 1)";
    document.getElementById("user-scissor-rectangle").style.background="rgba(156, 131, 95, 1)";
    let compChoice = compPicks();
    if (compChoice == 0) { //if comp picks rock
        playerWin();
    } else if (compChoice == 1) { //if comp picks paper
        draw();
    } else if (compChoice == 2) { //if comp picks scissors
        comWin();
    }
})
//code if scissor is clicked
var usrScissor = document.getElementById("user-scissor-img")
usrScissor.addEventListener("click", function() {
    //console log user choice
    console.log("USER CHOSE SCISSORS")
    //grey rectangle for scissor
    document.getElementById("user-scissor-rectangle").style.background="rgba(196, 196, 196, 1)";
    //brown rectangle for rock and paper
    document.getElementById("user-rock-rectangle").style.background="rgba(156, 131, 95, 1)";
    document.getElementById("user-paper-rectangle").style.background="rgba(156, 131, 95, 1)";
    let compChoice = compPicks();
    if (compChoice == 0) { //if comp picks rock
        comWin();
    } else if (compChoice == 1) { //if comp picks paper
        playerWin();
    } else if (compChoice == 2) { //if comp picks scissors
        draw();
    }
})