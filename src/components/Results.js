//-------------------Función para retornar resultados que obtiene el jugador de su partida de juego -----------------//

function Results(movimientos, tiempo) {
    let externo = document.createElement("div");
    externo.className = "externo";
  
    let resultsWindow = document.createElement("div");
    resultsWindow.className = "outerEdge";
  
    let blockResults = document.createElement("div");
    blockResults.className = "blockResults";
  
    let wordsPerResults = document.createElement("div");
    wordsPerResults.className = "wordsPerResults";
  
    let imageOfCredits = document.createElement("div");
    imageOfCredits.className = "imageOfCredits";
  
    let resultsInformation = document.createElement("div");
    resultsInformation.id = "resultsInformation";
    resultsInformation.className = "resultsInformation";
    let contenedorTime = document.createElement("div");
    contenedorTime.className = "contenedorTime";
    let TimeResultsInformation = document.createTextNode("Tiempo: " + tiempo);
  
    contenedorTime.appendChild(TimeResultsInformation);
    resultsInformation.appendChild(contenedorTime);
    //let separation = document.createElement("br");
    // resultsInformation.appendChild(separation);
    let contenedorMovimientos = document.createElement("div");
    contenedorMovimientos.className = "contenedorMovimientos";
    let informationOnMovementResults = document.createTextNode("Movimientos: " + movimientos);
    contenedorMovimientos.appendChild(informationOnMovementResults);
    resultsInformation.appendChild(contenedorMovimientos);
  
    if (movimientos < 20) {
      let textOne = document.createTextNode("¡Excelente jugada!");
      textOne.className = "text";
      wordsPerResults.appendChild(textOne);
      for (let i = 0; i < 5; i++) {
        let ballOne = document.createElement("img");
        ballOne.className = "ball";
        ballOne.src = "./assets/images/ball.jpg";
        imageOfCredits.appendChild(ballOne);
      }
    } else if (movimientos >= 20 && movimientos < 25) {
      let textTwo = document.createTextNode("¡Buena jugada!");
      textTwo.className = "text";
      wordsPerResults.appendChild(textTwo);
      for (let i = 0; i < 3; i++) {
        let ballTwo = document.createElement("img");
        ballTwo.className = "ball";
        ballTwo.src = "./assets/images/ball.jpg";
        imageOfCredits.appendChild(ballTwo);
      }
  
    } else if (movimientos >= 25 && movimientos < 30) {
      let textThree = document.createTextNode("¡Nada mal!");
      textThree.className = "text";
      wordsPerResults.appendChild(textThree);
      for (let i = 0; i < 2; i++) {
        let ballThree = document.createElement("img");
        ballThree.className = "ball";
        ballThree.src = "./assets/images/ball.jpg";
        imageOfCredits.appendChild(ballThree);
      }
    } else{
      let textFour = document.createTextNode("¡Puedes hacerlo mejor!");
      textFour.className = "text";
      wordsPerResults.appendChild(textFour);
      let ballFour = document.createElement("img");
      ballFour.className = "ball";
      ballFour.src = "./assets/images/ball.jpg";
      imageOfCredits.appendChild(ballFour);
  
    }
    blockResults.appendChild(wordsPerResults);
    blockResults.appendChild(imageOfCredits);
    blockResults.appendChild(resultsInformation);
    resultsWindow.appendChild(blockResults);
    externo.appendChild(resultsWindow);
    return externo;
  }


  export default Results;