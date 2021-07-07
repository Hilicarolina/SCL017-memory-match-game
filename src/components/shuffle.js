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

  export default shuffle;