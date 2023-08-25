let r = 0;
let txt = 'Rock, Paper, Scissors?';
let speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("gameheader").innerHTML += txt.charAt(r);
        r++;
        setTimeout(typeWriter, speed);
    }
}

function playSound() {
    const buttonPress = document.querySelector("#startplays");
    buttonPress.play();
}
mainButton = document.querySelector("#start").addEventListener("click", playSound);

function playWinSound() {
    const winSound = document.getElementById("youwin");
    winSound.play();
}
function playLoseSound() {
    const loseSound = document.getElementById("youfail");
    loseSound.play();
}
let startItem = document.getElementById('startitem');
let btn = document.querySelector("#start");

btn.addEventListener('click', function(){
    startItem.style.opacity = 0;
    startItem.style.transform = 'scale(0)';
    window.setTimeout(function(){
        startItem.style.display = 'none';
    },700); 
    setTimeout(() => {  typeWriter(); }, 1000);
    gameButtons = document.querySelectorAll(".selectgame").forEach(item => {
        item.addEventListener("click", playSound);
    })
});

function hideEndContainerShowWinner() {
    let gameItem = document.querySelector('.gameitem');
    let bottomItem = document.getElementById('bottomitem');
    gameItem.style.opacity = 0;
    gameItem.style.transform = 'scale(0)';
    gameItem.style.display = 'none';
    bottomItem.style.display = 'block';
}

btn.addEventListener('click', function(){
    startItem.style.opacity = 0;
    startItem.style.transform = 'scale(0)';
     window.setTimeout(function(){
        startItem.style.display = 'none';
    },700); 
    setTimeout(() => {  typeWriter(); }, 1000);
    gameButtons = document.querySelectorAll(".selectgame").forEach(item => {
        item.addEventListener("click", playSound);
    })
});


let playerLevel = 0;
let computerLevel = 0;
let gamesPlayed = 0;

document.addEventListener("click", gameSelectionListener);
function gameSelectionListener(event) {
    let element = event.target;
    console.log(event.target);
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    if (element.classList.contains("selectgame") && element.id === ("rock_div")) {
        playRound(rock);
        console.log("submitted rock")
    }
    else if (element.classList.contains("choices") && element.id === ("rock_img")) {
        playRound(rock);
        console.log("submitted rock")
    }
    else if (element.classList.contains("selectgametext") && element.id === ("select_rock")) {
        playRound(rock);
        console.log("submitted rock")
    }
    else if (element.classList.contains("selectgame") && element.id === ("paper_div")) {
        playRound(paper);
        console.log("submitted paper")
    }
    else if (element.classList.contains("choices") && element.id === ("paper_img")) {
        playRound(paper);
        console.log("submitted paper")
    }
    else if (element.classList.contains("selectgametext") && element.id === ("select_paper")) {
        playRound(paper);
        console.log("submitted paper")
    }
    else if (element.classList.contains("selectgame") && element.id === ("scissors_div")) {
        playRound(scissors);
        console.log("submitted scissors")
    }
    else if (element.classList.contains("choices") && element.id === ("scissors_img")) {
        playRound(scissors);
        console.log("submitted scissors")
    }
    else if (element.classList.contains("selectgametext") && element.id === ("select_scissors")) {
        playRound(scissors);
        console.log("submitted scissors")
    }
}


function machinePlay() {
    randomGameValue = Math.floor(Math.random() * 3);
    if (randomGameValue == "0") {
        return "rock";
    }
    else if (randomGameValue == "1") {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection) {
    console.log(playerSelection);
    const machineSelection = machinePlay();
    const selectRock = document.querySelector("#rock_div");
    const selectPaper = document.querySelector("#paper_div");
    const selectScissors = document.querySelector("#scissors_div");
    const machineRockSelected = document.querySelector("#rock_div_for_machine");
    const machinePaperSelected = document.querySelector("#paper_div_for_machine");
    const machineScissorsSelected = document.querySelector("#scissors_div_for_machine");
    if (machineSelection == "rock") {
        machineRockSelected.style.backgroundColor = "#7987e9";
        machinePaperSelected.style.backgroundColor = "white";
        machineScissorsSelected.style.backgroundColor = "white";
    }
    else if (machineSelection == "paper") {
        machinePaperSelected.style.backgroundColor = "#7987e9";
        machineRockSelected.style.backgroundColor = "white";
        machineScissorsSelected.style.backgroundColor = "white";
    }
    else if (machineSelection == "scissors") {
        machineScissorsSelected.style.backgroundColor = "#7987e9";
        machineRockSelected.style.backgroundColor = "white";
        machinePaperSelected.style.backgroundColor = "white";
    }
    let playerSelectionString = String(playerSelection);
    let playerSelectionLowercase = playerSelectionString.toLowerCase();
    if (playerSelectionLowercase === "rock") {
        selectRock.style.backgroundColor = "#fc5868";
        selectPaper.style.backgroundColor = "white";
        selectScissors.style.backgroundColor = "white";
        if (machineSelection === "rock") {
            console.log("Draw!");
            playerLevel++;
            machineLevel++;
            const currentPlayerLevel = document.querySelector("#playerlevel").innerHTML = `Your have Score: ${playerLevel}`;
            const currentMachineLevel = document.querySelector("#machinescore").innerHTML = `Your have Score: ${machineLevel}`;
            game(playerLevel, machineLevel);
            return "draw";
        }
        else if (machineSelection === "paper") {
            console.log("You lose - paper beats rock!");
            machineLevel++;
            const currentMachineLevel = document.querySelector("#machinescore").innerHTML = `Your have Score: ${machineLevel}`;
            game(playerLevel, computerLevel);
            return "lose";
        }
        else {
            console.log ("You win - scissors beats paper!");
            playerLevel++;
            const currentPlayerLevel = document.querySelector("#playerlevel").innerHTML = `Your have Score: ${playerLevel}`;
            game(playerLevel, computerLevel);
            return "win";
        }
    }
    else if (playerSelectionLowercase === "paper") {
        selectPaper.style.backgroundColor = "#fc5868";
        selectRock.style.backgroundColor = "white";
        selectScissors.style.backgroundColor = "white";
        if (machineSelection === "rock") {
            console.log("You win - paper beats rock!");
            playerLevel++;
            const currentPlayerLevel = document.querySelector("#playerlevel").innerHTML = `Your have Score: ${playerScore}`;
            game(playerLevel, machineLevel);
            return "win";
        }
        else if (machineSelection === "paper") {
            console.log("Draw!");
            playerLevel++;
            machineLevel++;
            const currentPlayerLevel = document.querySelector("#playerlevel").innerHTML = `Your have Score: ${playerLevel}`;
            const currentMachineLevel = document.querySelector("#machinescore").innerHTML = `Your have Score: ${machineLevel}`;
            game(playerLevel, machineLevel);
            return "draw";
        }
        else {
            console.log("You lose - scissors beats paper!")
            machineLevel++;
            const currentMachineLevel = document.querySelector("machinescore").innerHTML = `Your have Score: ${machineLevel}`;
            game(playerLevel, machineLevel);
            return "lose";
        }
    }
    else if (playerSelectionLowercase === "scissors") {
        selectScissors.style.backgroundColor = "#fc5868";
        selectRock.style.backgroundColor = "white";
        selectPaper.style.backgroundColor = "white";
        if (machineSelection === "rock") {
            console.log("You lose - rock beats scissors!")
            machineLevel++;
            const currentMachineLevel = document.querySelector("#machinescore").innerHTML = `Your have Score: ${machineLevel}`;
            game(playerLevel, machineLevel);
            return "lose";
        }
        else if (machineSelection === "paper") {
            console.log("You win - scissors beats paper!");
            playerLevel++;
            const currentPlayerLevel = document.querySelector("#playerlevel").innerHTML = `Your have Score: ${playerLevel}`;
            game(playerLevel, machineLevel);
            return "win";
        }
        else {
            console.log("Draw!");
            playerLevel++;
            machineLevel++;
            const currentPlayerLevel = document.querySelector("#playelevel").innerHTML = `Your have Score: ${playerLevel}`;
            const currentMachineLevel = document.querySelector("#machinescore").innerHTML = `Your have Score: ${machineLevel}`;
            game(playerLevel, machineLevel);
            return "draw";
        }
    }
    else {
        console.log("Invalid entry, please try again.");
        game(playerLevel, machineLevel);
        return null;
    }
}

function game(playerLevel, machineLevel) {
    const gameStarts = document.querySelector(".gamestarts");
    let userWinLogo = document.getElementById('user_wins_logo');
    let machineWinLogo = document.getElementById('machine_wins_logo');
    if (playerLevel == 5 || machineLevel == 5) {
        if (playerLevel > machineLevel) {
            let text = document.createTextNode(`YOU WIN THE GAME ${playerLevel}:${machineLevel}!`);
            gameStarts.appendChild(text);
            hideEndContainerShowWinner();
            playWinSound();
            userWinLogo.style.display = 'block';
        }
        else if (machineLevel > playerLevel) {
            let text = document.createTextNode(`MACHINE WINS ${computrLevel}:${playerLevel}!`);
            gameStarts.appendChild(text);
            hideEndContainerShowWinner();
            playLoseSound();
            machineWinLogo.style.display = 'block';
        }
        else {
            let text = document.createTextNode(`IT WAS A DRAW!`);
            gameStarts.appendChild(text);
            hideEndContainerShowWinner();
            userWinLogo.style.display = 'block';
            machineWinLogo.style.display = 'block';
        }   
    }
}