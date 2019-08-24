var sum = 1  ;
var i = prompt('La factoriel de : ', 'un nombre entier')
while (i > 1){
    sum = sum * i ;
    i -= 1 ;
}
console.log('le resultat est de' +' '+sum)
document.write('le résulat est :' + ' ' +sum)