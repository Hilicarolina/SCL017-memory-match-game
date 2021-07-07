function secondsToHms(seconds) {

    let min = Math.floor(seconds % 3600 / 60);
    let seg = Math.floor(seconds % 3600 % 60);
    let mDisplay = min > 0 ? (min > 9 ? min + ":" : "0" + min + ":") : "00:";
    let sDisplay = seg > 0 ? (seg < 10 ? "0" + seg : seg) : "00";
    return mDisplay + sDisplay;
  }
  
  function secondsToHmsAux(seconds) {
    let min = Math.floor(seconds % 3600 / 60);
    let seg = Math.floor(seconds % 3600 % 60);
    let mDisplay = min + " min";
    let sDisplay = seg > 0 ? seg + " s" : "00";
    return mDisplay + " " + sDisplay;
  }

  export {secondsToHms,secondsToHmsAux};