const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];


  //Est-ce que tous les livres ont été au moins empruntés une fois ?

  //Quel est livre le plus emprunté ?
  tab = []
 
  for (var i in books){
    let obs = books[i].rented;
    tab.push( obs );
}
    tab.sort()
    console.log('le livre le plus emprinter est :' + tab[tab.length-1] )
  
    //Quel est le livre le moins emprunté ?
    console.log('le livre le moins emprinter est :' + tab[0])
  
    //Trouve le livre avec l'ID: 873495 ;


  //Supprime le livre avec l'ID: 133712 ;
  //Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
