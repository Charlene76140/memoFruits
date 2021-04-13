let cardTest = document.getElementsByClassName("colorCard");
console.log(cardTest);

const COLORS = ["purple","grey","yellow","black","purple","green","blue","red","green","yellow","blue","red","grey","black"]

// function getColorRandom(){
//     let random = Math.floor(Math.random() * Math.floor(COLORS.length));
//     return COLORS[random];
// }

for (let i = 0; i< cardTest.length; i++){
    cardTest[i].onclick = function(){
        // let choiceColor = getColorRandom();
        cardTest[i].style.background = COLORS[i];
    }
        
}