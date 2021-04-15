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
};


// fonction pour mélanger les couleurs
function MakeArrayShuffleColors(colors){
    let random = colors.sort(()=> Math.random() - 0.5);
    console.log(random);
    return random;
};

//fonction pour parcourir le tableau des couleurs et crééer autant de carte que de couleurs
function getColorCard(){
    let newArrayColorsRandom = MakeArrayShuffleColors(COLORS);
    for(color of newArrayColorsRandom){
        makeCard();
    }
};

getColorCard();

//fonction pour remplacer la carte cliquez avec la couleur du tableau colors
for(let i = 0; i < gameCard.length; i++){
    gameCard[i].onclick = function(){
        chosenCard.push(gameCard[i]);
        // chosenCard[0].style.pointerEvents = "none";
        gameCard[i].style.backgroundColor = COLORS[i];

        if(chosenCard.length === 2){
            let layer = document.getElementById("hiddenLayer");
            layer.classList.add("layer"); 
            setTimeout(function(){compareArray();}, 1500);   
        }
    };
};

//fonction qui compare les deux cartes choisies
function compareArray(){
    if(chosenCard[0].style.backgroundColor === chosenCard[1].style.backgroundColor){
        let layer = document.getElementById("hiddenLayer");
        layer.classList.remove("layer"); 
        score ++;
        console.log(score);
    }

    else{
        let layer = document.getElementById("hiddenLayer");
        layer.classList.remove("layer");
        chosenCard[0].style = "none";
        chosenCard[1].style = "none";
    }
    chosenCard = [];
    console.log(chosenCard);
    scoreFinal();
}

function scoreFinal(){
    if(score === 7){
        alert("bien joué! Vous avez gagné la partie");
    }
};


// -------------------------------------------------------------- My logic code -----------------------------------------------------------------//








