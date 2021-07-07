import Match from '../components/Match.js';
import Results from '../components/Results.js';
import {secondsToHms, secondsToHmsAux} from '../components/TimeFormat.js';
import shuffle from '../components/shuffle.js';
import App from './App.js';
import pokemon from '../data/pokemon/pokemon.js';
//--------------------------------Función App------------------------------------------//
describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });

   it('debería ser una función', () => {
    expect(typeof App).toEqual('function');
  });

  it('cantidad de cartas en el tablero de juego', () => {
    let cartas = App().getElementsByClassName("card");
    expect(cartas).toHaveLength(18);
  });

  it('cantidad de cartas en el tablero de juego', () => {
    let cartas = App().getElementsByClassName("card");
     let cartaOneId =cartas[0].getAttribute("id");
     let pokemonListId = [];
 for (let i = 0; i < pokemon.items.length; i++) {
   pokemonListId.push(pokemon.items[i].id, pokemon.items[i].id);
 }
    expect(pokemonListId).toContain(cartaOneId);
  });

 });


//-------------------------------Función shuffle -------------------------------------//


describe("shuffle", () => {
  it("debería ser una función", () => {
    expect(typeof shuffle).toEqual('function');
  });

  it('debería retornar 4 para "[1,2,3,4]"' , () => {
    let array = [1,2,3,4];
  expect(shuffle(array)).toHaveLength(4);
  });

  it('debería retornar true para "[1,2,3,4]"' , () => {
    let array = [1,2,3,4];
  expect(shuffle(array)).toContain(3);
  });
})

//-------------------------------Funciones que dan Formato de tiempo en tablero de juego y bloque de resultados----//

describe("Time display", () => {
  it("debería mostrar 00:10 cuando son 10 segundos", () => {
    expect(secondsToHms(10)).toEqual("00:10");
  });

  it("debería mostrar 0 min 10 segundos cuando son 10 segundos", () => {
    expect(secondsToHmsAux(10)).toEqual("0 min 10 s");
  });

  it("deberia mostrar 1:10 cuando son 70 segundos", () => {
    expect(secondsToHms(70)).toEqual("01:10");
  });
  it("deberia mostrar 2:10 cuando son 130 segundos", () => {
    expect(secondsToHmsAux(70)).toEqual("1 min 10 s");
  });
});


//-----------------------------Función Results--------------------------------------//

describe('Results', () =>{

  it("Debería mostrar XXXX", () => {
    const gameResult = Results(10, 10);
    expect(gameResult instanceof HTMLElement).toBe(true);
  });

  it("Debería mostrar que la jugada fue Excelente", () => {
    const gameResult  = Results(10,10);
    const wordsPerResults = gameResult.getElementsByClassName("wordsPerResults");
    expect(wordsPerResults[0].textContent).toBe("¡Excelente jugada!");
  });


  it("Debería mostrar 3 pokéballs", () => {
    const gameResult = Results(22,5);
    const imageOfCredits = gameResult.getElementsByClassName("ball");
    expect(imageOfCredits).toHaveLength(3);
  });


  it("Debería mostrar que la jugada fue Excelente", () => {
    const gameResult  = Results(28,50);
    const wordsPerResults = gameResult.getElementsByClassName("wordsPerResults");
    expect(wordsPerResults[0].textContent).toBe("¡Nada mal!");
  });
  
  it("Debería mostrar 1 pokéballs", () => {
    const gameResult = Results(30,60);
    const imageOfCredits = gameResult.getElementsByClassName("ball");
    expect(imageOfCredits).toHaveLength(1);
  });


});

//----------------------------------Funcion efecto Match------------------------------------//

describe("Match", () => {
  it("Debería ser una función", () => {
    expect(typeof Match).toEqual("function");
  });

  it("Debería ejecutarse la función", () => {
    let cardsChosen = [];
    for (let i = 0; i < 2; i++ ) {
      cardsChosen[i] = document.createElement("div");
      cardsChosen[i].id = "identifier";
     }
    expect(Match(cardsChosen)).toBe(true);
  });

  it("No deberían aparecer los elementos que se introducen en el argumento de la función", () => {
    let cardsChosen = [];
    let father = document.createElement("div");
    for (let i = 0; i < 2; i++ ) {
      cardsChosen[i] = document.createElement("div");
      cardsChosen[i].id = "identifier";
      father.appendChild(cardsChosen[i]);
    }
    expect(Match(cardsChosen).parentNode === father).toBe(false);
  });
});

