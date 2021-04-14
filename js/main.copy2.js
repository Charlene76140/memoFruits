let cardTest = document.getElementsByClassName("gameCard");
console.log(cardTest);

let COLORS = ["purple","grey","yellow","black","purple","green","blue","red","green","yellow","blue","red","grey","black"];
let chosenCard = [];

// //fonction distribution
// for(let i = 0; i < cardTest.length; i++){
//     cardTest[i].style.backgroundColor = COLORS[i];
//     console.log(cardTest[i]);
// };

for(let i = 0; i < cardTest.length; i++){
    cardTest[i].onclick = function(){
        chosenCard.push(cardTest[i]);
        console.log(chosenCard);
        cardTest[i].style.backgroundColor = COLORS[i];
        
        setTimeout(function()
        {   if(chosenCard.length === 2){
            compareArray();
            }
        }, 3000);
    }
}

function compareArray(){
    if(window.getComputedStyle(chosenCard[0],null).getPropertyValue("background") === window.getComputedStyle(chosenCard[1],null).getPropertyValue("background")){
        console.log(chosenCard[0].style.background);
        console.log("ok les deux sont idems")

    }
    else{
        chosenCard[0].style.backgroundColor = "#7B5E7B";
        chosenCard[1].style.backgroundColor = "#7B5E7B";
    }

    chosenCard = [];
}










