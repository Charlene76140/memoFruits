//-----------------------------------Variables---------------------------------------- 
let containerCard = document.getElementById("containerCard");
let gameCard = document.getElementsByClassName("gameCard");
let chosenCard =[];
let score = 0;

let COLORS = ["purple","grey","yellow","orange","purple","green","blue","red","green","yellow","blue","red","grey","orange"];


// ----------------------------------fonctions----------------------------------------
//fonction pour créer les cartes du jeux
function makeCard(){
    let col = document.createElement("div");
    col.classList.add("offset-2","col-3","offset-lg-1","col-lg-1","my-1","sizeCard","gameCard");
    containerCard.appendChild(col);
}

//fonction pour parcourir le tableau des couleurs et crééer autant de carte que de couleurs
function getColorCard(){
    for(color of COLORS){
        makeCard();
    }
}

getColorCard();

//fonction pour remplacer la carte cliquez avec la couleur du tableau colors
for(let i = 0; i < gameCard.length; i++){
    gameCard[i].onclick = function(){
        chosenCard.push(gameCard[i]);
        // gameCard[i].classList.remove("bg-dark");
        gameCard[i].style.backgroundColor = COLORS[i];
        
        setTimeout(function(){
            if(chosenCard.length === 2){
                compareArray();}
            }, 
            
        2500); 
    }
};

//fonction qui compare les deux cartes choisies
function compareArray(){
    if(window.getComputedStyle(chosenCard[0],null).getPropertyValue("background") === window.getComputedStyle(chosenCard[1],null).getPropertyValue("background")){
        console.log(chosenCard[0].style.background);
        score ++;
        console.log(score)
    }

    else{
        // chosenCard[0].classList.add("test");
        // chosenCard[1].classList.add("test");
        chosenCard[0].style = "none";
        chosenCard[1].style = "none";
    }
    chosenCard = [];
    scoreFinal();
}

function scoreFinal(){
    if(score === 7){
        alert("bien joué! GG rené");
    }
};







