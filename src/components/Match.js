//------------Función que crea efecto de invisibilizar las tarjetas cuando estas se destapan y coinciden---------//

function Match(cardsChosen) {
    let cardsIdChosen = [];
    cardsIdChosen[0] = cardsChosen[0].getAttribute("id");
    cardsIdChosen[1] = cardsChosen[1].getAttribute("id");
    if (cardsIdChosen[0] == cardsIdChosen[1]) {
      for (let j = cardsChosen.length - 1; j > -1; j--) {
           cardsChosen[j].style.visibility = "hidden";
      }
      return true;
    }
  
  }
  export default Match;