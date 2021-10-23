//-----------------------------------Variables---------------------------------------- 

let gameCard = document.getElementsByClassName("gameCard");
let chosenCard =[];
let remainingShotsHtml= document.querySelector('em');
let win = 0;
let remainingShots = 12;
let COLORS = ["purple","grey","yellow","orange","purple","green","blue","red","green","yellow","blue","red","grey","orange"];
let IMAGES = ["banane.PNG", "cerises.PNG", "orange.PNG", "poire.PNG", "raisin.PNG", "banane.PNG", "cerises.PNG", "orange.PNG", "poire.PNG", "raisin.PNG"];
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
    let colorShuffle = makeShuffleColors(IMAGES);
    console.log(colorShuffle);
    for(color of colorShuffle){
        makeCard();
    };
}

//function to create the game cards on the html side
function makeCard(){
    let createDiv = document.createElement("div");
    createDiv.classList.add("gameCard", "col-5", "m-1", "m-auto","col-lg-2", "sizeCard", "colorBackCard", "ms-lg-5", "mb-3");
    containerCard.appendChild(createDiv);

    let img = document.createElement("img");
    for(let j= 0; j < gameCard.length; j++){
        img.setAttribute("src", "img/" + IMAGES[j]);
        img.setAttribute("alt", "img/" + IMAGES[j]);
        img.classList.add("hidden", "img", "mt-md-5", "ms-md-5");
        gameCard[j].appendChild(img);
    }
    playGame();
};

//Function loop on the "gameCard" class and launch a function by clicking on a card
function playGame(){
    for(let i = 0; i < gameCard.length; i++){
        gameCard[i].onclick = function(){
            chosenCard.push(gameCard[i]);
            console.log(chosenCard);
            let img = document.getElementsByClassName("img");
            console.log(img);
            img[i].classList.remove("hidden");
            gameCard[i].classList.remove("colorBackCard");
            gameCard[i].classList.remove("hover");
            
            if(chosenCard.length === 2){
                let layer = document.getElementById("hiddenLayer");
                layer.classList.add("layer"); 
                setTimeout(function(){compareArray();}, 1300);   
                console.log(chosenCard);
            }
        }
    }
};

//function that compares the two chosen cards
function compareArray(){
    if(chosenCard[0].firstChild.alt === chosenCard[1].firstChild.alt){
        for(element of chosenCard){
            element.onclick = function (){return false};
        }
        layer.classList.remove("layer"); 
        win ++;
        console.log(win);
    }
    else{
        for(element of chosenCard){
            element.classList.add("colorBackCard");
            element.lastChild.classList.add("hidden");
        }
        layer.classList.remove("layer");
        remainingShots --;
        remainingShotsHtml.textContent = remainingShots;
    }
    chosenCard = [];
    scoreFinal();
}

//function to define the end of the game according to the remaining moves or the cards found
function scoreFinal(){
    if(win === 5){
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