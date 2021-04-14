//-----------------------------------Variables---------------------------------------- 
let containerCard = document.getElementById("containerCard");

let COLORS = ["purple","grey","yellow","black","purple","green","blue","red","green","yellow","blue","red","grey","black"];


// ----------------------------------fonctions----------------------------------------

//fonction pour créer les cartes du jeux
function makeCard(color){
    let col = document.createElement("div");
    col.classList.add("offset-2","col-3","offset-lg-1","col-lg-1","my-1","sizeCard","gameCard");
    col.style.background = color;
    containerCard.appendChild(col);
}


//fonction pour parcourir le tableau des couleurs et crééer autant de carte que de couleurs
function getColorCard(){
    for(color of COLORS){
        makeCard(color);
    }
}

getColorCard();




