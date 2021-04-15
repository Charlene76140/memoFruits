//-----------------------------------Variables---------------------------------------- 

let containerCard = document.getElementById("containerCard");
let gameCard = document.getElementsByClassName("gameCard");
let chosenCard =[];
let scoreHtml= document.querySelector('em');
let win = 0;
let score = 12;
let COLORS = ["purple","grey","yellow","orange","purple","green","blue","red","green","yellow","blue","red","grey","orange"];
let layer = document.getElementById("hiddenLayer");

// ----------------------------------fonctions----------------------------------------
// fonction pour mélanger les couleurs et lancer la fonction makeCard
function MakeShuffleColors(){
    COLORS.sort(()=> Math.random() - 0.5);
    console.log(COLORS);
    for(color of COLORS){
        makeCard();
    }
};


//fonction pour créer les cartes du jeux en fonction du nombre de couleur
function makeCard(){
    let createCol = document.createElement("div");
    createCol.classList.add("offset-2","col-3","offset-lg-1","col-lg-1","my-1","sizeCard","gameCard");
    containerCard.appendChild(createCol);
};


//fonction qui compare les deux cartes choisies
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
        score --;
        scoreHtml.textContent = score;
    }
    chosenCard = [];
    scoreFinal();
}

// fonction de résultat final
function scoreFinal(){
    if(win === 7){
        alert("c'est gagné");
    }
    
    else if(score < 0){
        alert("c'est perdu");
    }
};

// -------------------------------------------------------------- My logic code ------------------------------------------------------------
//affiche le nombre de tentatives restantes à l'utilisateur
scoreHtml.textContent = score;

//fonction permettant de générer des couleurs aléatoirement à partir du tableau de référence des couleurs
MakeShuffleColors();



//Boucle sur la classe "gameCard" et lance une fonction au click sur une des cartes
for(let i = 0; i < gameCard.length; i++){
    gameCard[i].onclick = function(){
        chosenCard.push(gameCard[i]);
        gameCard[i].style.backgroundColor = COLORS[i];

        if(chosenCard.length === 2){
            let layer = document.getElementById("hiddenLayer");
            layer.classList.add("layer"); 
            setTimeout(function(){compareArray();}, 1500);   
        }
    };
};


