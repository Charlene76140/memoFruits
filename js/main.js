let cardTest = document.getElementsByClassName("gameCard");
console.log(cardTest);

let COLORS = ["purple","grey","yellow","black","purple","green","blue","red","green","yellow","blue","red","grey","black"];
let chosenCard = [];

// function getColorRandom(){
//     let random = Math.floor(Math.random() * Math.floor(COLORS.length));
//     return COLORS[random];
// }
// let choiceColor = getColorRandom();


//function pour parcourir les cartes et afficher la carte choisie
for (let i = 0; i < cardTest.length; i++){
    console.log(i);
    cardTest[i].onclick = function(){
        chosenCard.push(COLORS[i]);
        console.log(chosenCard);
        cardTest[i].style.background = COLORS[i];

        // for (let j = 0; j < chosenCard.length; j++){
        //     if(chosenCard === COLORS[i]){
        //         console.log("couleur présente");
        //     }
        //     else{
        //         console.log("rien");
        //     }
            
        // }
    }
 
};








