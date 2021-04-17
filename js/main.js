//-----------------------------------Variables---------------------------------------- 
let gameCard = document.getElementsByClassName("gameCard");
let chosenCard =[];
let remainingShotsHtml= document.querySelector('em');
let win = 0;
let remainingShots = 12;
let COLORS = ["purple","grey","yellow","orange","purple","green","blue","red","green","yellow","blue","red","grey","orange"];
let layer = document.getElementById("hiddenLayer");
let containerCard = document.getElementById("containerCard");

// ----------------------------------My functions----------------------------------------
//function to mix the colors and launch the makeCard function which creates as many cards as there are colors
function makeShuffleColors(array){
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

//function which retrieves the array of mixed colors and calls the makeCard function to create as many cards as there are colors
function makeNewGame(){
    let colorShuffle = makeShuffleColors(COLORS);
    console.log(colorShuffle);
    for(color of colorShuffle){
        makeCard();
    };
}

//function to create the game cards on the html side
function makeCard(){
    let createCol = document.createElement("div");
    createCol.classList.add("offset-2","col-3","offset-lg-1","col-lg-1","my-1","sizeCard","gameCard");
    containerCard.appendChild(createCol);
    playGame();
};

//Function loop on the "gameCard" class and launch a function by clicking on a card
function playGame(){
    for(let i = 0; i < gameCard.length; i++){
        gameCard[i].onclick = function(){
            chosenCard.push(gameCard[i]);
            gameCard[i].style.backgroundColor = COLORS[i];

            if(chosenCard.length === 2){
                let layer = document.getElementById("hiddenLayer");
                layer.classList.add("layer"); 
                setTimeout(function(){compareArray();}, 1300);   
            }
        }
    }
};

//function that compares the two chosen cards
function compareArray(){
    if(chosenCard[0].style.backgroundColor === chosenCard[1].style.backgroundColor){
        layer.classList.remove("layer"); 
        win ++;
        console.log(win);
    }
    else{
        chosenCard[0].style = "none";
        chosenCard[1].style = "none";
        layer.classList.remove("layer");
        remainingShots --;
        remainingShotsHtml.textContent = remainingShots;
    }
    chosenCard = [];
    scoreFinal();
}

//function to define the end of the game according to the remaining moves or the cards found
function scoreFinal(){
    if(win === 7){
        setTimeout(function(){alert("Bien joué!\nCliques sur la pomme pour commencer une nouvelle partie");}, 700);
    }
    
    else if(remainingShots <= 0){
        setTimeout(function(){alert("Dommage... \nCliques sur la pomme pour commencer une nouvelle partie");}, 700);
    }
};

// -------------------------------------------------------------- My logic code ------------------------------------------------------------
//displays the number of remaining attempts to the user
remainingShotsHtml.textContent = remainingShots;

//Function to start game
makeNewGame();