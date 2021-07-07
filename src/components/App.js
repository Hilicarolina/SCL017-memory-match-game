import pokemon from '../data/pokemon/pokemon.js';
import Match from '../components/Match.js';
import shuffle from '../components/shuffle.js';
import Results from '../components/Results.js';
import {secondsToHms, secondsToHmsAux} from '../components/TimeFormat.js';




//------------------------------------bloque de palabras de aliento--------------------------------------//
/*
let blockSix = document.createElement("div");
blockSix.id = "blockSix";
blockSix.className = "blockSix";

let textoAliento = document.createElement("div");
textoAliento.className = "textoAliento";
let palabrasAliento = document.createTextNode("¡Intentalo otra vez!");
palabrasAliento.className = "palabrasAliento";
textoAliento.appendChild(palabrasAliento);

let imgAliento = document.createElement("div");
imgAliento.className = "imgAliento";
let imagenAliento = document.createElement("img");
imagenAliento.className = "imagenAliento";
imagenAliento.src = "./assets/images/pika 1.png";
imgAliento.appendChild(imagenAliento);

blockSix.appendChild(textoAliento);
blockSix.appendChild(imgAliento);

*/
 //------------------Creando data de imágenes y ID--------------//
 let pokemonList = [];
 for (let i = 0; i < pokemon.items.length; i++) {
   pokemonList.push(pokemon.items[i], pokemon.items[i]);
 }

const App = () => {
 
//------Página de juego-----//
let blockTwo = document.createElement("div");
blockTwo.id = "blockTwo";
blockTwo.className = "blockTwo";


//-----------------------------------------------Funcion para retornar resultados -----------------------//
let blockFour = document.createElement("div");
blockFour.id = "blockFour";
blockFour.className = "blockFour";


//---------------------------------------Barra de información en el tablero de juego-----------------------------//

//-------Información de tiempo------------------//
let information = document.createElement("div");
information.className = "information";
information.id = "information";

let divTime = document.createElement("div");
divTime.className = "divTime";
let iconTime = document.createElement("span");
iconTime.className = "fas fa-clock";
let infTime = document.createElement("span");
infTime.className = "infTime";
infTime.id = "infoTime"; //
let textTime = document.createTextNode("Tiempo: 00:00");
infTime.appendChild(textTime);

divTime.appendChild(iconTime);
divTime.appendChild(infTime);
information.appendChild(divTime);
//-------Información de Match--------------------//
let divCheck = document.createElement("div");
divCheck.className = "divCheck";
let iconCheck = document.createElement("span");
iconCheck.className = "fas fa-check";
let infCheck = document.createElement("span");
infCheck.className = "infCheck";
infCheck.id = "infoCheck"; //
let textCheck = document.createTextNode("Encontradas:0");
infCheck.appendChild(textCheck);

divCheck.appendChild(iconCheck);
divCheck.appendChild(infCheck);
information.appendChild(divCheck);
//-----Información de Movimientos----------------//
let divMoving = document.createElement("div");
divMoving.className = "divMoving";
let iconMoving = document.createElement("span");
iconMoving.className = "fas fa-magic";
let infMoving = document.createElement("span");
infMoving.className = "infMoving";
infMoving.id = "infoMoving";
let textMoving = document.createTextNode("Movimientos:0");
infMoving.appendChild(textMoving);

divMoving.appendChild(iconMoving);
divMoving.appendChild(infMoving);
information.appendChild(divMoving);

//------------Se añade barra de información a página de juego----------//
blockTwo.appendChild(information);

//---------------Variables-----------------//

let cardFound = 0;
let cardMovement = 0;
let time;
let seconds = 90;
let firstCardFlipped = true;
let cardsChosen = [];

//------------------------------------------Función que cronometra el tiempo de juego-----------------------//

function timer() {
  time = setInterval(function () {
    seconds--;
    document.getElementById("infoTime").innerHTML = "Tiempo:" + secondsToHms(seconds);
  }, 1000);
}

//--------------------------------------------------------------------------------------------------------------//

  //--------------------tablero de juego------------------------//
  let gameBoard = document.createElement("div");
  gameBoard.className = "game-Board";

  //------------------------------------------------------------//


  pokemonList = shuffle(pokemonList);
  
  for (let i = 0; i < pokemonList.length; i++) {
    let card = document.createElement("div");
    card.id = pokemonList[i].id;
    card.className = "card";
    
    //Para mostrar los nombres nombre de pokemones provisoriamente-----------------------------
    let span = document.createElement("span");
    span.innerHTML=card.id
    card.appendChild(span);
   //------------------------------------------------------------------------------------------


    let imgFront = document.createElement("img");
    imgFront.id = pokemonList[i].id;
    imgFront.src = "./assets/images/ball.jpg";
    imgFront.className = "img-front";
    card.appendChild(imgFront);
    let imgBack = document.createElement("img"); 
    card.appendChild(imgBack);
    card.addEventListener("click", () => {
      if (firstCardFlipped) {
        timer();
      }
      firstCardFlipped = false;

      if (cardsChosen.length < 2 && seconds > 0) {

        cardsChosen.push(card);
        if (cardsChosen.length == 2 && cardsChosen[0] == cardsChosen[1]) {
          cardsChosen.pop(); //elimina el último elemento del arreglo.
        }
        card.removeChild(imgBack);
        let image = pokemonList[i].image;
        imgBack.setAttribute("class", "img-back");
        imgBack.setAttribute("src", image);
        card.appendChild(imgBack);

        card.style.transform = "rotateY(180deg)";

        setTimeout(() => {
          if (cardsChosen.length == 2) {
            cardMovement++;
            document.getElementById("infoMoving").innerHTML = "Movimientos:" + cardMovement;
            Match(cardsChosen);
            if (Match(cardsChosen)) {
              cardFound++;
              document.getElementById("infoCheck").innerHTML = "Encontradas:" + cardFound;
              if (cardFound == (pokemonList.length)/2) {
                clearInterval(time);
                blockFour.appendChild(Results(cardMovement, secondsToHmsAux(90 - seconds)));
                document.getElementById("container").replaceChild(blockFour, contenedorBlockTwoAux);
                document.getElementById("blockFive").style.display = "block";
                document.getElementById("blockThree").style.display = "none";
              }
            }
            for (let element of cardsChosen) {
              element.style.transform = "";
            }
            cardsChosen.length = 0;
          }
        }, 1000);


      }

      /*if (seconds == 0) {
        // alert("Lo siento!");
        document.getElementById("container").appendChild(blockSix);
        document.getElementById("contenedorBlockTwoAux").style.display = "none";
        document.getElementById("blockThree").style.display = "none";
      }*/
    });
    gameBoard.appendChild(card);
  }

  blockTwo.appendChild(gameBoard);
  let contenedorBlockTwo = document.createElement("div");
  contenedorBlockTwo.className = "contenedorBlockTwo";

  let contenedorBlockTwoAux = document.createElement("div");
  contenedorBlockTwoAux.className = "contenedorBlockTwoAux";

  //blockTwo.appendChild(blockThree);
  contenedorBlockTwo.appendChild(blockTwo);
  contenedorBlockTwoAux.appendChild(contenedorBlockTwo);

  return contenedorBlockTwoAux;
}
export default App







// CÓDIGO ORIGINAL------------------------------------------------------------------------------------------------//

/*import pokemon from '../data/pokemon/pokemon.js';


//--------------------------------Función para permutar aleatoriamente los valores de un arreglo-----------------//
function shuffle(array) {
  let lastIndex = array.length - 1;
  let value = array.length;
  while (lastIndex > 0) {
    let lastValue = array[lastIndex];
    let randonIndex = Math.floor(Math.random() * value);
    array[lastIndex] = array[randonIndex];
    array[randonIndex] = lastValue;
    lastIndex = lastIndex - 1;
    value = value - 1;
  }
  return array;
}

 //------Página de juego-----//
 let blockTwo = document.createElement("div");
 blockTwo.className = "blockTwo";

 //---------------------------------------Barra de información-------------------------------------------//

 //-------Información de tiempo------------------//
 let information = document.createElement("div");
 information.className = "information";

 let divTime = document.createElement("div");
 divTime.className = "divTime";
 let iconTime = document.createElement("span");
 iconTime.className = "fas fa-clock";
 let infTime = document.createElement("span");
 infTime.className = "infTime";
 infTime.id = "infoTime"; //
 let textTime = document.createTextNode("Tiempo: 00:00");
 infTime.appendChild(textTime);

 divTime.appendChild(iconTime);
 divTime.appendChild(infTime);
 information.appendChild(divTime);
 //-------Información de Match--------------------//
 let divCheck = document.createElement("div");
 divCheck.className = "divCheck";
 let iconCheck = document.createElement("span");
 iconCheck.className = "fas fa-check";
 let infCheck = document.createElement("span");
 infCheck.className = "infCheck";
 infCheck.id = "infoCheck"; //
 let textCheck = document.createTextNode("Encontradas:0");
 infCheck.appendChild(textCheck);

 divCheck.appendChild(iconCheck);
 divCheck.appendChild(infCheck);
 information.appendChild(divCheck);
 //-----Información de Movimientos----------------//
 let divMoving = document.createElement("div");
 divMoving.className = "divMoving";
 let iconMoving = document.createElement("span");
 iconMoving.className = "fas fa-magic";
 let infMoving = document.createElement("span");
 infMoving.className = "infMoving";
 infMoving.id = "infoMoving"; //
 let textMoving = document.createTextNode("Movimientos:0");
 infMoving.appendChild(textMoving);

 divMoving.appendChild(iconMoving);
 divMoving.appendChild(infMoving);
 information.appendChild(divMoving);

 //-----------------------------Se añade barra de información a página de juego----------//
 blockTwo.appendChild(information);

 //---------------Nuevas variables----------------------------//
 let flippedCards = 0;
  let cardOne;
  let cardTwo;
  let cardFound = 0;
  let cardMovement = 0;
  let time;
  let seconds = 0;
  let primeraCartaVolteada = true;
  

//------------------------------------------Función que cronometra el tiempo de juego-----------------------//

function secondsToHms(segundos) {

  let min = Math.floor(segundos % 3600 / 60);
  let seg = Math.floor(segundos % 3600 % 60);

  let mDisplay = min > 0 ? (min > 9 ? min + ":" : "0"+ min + ":") : "00:";
  let sDisplay = seg > 0 ? (seg < 10 ? "0"+ seg :seg ) : "00";
  
  return  mDisplay + sDisplay; 
}


function timer() {
  time = setInterval(function () {
    seconds++;
  
  document.getElementById("infoTime").innerHTML = "Tiempo:" + secondsToHms( seconds);
  }, 1000);
}


//-----------------------------------------------------------------------------------------------------------//

const App = () => {
  //------------------Creando data de imágenes--------------//
  let pokemonList = [];
  for (let i = 0; i < pokemon.items.length; i++) {
    pokemonList.push(pokemon.items[i], pokemon.items[i]);
  }

 //--------------------tablero de juego------------------------//
  let gameBoard = document.createElement("div");
  gameBoard.className = "game-Board";

  //------------------------------------------------------------//

  pokemonList = shuffle(pokemonList); //----Evaluando la función Shuffle en pokemonList
  for (let i = 0; i < pokemonList.length; i++) {
    let card = document.createElement("div");
    card.id = pokemonList[i].id;
    card.className = "card";
    let imgFront = document.createElement("img");
    imgFront.id = pokemonList[i].id;
    imgFront.src = "./assets/images/ball.jpg";
    imgFront.className = "img-front";
    card.appendChild(imgFront);
    let imgBack = document.createElement("img"); //
    card.appendChild(imgBack);
    let setOfCards = document.getElementsByClassName("card");
    imgFront.addEventListener("click", (e) => {
      if (primeraCartaVolteada == true) {
        timer();
      }
      primeraCartaVolteada = false;
      card.removeChild(imgBack);
      let carN = e.target;
      let imagenId = carN.getAttribute("id");
      let image = pokemonList[i].image;
      //let imgBack = document.createElement("img");
      imgBack.id = imagenId;
      imgBack.setAttribute("class", "img-back");
      imgBack.setAttribute("src", image);
      card.appendChild(imgBack);

      if (flippedCards < 2) {
        if (flippedCards == 0) {
          cardOne = imagenId;

        }
        if (flippedCards == 1) {
          cardTwo = imagenId;

        }
        card.style.transform = "rotateY(180deg)";
        flippedCards = flippedCards + 1;
        if (flippedCards == 2) {

          cardMovement++; //===cardMovement=cardMovement+1;
          document.getElementById("infoMoving").innerHTML = "Movimientos:" + cardMovement;
          setTimeout(() => {
            if (cardOne == cardTwo) {
              cardFound = cardFound + 1;
              document.getElementById("infoCheck").innerHTML = "Encontradas:" + cardFound;
              let imagencarta = [];
              let reemplazoOne = document.createElement("div");
              reemplazoOne.className = "card-equal";
              let reemplazoTwo = document.createElement("div");
              reemplazoTwo.className = "card-equal";
              let reemplazo = [reemplazoOne, reemplazoTwo];
              let k = 0;

              for (let j = setOfCards.length - 1; j > -1; j--) {
                imagencarta[j] = setOfCards[j].getAttribute("id");
                if (imagencarta[j] == cardOne) {
                  gameBoard.replaceChild(reemplazo[k], setOfCards[j]);
                  k = k + 1;
                }
              }
              if (cardFound == 9) {
                clearInterval(time);
                alert("Ganaste!!");
              }
            }
            for (let element of setOfCards) {
              element.style.transform = "";
              flippedCards = 0;
            }
          }, 1000);

        }
      }

    });

    gameBoard.appendChild(card);
  }

  blockTwo.appendChild(gameBoard); //estaba


  return blockTwo;
}
export default App



*/



