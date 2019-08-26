let phrase = prompt("Rentre une phrase")

function respond(phrase) {
  if(phrase.substr(-1) === "?"){
    console.log("Ouais, ouais")
  } else if (phrase === phrase.toUpperCase()){
    console.log("Pwa, calme-toi...")
  } else if (phrase.toLowerCase().includes('fortnite')){
    console.log("On s' fait une partie soum-soum ?")
  } else if (phrase === ""){
    console.log("T'es en PLS ?")
  } else {
    console.log("balek")
  }
}

respond(phrase)